const skills = [
  {
    name: "HTML",
    level: "Advanced",
  },
  {
    name: "CSS",
    level: "Advanced",
  },
  {
    name: "JavaScript",
    level: "Intermediate",
  },
  {
    name: "React",
    level: "Intermediate",
  },
  {
    name: "Next.js",
    level: "Intermediate",
  },
  {
    name: "TypeScript",
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    level: "Intermediate",
  },
  {
    name: "Node.js",
    level: "Intermediate",
  },
  {
    name: "Express.js",
    level: "Intermediate",
  },
  {
    name: "Git & GitHub",
    level: "Intermediate",
  },
];

export default function Skills() {
  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Technologies I work with
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            A collection of technologies and tools I use to build modern
            web applications.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>

                <span className="text-xs text-cyan-400">
                  {skill.level}
                </span>
              </div>

              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-3/4 rounded-full bg-cyan-400 transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}