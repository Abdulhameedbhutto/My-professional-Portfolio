import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import logo from "./../././../public/images/logo.png";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold text-white"
            >
              <span>
              <Image src={logo} alt="Logo" className="h-20 w-20"  />
              </span>

            </a>

            <p className="mt-4 max-w-sm leading-7 text-gray-400">
              Web developer focused on creating modern, responsive and
              user-friendly digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition hover:text-cyan-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-white">
              Let&aps;s Connect
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-400">
              Interested in working together? Feel free to connect with me.
            </p>

            <div className="mt-5 flex gap-3">

  {/* GitHub */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
  >
    <FaGithub size={20} />
  </a>

  {/* LinkedIn */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
  >
    <FaLinkedinIn size={20} />
  </a>

  {/* WhatsApp */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
  >
    <FaWhatsapp size={20} />
  </a>

</div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6">

          <div className="flex flex-col gap-3 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} Abdul. All rights reserved.
            </p>

            <p>
              Built with Next.js & Tailwind CSS
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}