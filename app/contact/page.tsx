"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BiMapPin, BiPhone } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { MdMail } from "react-icons/md";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <main className="relative max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
        <Link href="/">
          <Button
            variant="ghost"
            className="group hover:bg-gray-800/50 absolute left-4 top-4 hover:text-white rounded-full px-4 py-2 duration-300 cursor-pointer"
          >
            <BsArrowLeft className="ml-2 transform transition-transform duration-300 ease-out group-hover:-translate-x-3" />
            Back
          </Button>
        </Link>
        <div className="space-y-6 pt-12 sm:pt-8">
          <h1 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
            Get in Touch
          </h1>
          <p className="text-pretty text-neutral-200 tracking-tight">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out
            through any of the channels below.
          </p>
          <div className="space-y-2 text-neutral-300 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <MdMail className="w-5 h-5 text-emerald-400" />
              <a
                href="mailto:benamaraamjad766@gmail.com"
                className="hover:text-emerald-400 transition-colors"
              >
                benamaraamjad766@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <BiPhone className="w-5 h-5 text-emerald-400" />
              <a
                href="tel:+212697612062"
                className="hover:text-emerald-400 transition-colors"
              >
                +212697612062
              </a>
            </div>
            <div className="flex items-center gap-2">
              <BiMapPin className="w-5 h-5 text-emerald-400" />
              <a
                href="https://maps.app.goo.gl/p7AF9ebyLud9Y9TP6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                Agadir, Morocco
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500">Send Me a Message</h2>
            <form
              action="https://formspree.io/f/xgvoyawo"
              method="POST"
              onSubmit={(e) => {
                setTimeout(() => (e.target as HTMLFormElement).reset(), 200);
              }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full p-2 rounded-lg flex items-center gap-3 border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="w-full p-2 rounded-lg flex items-center gap-3 border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message"
                  required
                  className="w-full p-2 rounded-lg flex items-center gap-3 border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                ></textarea>
              </div>
              <Button type="submit" className="w-full text-black bg-emerald-400 hover:bg-emerald-700 cursor-pointer">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
