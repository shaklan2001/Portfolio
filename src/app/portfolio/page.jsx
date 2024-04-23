"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Room",
    desc: "Built ROOM, a meeting application similar to Zoom, facilitating meetings with colleagues or friends. It enables instant meetings or scheduling for later, alongside the unique feature of recording sessions, absent in Zoom.",
    img: "/project1.png",
    link: "https://room-ns.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "UA Sneakers Hub",
    desc: "Build from scratch a feature-rich e-commerce website with Next.js 13, Tailwind CSS, Strapi and Redux integrating Stripe payment gateway and UI enhancements, while actively managing content and collaborating for continuous improvement.",
    img: "/project2.png",
    link: "https://ua-sneakers-hub.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Street Monkey",
    desc: "Developed a robust web application using react allowing 1000+ users to design and customize t-shirts with various design elements, graphics, text inputs and let Dalle.AI generate stunning designs for you.",
    img: "/project3.png",
    link: "https://streetmonkey.netlify.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Bro's Store ",
    desc: "Bro's store is a full stack ecommerce website which is build using react, redux, tailwind Css and Strapi. Also intregrated Stripe payment gateway to make paymnet system smooth",
    img: "/project4.png",
    link: "https://github.com/shaklan2001/brosStore-Client",
  },
  {
    id: 5,
    color: "from-red-300 to-orange-300",
    title: "Sudoku Solver ",
    desc: "Developed a web-based Sudoku solver with an intuitive user interface, capable of solving Sudoku puzzles of various complexities. Implemented an efficient backtracking algorithm, reducing the average solving time for a Sudoku puzzle to less than 0.5 seconds.",
    img: "/project5.png",
    link: "https://shaklan2001.github.io/Sudoku-Solver/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-60 h-36 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[750px] xl:h-[380px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[700px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
