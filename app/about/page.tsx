import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

export const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="max-w-xl m-3 md:m-8 z-50 space-y-8 border border-gray-700/50 rounded-xl p-5 sm:p-10 backdrop-blur-xl bg-black/80">
        <Link href="/">
          <Button
            variant="ghost"
            className="group hover:bg-gray-800/50 hover:text-white rounded-full px-4 py-2 duration-300 cursor-pointer"
          >
            <BsArrowLeft className="ml-2 transform transition-transform duration-300 ease-out group-hover:-translate-x-3" />
            Back
          </Button>
        </Link>

        <div className="space-y-6">
          <h1 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500 text-center">
            About Me
          </h1>

          <div className="space-y-4 text-neutral-200 text-pretty tracking-tight">
            <p>
              I&apos;m a passionate full-stack developer based in Agadir, Morocco. With strong technical training and several practical internships, I specialize in creating responsive web applications using React, Next.js, and Laravel.
            </p>
            <p>
              I enjoy tackling both frontend and backend development challenges. My workflow includes clean code, scalable architecture, and continuous learning. Currently, I&apos;m sharpening my full-stack skills by building real-world projects and experimenting with new technologies.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
              Education
            </h2>
            <div className="space-y-2">
              <p className="font-medium">
                Specialized Technician in Full-Stack Web Development – School EFET (2022–2024)
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
              Hands-on Experience
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium flex items-center gap-2 flex-wrap">
                  Junior Developer Intern – 
                  <a
                    href="https://www.weblinking.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-sky-800/30 text-sky-300 px-3 py-1 rounded-full text-sm font-semibold hover:bg-sky-700/40 hover:scale-[1.05] transition duration-200"
                  >
                    Weblinking <BiLinkExternal className="w-4 h-4" />
                  </a>
                </p>
                <p className="text-neutral-500">2023 (2 months and 12 days)</p>
              </div>

              <div>
                <p className="font-medium flex items-center gap-2 flex-wrap">
                  Junior Backend Developer – 
                  <a
                    href="https://tecforge.ma/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-emerald-800/30 text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold hover:bg-emerald-700/40 hover:scale-[1.05] transition duration-200"
                  >
                    Tec Forge <BiLinkExternal className="w-4 h-4" />
                  </a>
                </p>
                <p className="text-neutral-500">2023–2024 (3 months and 2 days)</p>
              </div>

              <div>
                <p className="font-medium flex items-center gap-2 flex-wrap">
                  Junior Full-Stack Developer – 
                  <a
                    href="https://agadir.ma/fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-blue-800/30 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold hover:bg-blue-700/40 hover:scale-[1.05] transition duration-200"
                  >
                    Municipality of Agadir <BiLinkExternal className="w-4 h-4" />
                  </a>
                </p>
                <p className="text-neutral-500">2025 (2 months)</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
