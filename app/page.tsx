"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BiBuilding } from "react-icons/bi";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { SkillIcon } from "@/components/SkillIcon";
import { NavLink } from "@/components/NavLink";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <main className="w-full max-w-2xl md:max-w-3xl space-y-10 border border-gray-700/50 rounded-xl p-6 sm:p-10 backdrop-blur-xl bg-black/80">

        <div className="flex sm:flex-row sm:justify-between sm:items-center flex-col-reverse items-start gap-4">
          <div className="flex items-center gap-3">
            <BiBuilding className="w-5 h-5" />
            <h3 className="text-gray-400">Agadir, Morocco</h3>
          </div>

          <Button variant="ghost" className="hover:bg-black/50 duration-300 hover:text-white rounded-full">
            <div className="relative flex text-sm gap-1 items-center justify-center h-3 w-3 rounded-full">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500"></span>
              <span className="inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <p>Available For Work</p>
          </Button>
        </div>

        <section>
          <h1 className="text-5xl sm:text-6xl font-bold">Amjad Ben Amara</h1>
          <h2 className="text-2xl font-bold mt-3 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
            Full Stack Web Developer
          </h2>
          <p className="tracking-tight text-neutral-300 mt-4 leading-relaxed text-left">
            I'm a passionate full-stack developer based in Agadir, Morocco. With solid training in software development and several hands-on internships, I specialize in building responsive, modern web applications using React, Next.js, and Laravel.
            <br /><br />
            I enjoy developing complete solutions from scratch, frontend to backend, and constantly push myself to learn and improve. Right now, I'm deepening my skills in full-stack JavaScript and working on real-world projects that solve real problems.
            <br /><br />
            <Link
              href="/contact"
              className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500 font-bold opacity-90 hover:opacity-100 transition-opacity"
            >
              Contact me
            </Link>{" "}
            for freelance work anytime.
          </p>
        </section>

        <nav className="space-y-5">
          <h3 className="text-xl font-bold text-emerald-400">Menu</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <NavLink href="/about" label="About" />
            <NavLink href="/work" label="Work" />
            <NavLink href="/skills" label="Skills" />
            <NavLink href="/contact" label="Contact" />
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-400">Check out my socials</h3>

            <div className="flex flex-col gap-6 mt-4">
              <Dock iconMagnification={80} iconDistance={120} className="border bg-black/30 border-gray-700/40 rounded-xl p-4">
                <DockIcon>
                  <div className="relative group rounded-full p-3 transition-transform duration-200 ease-in-out">
                    <span className="absolute inset-0 rounded-full bg-[#181717] scale-0 group-hover:scale-100 transition-transform duration-200 z-0"></span>
                    <a
                      href="https://github.com/theonlyamjad"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="relative z-10 text-white text-3xl sm:text-4xl"
                    >
                      <SkillIcon name="GitHub" />
                    </a>
                  </div>
                </DockIcon>
                <span className="text-gray-400">|</span>
                <DockIcon>
                  <div className="relative group rounded-full p-3 transition-transform duration-200 ease-in-out">
                    <span className="absolute inset-0 rounded-full bg-[#0077B5] scale-0 group-hover:scale-100 transition-transform duration-200 z-0"></span>
                    <a
                      href="https://www.linkedin.com/in/amjad-benamara/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="relative z-10 text-white text-3xl sm:text-4xl"
                    >
                      <SkillIcon name="LinkedIn" />
                    </a>
                  </div>
                </DockIcon>
              </Dock>
            </div>
          </div>
        </nav>
      </main>
    </div>
  );
}
