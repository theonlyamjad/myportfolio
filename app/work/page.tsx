import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BiLogoGithub } from "react-icons/bi";
import { CgExternal } from "react-icons/cg";
import { BsArrowLeft } from "react-icons/bs";
import projectsData from "../data/projects.json";

export default function page () {
  const { projects } = projectsData;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="max-w-4xl m-3 md:m-8 z-50 w-full space-y-8 rounded-lg border border-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
        <div className="relative flex justify-center">
          <Link href="/">
            <Button
              variant="ghost"
              className="group hover:bg-gray-800/50 absolute left-0 hover:text-white rounded-full px-4 py-2 duration-300 cursor-pointer"
            >
              <BsArrowLeft className="ml-2 transform transition-transform duration-300 ease-out group-hover:-translate-x-3" />
              Back
            </Button>
          </Link>
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-300 h-14 mt-14 sm:mt-0">
            My Work
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg border hover:scale-105 border-neutral-800/70 bg-black/50 transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* ✅ TAGS WRAPPING FIXED HERE */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-0.5 text-[12px] rounded-md bg-slate-800/50 text-gray-300 border border-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.code || project.demo) && (
                  <div className="flex gap-3">
                    {project.code && (
                      <Button
                        variant="outline"
                        className="flex-1 text-white bg-black backdrop-blur-sm border-neutral-800/70 transition-colors duration-200 ease-linear"
                        asChild
                      >
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BiLogoGithub className="h-4 w-4 mr-2" /> Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        variant="ghost"
                        className="flex-1 text-white bg-black backdrop-blur-sm border-neutral-800/70 transition-colors duration-200 ease-linear"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <CgExternal className="h-4 w-4 mr-2" /> Live demo
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

