import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Star, Users, Calendar } from "lucide-react";

const artists = [
  {
    name: "Freddy Mercury",
    description: "El legendario vocalista de Queen cobra vida con interpretaciones épicas de sus mayores éxitos",
    image: "/placeholder.svg",
    specialties: ["Rock", "Opera", "Baladas"],
    rating: 5,
    events: 150
  },
  {
    name: "Michael Jackson",
    description: "El Rey del Pop con sus icónicos movimientos y canciones que marcaron generaciones",
    image: "/placeholder.svg",
    specialties: ["Pop", "Dance", "Soul"],
    rating: 5,
    events: 200
  },
  {
    name: "Alex Vitor",
    description: "Interpretaciones únicas de los grandes clásicos con un toque moderno y personal",
    image: "/placeholder.svg",
    specialties: ["Clásicos", "Moderno", "Versátil"],
    rating: 5,
    events: 120
  }
];

export const ArtistsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full mb-4">
            <Music className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Nuestros Artistas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Personajes <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Icónicos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada artista es seleccionado por su talento excepcional y dedicación para recrear 
            las interpretaciones más auténticas de los grandes íconos de la música
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Music className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-yellow-500 rounded-full p-1">
                    <Star className="w-4 h-4 text-white fill-current" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 text-center">{artist.name}</h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed">{artist.description}</p>

                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {artist.specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{artist.rating}/5</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{artist.events} eventos</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-500/20 px-6 py-3 rounded-full">
            <Users className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-medium">Más de 645 eventos realizados con éxito</span>
          </div>
        </div>
      </div>
    </section>
  );
};
