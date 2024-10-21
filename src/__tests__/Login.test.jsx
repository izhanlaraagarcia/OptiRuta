import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';  // Importa MemoryRouter
import Login from '../components/Login';
import { LanguageContext } from '../api/LanguageProvider';
import '@testing-library/jest-dom';  // Importa jest-dom para acceder a toBeInTheDocument


jest.mock('../api/auth', () => ({
  loginWithGoogle: jest.fn(() => Promise.reject('Error')),
}));

describe('Login Component', () => {
  it('renders login button correctly', () => {
    const contextValue = { language: 'es' };

    render(
      <MemoryRouter>  {/* Envolvemos Login en MemoryRouter */}
        <LanguageContext.Provider value={contextValue}>
          <Login />
        </LanguageContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Iniciar sesión')).toBeInTheDocument();
  });

  it('shows error on failed login', async () => {
    const contextValue = { language: 'es' };

    render(
      <MemoryRouter>  {/* Envolvemos Login en MemoryRouter */}
        <LanguageContext.Provider value={contextValue}>
          <Login />
        </LanguageContext.Provider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Iniciar sesión'));

    const errorMessage = await screen.findByText('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
    expect(errorMessage).toBeInTheDocument();
  });
});