import Link from "next/link";
import Image from "next/image";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
  id="projects"
  className="bg-zinc-950 px-6 py-24"
>
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Work
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Some of the projects I have built while learning and practicing
            modern web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-black transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >

              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-zinc-900">
                <Image         
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={500}
        
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-xs text-cyan-400 backdrop-blur">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex gap-3">

                  <Link
                    href={project.live}
                    className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-cyan-300"
                  >
                    Live Demo
                  </Link>

                  <Link
                    href={project.github}
                    className="rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    GitHub
                  </Link>

                </div>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}