interface Props {
  searchParams: { nombre?: string };
}

export default function WelcomePage({ searchParams }: Props) {
  const nombre = searchParams.nombre || '';

  if (!nombre) {
    return (
      <main style={{ textAlign: 'center', marginTop: 100 }}>
        <p>No has iniciado sesión. <a href="/">Volver al login</a></p>
      </main>
    );
  }

  return (
    <main style={{ textAlign: 'center', marginTop: 100 }}>
      <h1>¡Bienvenido/a, {nombre}!</h1>
      <p>Disfruta de tu experiencia con SkyTech.</p>
    </main>
  );
}
