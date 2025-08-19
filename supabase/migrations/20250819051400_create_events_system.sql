-- Create events table
CREATE TABLE public.events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  event_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE,
  location TEXT,
  capacity INTEGER NOT NULL DEFAULT 100,
  price DECIMAL(10,2) DEFAULT 0,
  image_url TEXT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('draft', 'active', 'cancelled', 'completed')),
  created_by UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create bookings table
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  booking_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  guests_count INTEGER NOT NULL DEFAULT 1,
  total_amount DECIMAL(10,2) DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (event_id, user_id)
);

-- Create event categories table
CREATE TABLE public.event_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  color TEXT DEFAULT '#8B5CF6',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create event_category_mappings table
CREATE TABLE public.event_category_mappings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES public.event_categories(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (event_id, category_id)
);

-- Enable RLS
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_category_mappings ENABLE ROW LEVEL SECURITY;

-- RLS Policies for events
CREATE POLICY "Events are viewable by everyone" 
ON public.events 
FOR SELECT 
USING (status = 'active');

CREATE POLICY "Only organizers and admins can create events" 
ON public.events 
FOR INSERT 
WITH CHECK (
  public.has_role(auth.uid(), 'admin') OR 
  public.has_role(auth.uid(), 'organizer')
);

CREATE POLICY "Only event creators, organizers and admins can update events" 
ON public.events 
FOR UPDATE 
USING (
  created_by = auth.uid() OR
  public.has_role(auth.uid(), 'admin') OR 
  public.has_role(auth.uid(), 'organizer')
);

CREATE POLICY "Only admins can delete events" 
ON public.events 
FOR DELETE 
USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for bookings
CREATE POLICY "Users can view their own bookings" 
ON public.bookings 
FOR SELECT 
USING (user_id = auth.uid());

CREATE POLICY "Organizers and admins can view all bookings" 
ON public.bookings 
FOR SELECT 
USING (
  public.has_role(auth.uid(), 'admin') OR 
  public.has_role(auth.uid(), 'organizer')
);

CREATE POLICY "Users can create their own bookings" 
ON public.bookings 
FOR INSERT 
WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own bookings" 
ON public.bookings 
FOR UPDATE 
USING (user_id = auth.uid());

CREATE POLICY "Organizers and admins can update any booking" 
ON public.bookings 
FOR UPDATE 
USING (
  public.has_role(auth.uid(), 'admin') OR 
  public.has_role(auth.uid(), 'organizer')
);

-- RLS Policies for event categories
CREATE POLICY "Categories are viewable by everyone" 
ON public.event_categories 
FOR SELECT 
USING (true);

CREATE POLICY "Only admins can manage categories" 
ON public.event_categories 
FOR ALL 
USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for event category mappings
CREATE POLICY "Category mappings are viewable by everyone" 
ON public.event_category_mappings 
FOR SELECT 
USING (true);

CREATE POLICY "Only organizers and admins can manage category mappings" 
ON public.event_category_mappings 
FOR ALL 
USING (
  public.has_role(auth.uid(), 'admin') OR 
  public.has_role(auth.uid(), 'organizer')
);

-- Function to get available spots for an event
CREATE OR REPLACE FUNCTION public.get_available_spots(event_id UUID)
RETURNS INTEGER
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
  SELECT 
    e.capacity - COALESCE(SUM(b.guests_count), 0) as available_spots
  FROM public.events e
  LEFT JOIN public.bookings b ON e.id = b.event_id 
    AND b.status IN ('confirmed', 'pending')
  WHERE e.id = event_id
  GROUP BY e.capacity
$$;

-- Function to check if user can book event
CREATE OR REPLACE FUNCTION public.can_book_event(event_id UUID, guests_count INTEGER DEFAULT 1)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
  SELECT 
    CASE 
      WHEN e.status != 'active' THEN false
      WHEN e.event_date <= now() THEN false
      WHEN public.get_available_spots(event_id) < guests_count THEN false
      ELSE true
    END
  FROM public.events e
  WHERE e.id = event_id
$$;

-- Trigger for events timestamp updates
CREATE TRIGGER update_events_updated_at
  BEFORE UPDATE ON public.events
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Trigger for bookings timestamp updates
CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON public.bookings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default event categories
INSERT INTO public.event_categories (name, description, color) VALUES
('Conciertos', 'Presentaciones musicales en vivo', '#8B5CF6'),
('Shows', 'Espectáculos de entretenimiento', '#EC4899'),
('Eventos Privados', 'Celebraciones exclusivas', '#F59E0B'),
('Corporativos', 'Eventos empresariales', '#10B981'),
('VIP', 'Experiencias premium exclusivas', '#EF4444');
