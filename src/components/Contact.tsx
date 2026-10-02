"use client";

import { FormEvent } from "react";

export default function Contact() {

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      alert(result.message);
      return;
    }

    alert(result.message);

    form.reset();
  } catch (error) {
    console.error(error);

    alert("Something went wrong. Please try again.");
  }
};

  return (
    <section
      id="contact"
      className="bg-zinc-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Let&apos;s work together
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Have a project idea, business website or any web development
            requirement? Send me a message and let&apos;s discuss it.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="mt-12 grid items-stretch gap-10 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="h-full rounded-3xl border border-white/10 bg-black p-6 sm:p-8">

            <h3 className="text-2xl font-bold text-white">
              Let&apos;s build something great.
            </h3>

            <p className="mt-4 max-w-lg leading-7 text-gray-400">
              I am available for freelance projects, internships and
              collaboration opportunities.
            </p>

            <div className="mt-10 space-y-7">

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="mt-1 text-white">
                  your-email@example.com
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="mt-1 text-white">
                  Karachi, Pakistan
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Availability
                </p>

                <p className="mt-1 text-cyan-400">
                  Available for opportunities
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <form
            onSubmit={handleSubmit}
            className="h-full rounded-3xl border border-white/10 bg-black p-6 sm:p-8"
          >

            {/* Name + Email */}
            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400"
                />
              </div>

            </div>


            {/* Subject */}
            <div className="mt-6">

              <label
                htmlFor="subject"
                className="mb-2 block text-sm text-gray-300"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What is your project about?"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400"
              />

            </div>


            {/* Message */}
            <div className="mt-6">

              <label
                htmlFor="message"
                className="mb-2 block text-sm text-gray-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about your project..."
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400"
              />

            </div>


            {/* Button */}
            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
            >
              Send Message →
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}