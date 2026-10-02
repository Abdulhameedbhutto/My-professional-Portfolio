import Image from "next/image";
import image from "../../public/images/Image01.jpeg"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pt-24"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT */}
        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Hello, I&apos;m Abdul Hameed .
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Full Stack
            <span className="block text-cyan-400">
              Web Developer
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            I build modern, responsive and user-friendly web applications
            using modern frontend and backend technologies.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-7 py-3 text-center font-semibold text-black transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-7 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-6">

            <a
              href="https://github.com/Abdulhameedbhutto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/abdul-hameed-4725053a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition hover:text-cyan-400"
            >
              LinkedIn
            </a>

            <a
              href="https://wa.me/923000296732"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition hover:text-cyan-400"
            >
              WhatsApp
            </a>

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex justify-center lg:justify-end mr-10">
         
          <div className="relative">

            {/* Outer Glow */}
            <div className="absolute -inset-5 rounded-[2rem] bg-cyan-400/10 blur-2xl" />

            {/* Profile Card */}
            <div className="relative flex h-[380px] w-[300px] items-center justify-center rounded-[2rem] border border-white/10 bg-zinc-950 sm:h-[450px] sm:w-[360px]">

 <Image
            src={image}
            alt="Profile Image"
            className="h-full w-full rounded-[2rem] object-bcover"
          />

        

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}