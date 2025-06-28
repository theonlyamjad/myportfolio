import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { SkillIcon } from "@/components/SkillIcon";
import skillsData from "../data/skills.json";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="max-w-5xl m-3 md:m-8 z-50 w-full space-y-10 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">

        {/* Header with Back and Title */}
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
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500 mt-12 sm:mt-0">
            Technical Skills
          </h1>
        </div>

        {/* Skills Section */}
        <div className="space-y-10">
          {skillsData.categories.map((category) => (
            <div key={category.name} className="space-y-4">
              <h2 className="text-2xl font-semibold">{category.name}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center bg-black/30 border border-gray-700/40 hover:border-emerald-400/40 hover:scale-105 hover:shadow-emerald-400/10 transform transition-transform rounded-xl px-4 py-5 shadow-sm"
                  >
                    <div className="text-4xl mb-3">
                      <SkillIcon name={skill.name} />
                    </div>
                    <h4 className="text-sm text-white font-medium text-center">
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default page;
