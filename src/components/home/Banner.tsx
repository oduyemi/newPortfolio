"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Predefined positions for the floating code snippets
const FLOATING_SNIPPET_POSITIONS = [
  { left: "15%", top: "20%", rotate: -3 },
  { left: "85%", top: "25%", rotate: 2 },
  { left: "25%", top: "70%", rotate: -1 },
  { left: "75%", top: "65%", rotate: 4 },
  { left: "50%", top: "40%", rotate: -2 },
  { left: "50%", top: "80%", rotate: 1 },
];

export const Banner: React.FC = () => {
  return (
    <>
   <div className="h-16" />
    <section className="relative w-full pt-[80px] bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Subtle grid background */}
      <div className="relative z-0 opacity-10">
        <div className="relative bg-[url('/images/grid.jpg')] bg-center [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)]" />
      </div>

      {/* Floating code snippets in background with fixed positions */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {FLOATING_SNIPPET_POSITIONS.map((pos, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.03, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="text-[10px] leading-tight font-mono text-[#ccc]"
            style={{
              left: pos.left,
              top: pos.top,
              transform: `rotate(${pos.rotate}deg)`,
            }}
          >
            {`// Code snippet ${i + 1}`}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Left Panel - Code Focus */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-2"
          >
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-xl font-bold tracking-tight text-[#999] bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 shiftleft">
                &lt;dev/&gt;
              </h1>
              <p className="text-lg text-[#ccc] font-light mvup shiftleft">
                Crafting elegant solutions
              </p>
            </div>

            <div className="space-y-1 python">
              <CodeSnippet
                language="python"
                code={`from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get("/")\ndef root():\n    return {"message": "Hello World"}`}
              />
              <CodeSnippet
                language="javascript"
                code={`// Clean async fetch\nasync function getData() {\n  const res = await fetch('/api/data')\n  return res.json()\n}`}
              />
            </div>
          </motion.div>

          {/* Center Portrait - Absolute Positioned and Fully Detached */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="relative h-[250px] lg:h-[300px] flex items-center justify-center"
>
  <div className="relative top-[-70%] lg:top-0 left-[7%] -translate-x-1/2 h-60 w-60 lg:h-72 lg:w-72 group hero">
    {/* Glow layer */}
    <div className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-20 blur-xl w-full h-full group-hover:opacity-30 transition-opacity duration-300" />

    {/* Inner image container */}
    <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-1 w-full h-full rounded-full">
      <div className="w-full h-full bg-background overflow-hidden rounded-full">
        <Image
          src="/images/me.png"
          alt="Portrait"
          width={360}
          height={360}
          className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
          priority
        />
      </div>
    </div>
  </div>
</motion.div>


          {/* Right Panel - Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-2"
          >
            {/* <div className="flex flex-col items-center lg:items-end">
              <h1 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
                {`{ engineer }`}
              </h1>
              <p className="mt-2 text-lg text-gray-600 font-light">
                Architecting robust systems
              </p>
            </div> */}

            <div className="space-y-1 mt-[-24%] typescript">
              <CodeSnippet
                language="typescript"
                code={`// Type-safe utility\ntype User = {\n  id: string;\n  name: string;\n};\n\nconst getUser = (id: string): Promise<User> => {\n  return db.users.find(id);\n};`}
                align="right"
              />
              <CodeSnippet
                language="java"
                code={`@RestController\npublic class UserController {\n  @GetMapping("/users")\n  public List<User> getUsers() {\n    return userService.findAll();\n  }\n}`}
                align="right"
              />
            </div>
          </motion.div>
        </div>

        {/* Centered motto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-[-6%] col-span-1 lg:col-span-3 text-center text-[#777] shiftleft text-sm font-light italic"
        >
          &ldquo;Turning complex problems into elegant, maintainable solutions&rdquo;

        </motion.p>
      </div>
    </section>
    </>
  );
};

// Reusable code snippet component (unchanged)
const CodeSnippet = ({
  code,
  language,
  align = "left",
}: {
  code: string;
  language: string;
  align?: "left" | "right";
}) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={`bg-gray-900 rounded-lg overflow-hidden shadow-lg ${
        align === "right" ? "ml-auto" : "mr-auto"
      }`}
      style={{ maxWidth: "100%", width: "fit-content" }}
    >
      <div className="flex items-center px-4 py-2 bg-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-2 text-[10px] text-gray-400 font-mono">
          {language}
        </span>
      </div>
      <pre className="px-3 py-2 text-[10px] leading-tight text-gray-100 font-mono overflow-x-auto">
        {code}
      </pre>
    </motion.div>
  );
};