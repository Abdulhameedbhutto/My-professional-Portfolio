const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Modern, responsive and user-friendly interfaces using React, Next.js, TypeScript and Tailwind CSS.",
  },
  {
    number: "02",
    title: "Full Stack Development",
    description:
      "Complete web applications with frontend, backend APIs, database integration and authentication.",
  },
  {
    number: "03",
    title: "E-Commerce Development",
    description:
      "Professional online stores with products, cart, checkout, responsive design and backend functionality.",
  },
  {
    number: "04",
    title: "Website Development",
    description:
      "Business and personal websites designed to be fast, responsive and easy to use.",
  },
];

export default function Services() {
  return (
   <section
  id="services"
  className="bg-black px-6 py-24"
>
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            What I Do
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Services I Provide
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            I create modern digital solutions focused on performance,
            responsiveness and a great user experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">

          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-3xl border border-white/10 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-cyan-400">
                  {service.number}
                </span>

                <span className="text-2xl text-gray-600 transition group-hover:text-cyan-400">
                  ↗
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {service.description}
              </p>

              <div className="mt-8 h-px w-full bg-white/10 transition group-hover:bg-cyan-400/40" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}