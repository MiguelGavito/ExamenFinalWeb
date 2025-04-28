'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, contraseña }),
      });
      const data = await res.json();

      if (data.exito) {
        const params = new URLSearchParams({
          nombre: data.nombre,
        });
        router.push(`/welcomepage?${params.toString()}`);
      } else {
        setError('Usuario o contraseña no válidos');
      }
    } catch (err) {
      console.error(err);
      setError('Error de servidor. Inténtalo más tarde.');
    }
  };

  return (
    <main className="container">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Usuario
          <input
            type="text"
            value={usuario}
            onChange={e => setUsuario(e.currentTarget.value)}
            required
          />
        </label>

        <label>
          Contraseña
          <input
            type="password"
            value={contraseña}
            onChange={e => setContraseña(e.currentTarget.value)}
            required
          />
        </label>

        <button type="submit">Entrar</button>
      </form>

      <style jsx>{`
        .container {
          max-width: 400px;
          margin: 4rem auto;
          padding: 2rem;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        h1 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #333;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        label {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
          font-weight: 500;
          color: #555;
        }
        input {
          margin-top: 0.5rem;
          padding: 0.75rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          margin-top: 1.5rem;
          padding: 0.75rem;
          font-size: 1rem;
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s;
        }
        button:hover {
          background: #005bb5;
        }
        .error {
          color: #e00;
          margin-bottom: 1rem;
          text-align: center;
        }
      `}</style>
    </main>
  );
}
