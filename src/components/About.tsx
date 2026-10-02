export default function About() {
  return (
   <section
  id="about"
  className="bg-zinc-950 px-6 py-24"
>
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              About Me
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              I turn ideas into
              <span className="text-cyan-400"> digital experiences.</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              I am a passionate web developer focused on building modern,
              responsive and user-friendly web applications. I enjoy learning
              new technologies and turning real-world ideas into useful
              digital products.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              I completed the Modern Web & App Development course from
              Saylani and I am continuously improving my frontend and backend
              development skills.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-2xl font-bold text-white">10+</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Technologies
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-2xl font-bold text-white">5+</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Projects
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-2xl font-bold text-white">2026</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Started Career
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-2xl font-bold text-white">
              My Development Journey
            </h3>

            <div className="mt-8 space-y-8">

              <div className="border-l-2 border-cyan-400 pl-6">
                <p className="text-sm text-cyan-400">
                  Education
                </p>
                <h4 className="mt-1 text-lg font-semibold">
                  Intermediate Arts
                </h4>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Completed Intermediate education and continued learning
                  modern web development.
                </p>
              </div>

              <div className="border-l-2 border-cyan-400 pl-6">
                <p className="text-sm text-cyan-400">
                  Professional Training
                </p>
                <h4 className="mt-1 text-lg font-semibold">
                  Saylani Modern Web & App Development
                </h4>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Completed professional training in modern frontend and
                  backend web development.
                </p>
              </div>

              <div className="border-l-2 border-cyan-400 pl-6">
                <p className="text-sm text-cyan-400">
                  Current Focus
                </p>
                <h4 className="mt-1 text-lg font-semibold">
                  Full Stack Development
                </h4>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Building real-world projects and improving frontend,
                  backend and database development skills.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}