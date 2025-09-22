import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AuthProvider, useAuth } from '../AuthContext';

// Mock Supabase
vi.mock('@supabase/supabase-js', () => ({
  createClient: vi.fn(() => ({
    auth: {
      getSession: vi.fn(() => Promise.resolve({ data: { session: null }, error: null })),
      onAuthStateChange: vi.fn(() => ({
        data: { subscription: { unsubscribe: vi.fn() } }
      })),
      signInWithPassword: vi.fn(() => Promise.resolve({ data: null, error: null })),
      signUp: vi.fn(() => Promise.resolve({ data: null, error: null })),
      signOut: vi.fn(() => Promise.resolve({ error: null })),
      resetPasswordForEmail: vi.fn(() => Promise.resolve({ data: null, error: null }))
    },
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        eq: vi.fn(() => ({
          single: vi.fn(() => Promise.resolve({ data: null, error: null }))
        }))
      }))
    }))
  }))
}));

// Test component to use the hook
const TestComponent = () => {
  const { user, loading } = useAuth();
  
  return (
    <div>
      <div data-testid="loading">{loading ? 'Loading' : 'Not Loading'}</div>
      <div data-testid="user">{user ? 'Authenticated' : 'Not Authenticated'}</div>
    </div>
  );
};

describe('AuthContext', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should provide initial loading state', () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    const loadingElement = screen.getByTestId('loading');
    const userElement = screen.getByTestId('user');
    
    expect(loadingElement.textContent).toBe('Loading');
    expect(userElement.textContent).toBe('Not Authenticated');
  });

  it('should render without crashing', () => {
    const { container } = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(container).toBeDefined();
    expect(screen.getByTestId('loading')).toBeDefined();
    expect(screen.getByTestId('user')).toBeDefined();
  });

  it('should provide auth functions', () => {
    let authFunctions: any = null;
    
    const TestAuthFunctions = () => {
      authFunctions = useAuth();
      return <div>Test</div>;
    };

    render(
      <AuthProvider>
        <TestAuthFunctions />
      </AuthProvider>
    );

    expect(authFunctions).toBeDefined();
    expect(typeof authFunctions.signIn).toBe('function');
    expect(typeof authFunctions.signUp).toBe('function');
    expect(typeof authFunctions.signOut).toBe('function');
  });
});
