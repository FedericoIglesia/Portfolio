import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import deved from "../public/cvphoto.jpeg";
import comingsoon from "../public/comingsoon.jpg";
import { useState } from "react";
import Typical from "react-typical";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Federico Iglesia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="  min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">Federico</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl "
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r border border-cyan-500 from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 transition duration-500 hover:to-white hover:from-white hover:text-teal-500 hover:border hover:border-teal-500"
                  target="_blank"
                  href="resume.pdf"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Federico Iglesia
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Full Stack Web Developer
            </h3>
            <div className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              9 years until i finally found what what really motivates me:
              <Typical
                className="text-teal-600 dark:text-white"
                steps={[
                  "Coding",
                  3000,
                  "Web Development",
                  3000,
                  "Software",
                  3000,
                  "Problem Solving",
                  3000,
                ]}
                wrapper="p"
                loop={Infinity}
              />
            </div>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a
              href="https://www.linkedin.com/in/federicojiglesia/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="dark:text-white social hover:text-blue-500 dark:hover:text-teal-300" />
            </a>
            <a
              href="https://twitter.com/iglesfe1"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterCircle className="dark:text-white social hover:text-sky-400 dark:hover:text-teal-300" />
            </a>
            <a
              href="https://github.com/FedericoIglesia"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="dark:text-white social hover:text-gray-400 dark:hover:text-teal-300" />
            </a>
            <a
              href="mailto:federico.iglesia@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdEmail className="dark:text-white social hover:text-yellow-600 dark:hover:text-teal-300" />
            </a>
          </div>
          <div className="mx-auto border-solid border-4 border-teal-500 rounded-full w-80 h-80 overflow-hidden mt-20 md:h-96 md:w-96 dark:bg-white">
            <Image
              src={deved}
              className=" rounded-full object-fill w-80 h-85 mx-auto  border-teal-500"
            />
          </div>
        </section>
        {/* <section>
         <img height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /> 
          <img height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            <img height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /> 
            <img height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"/> 
            <img height={50} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"/>

<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=whit" />
        </section> */}
        <section>
          <div className="mt-15 ">
            <h3 className="text-3xl py-10 text-center  dark:text-white">
              My Portfolio
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <a
                href="https://github.com/FedericoIglesia/TheFoodPlace"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://user-images.githubusercontent.com/85205823/189451007-7730ea3e-30aa-4c52-8869-708b42eb5985.gif"
                  className="rounded-lg object-cover"
                  style={{ height: "300px", width: "600px" }}
                ></img>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://github.com/FedericoIglesia/Athens_front"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://user-images.githubusercontent.com/85205823/192325244-1e46ba81-e6da-4f26-b3f0-ff3fd068a8eb.gif"
                  className="rounded-lg object-cover"
                  style={{ height: "300px", width: "600px" }}
                ></img>
              </a>
              {/* <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              /> */}
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://github.com/FedericoIglesia/42iChallenge"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://user-images.githubusercontent.com/85205823/192326604-e28f6f01-cc52-4611-b3cf-4793de6b5a9c.gif"
                  className="rounded-lg object-cover"
                  style={{ height: "300px", width: "600px" }}
                ></img>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              {/* <Image
                src={comingsoon}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              /> */}
              <a
                href="https://github.com/FedericoIglesia/Command_Line_Trivia"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://user-images.githubusercontent.com/85205823/201187751-886f39f1-13c9-4d8b-8577-20d844eaf227.gif"
                  className="rounded-lg object-cover"
                  style={{ height: "300px", width: "600px" }}
                ></img>
              </a>
            </div>
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={comingsoon}
              className="rounded-lg object-cover"
              style={{
                height: "300px",
                width: "600px",
                margin: "0 auto 5rem auto",
              }}
              layout="responsive"
            />
          </div>
        </section>
        <div style={{ color: "gray", fontSize: "5px" }}>
          <a href="https://www.freepik.es/vector-gratis/resumen-proximamente-diseno-fondo-estilo-semitono_10016647.htm#query=coming%20soon&position=3&from_view=keyword">
            Imagen de starline
          </a>{" "}
          en Freepik
        </div>
      </main>
    </div>
  );
}
