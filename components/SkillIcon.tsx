'use client';
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const SkillIcon = ({ name }: { name: string }) => {
  const icons: Record<string, ReactNode> = {
    // Frontend
    "HTML": <Icon icon="logos:html-5" className="w-6 h-6" />,
    "CSS": <Icon icon="logos:css-3" className="w-6 h-6" />,
    "JavaScript": <Icon icon="logos:javascript" className="w-6 h-6" />,
    "React.js": <Icon icon="logos:react" className="w-6 h-6" />,
    "Next.js": <Icon icon="logos:nextjs-icon" className="w-6 h-6" />,
    "Tailwind CSS": <Icon icon="logos:tailwindcss-icon" className="w-6 h-6" />,
    "Bootstrap": <Icon icon="logos:bootstrap" className="w-6 h-6" />,
    "Shadcn UI": <Icon icon="simple-icons:shadcnui" className="w-6 h-6" />,

    // Backend
    "PHP": <Icon icon="logos:php" className="w-6 h-6" />,
    "Laravel": <Icon icon="logos:laravel" className="w-6 h-6" />,
    "SQL": <Icon icon="logos:mysql-icon" className="w-6 h-6" />,
    "VB.Net": <Icon icon="logos:dotnet" className="w-6 h-6" />,
    "Java (OOP)": <Icon icon="logos:java" className="w-6 h-6" />,
    "C#": <Icon icon="logos:c-sharp" className="w-6 h-6" />,
    "C++": <Icon icon="logos:c-plusplus" className="w-6 h-6" />,

    // Tools
    "Git & GitHub": <Icon icon="logos:git-icon" className="w-6 h-6" />,
    "PhpMyAdmin": <Icon icon="logos:mysql-icon" className="w-6 h-6" />,
    "cPanel": <Icon icon="logos:cpanel" className="w-6 h-6" />,
    "WordPress": <Icon icon="logos:wordpress-icon" className="w-6 h-6" />,

    //Social Media
    "LinkedIn": <Icon icon="mdi:linkedin" className="w-6 h-6" />,
    "GitHub": <Icon icon="mdi:github" className="w-6 h-6" />,

    // Languages
    "Arabic (Native)": (
      <img src="/skills/languages/arabic.svg" alt="Arabic" className="w-6 h-6 object-cover rounded-sm" />
    ),
    "English (C1)": (
      <img src="/skills/languages/english.svg" alt="English" className="w-6 h-6 object-cover rounded-sm" />
    ),
    "French (B1-B2)": (
      <img src="/skills/languages/french.svg" alt="French" className="w-6 h-6 object-cover rounded-sm" />
    ),
    "German (B2)": (
      <img src="/skills/languages/german.svg" alt="German" className="w-6 h-6 object-cover rounded-sm" />
    ),
  };

  const icon = icons[name];

  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center"
    >
      {icon ?? <div className="w-6 h-6 bg-gray-600 rounded-full" />}
    </motion.div>
  );
};
