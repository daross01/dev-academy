export default function Home() {
  const modules = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
  ];

  return (
    <main className="min-h-screen bg-zinc-100 p-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10">
          <h1 className="text-5xl font-bold">
            Dev Academy 🚀
          </h1>

          <p className="mt-3 text-zinc-600">
            Mi roadmap completo hacia Fullstack Developer.
          </p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module}
              className="rounded-xl bg-white p-6 shadow-md transition hover:scale-105"
            >
              <h2 className="text-xl font-semibold">
                {module}
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                Próximamente...
              </p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}