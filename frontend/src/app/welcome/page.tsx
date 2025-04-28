// src/app/welcome/page.tsx

'use client';

import { useEffect, useState } from 'react';

export default function WelcomePage() {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    setUserData({ name: 'Juan Gómez', email: 'jgomez@skytech.com' });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Bienvenido</h2>
        {userData ? (
          <div>
            <p><strong>Nombre:</strong> {userData.name}</p>
            <p><strong>Correo:</strong> {userData.email}</p>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
}
