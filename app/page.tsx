export default function Home() {
  const modules = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Backend",
    "PostgreSQL",
  ];

return (
  <div className="min-h-screen bg-zinc-100">
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-5xl p-6">
        <h1 className="text-4xl font-bold">
          Dev Academy 🚀
        </h1>

        <nav className="mt-4 flex gap-6">
          <a href="#">Inicio</a>
          <a href="#">Cursos</a>
          <a href="#">Contacto</a>
        </nav>
      </div>
    </header>

    <main className="mx-auto max-w-5xl p-8">
      <section className="mb-10">
        <h2 className="text-2xl font-semibold">
          Bienvenido
        </h2>

        <p className="mt-2 text-zinc-600">
          Aprende desarrollo web moderno paso a paso.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">
          Sobre Dev Academy 
        </h2>

        <p className="mt-6 text-zinc-600">
          Una plataforma creada para aprender desarrollo web moderno.
        </p>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">
          Roadmap
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <article
              key={module}
              className="rounded-xl bg-white p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold">
                {module}
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                En desarrollo
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>

    <footer className="mt-12 border-t bg-white">
      <div className="mx-auto max-w-5xl p-6">
        <p>© 2026 Dev Academy</p>
      </div>
    </footer>
  </div>
);
}