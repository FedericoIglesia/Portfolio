import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillSkype,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import ReactTooltip from "react-tooltip";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import deved from "../public/cvphoto.jpeg";
import comingsoon from "../public/comingsoon.jpg";
import { useState } from "react";
import Typical from "react-typical";
import css from "../public/icons8-css3-color/icons8-css3-96.png";
import csharp from "../public/icons8-c-sharp-logo-ios-16-filled/icons8-c-sharp-logo-80.png";
import html from "../public/icons8-html-5-color/icons8-html-5-96.png";
import js from "../public/icons8-javascript-color/icons8-javascript-96.png";
import node from "../public/icons8-node-js-windows-11-color/icons8-node-js-96.png";
import react from "../public/icons8-react-office-l/icons8-react-80.png";
import mui from "../public/icons8-material-ui-color/icons8-material-ui-96.png";
import postgres from "../public/icons8-postgresql-color/icons8-postgresql-96.png";
import redux from "../public/icons8-redux-ios-16-filled/icons8-redux-80.png";
import ts from "../public/icons8-typescript-color/icons8-typescript-96.png";
import tailwind from "../public/icons8-tailwindcss-color/icons8-tailwindcss-96.png";
import git from "../public/icons8-git-color/icons8-git-96.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Federico Iglesia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/portfolio.ico" />
        <meta
          name="google-site-verification"
          content="Ph0FhLamAEkLg_Ro-M99G6SgCJO3MsORLWLDJY1kd9k"
        />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">Federico</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  data-tip="Dark mode"
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
              Finally found what really motivates me:
              <Typical
                className="text-teal-600 "
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
          <div className="text-5xl flex justify-center md:gap-16 py-3 text-gray-600 gap-10">
            <a
              href="https://www.linkedin.com/in/federicojiglesia/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin
                data-tip="Linkedin"
                data-effect="solid"
                className="dark:text-white social hover:text-blue-500 dark:hover:text-teal-300"
              />
            </a>
            <a href="skype:echo123?userinfo" target="_blank" rel="noreferrer">
              <AiFillSkype
                data-tip="Skype: live:federico.iglesia_1"
                data-effect="solid"
                className="dark:text-white social hover:text-sky-400 dark:hover:text-teal-300"
              />
            </a>
            <a
              href="https://github.com/FedericoIglesia"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub
                data-tip="Github"
                data-effect="solid"
                className="dark:text-white social hover:text-gray-400 dark:hover:text-teal-300"
              />
            </a>
            <a
              href="mailto:federico.iglesia@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdEmail
                data-tip="federico.iglesia@outlook.com"
                data-effect="solid"
                className="dark:text-white social hover:text-yellow-600 dark:hover:text-teal-300"
              />
            </a>
          </div>
          <div className="mx-auto border-solid border-4 border-teal-500 rounded-full w-80 h-85 overflow-hidden mt-20 md:h-96 md:w-96 dark:bg-white">
            <Image
              src={deved}
              className=" rounded-full object-fill w-80 h-85 mx-auto  border-teal-500"
            />
          </div>
        </section>
        <section>
          <h3 className="text-3xl py-10 text-center mt-16 mb-9 dark:text-white">
            My Tech Stack
          </h3>

          <div className="md:flex md:justify-center md:gap-3 justify-center  grid gap-3 content-center grid-cols-3 dark:bg-white dark:rounded-full dark:p-10">
            <ReactTooltip />
            <Image data-tip="JavaScript" src={js} />
            <Image data-tip="HTML" src={html} />
            <Image data-tip="CSS" src={css} />
            <Image data-tip="React" src={react} />
            <Image data-tip="Redux" src={redux} />
            <Image data-tip="Material UI" src={mui} />
            <Image data-tip="Tailwind CSS" src={tailwind} />
            <Image data-tip="Node.js" src={node} />
            <Image data-tip="TypeScript" src={ts} />
            <Image data-tip="C#" src={csharp} />
            <Image data-tip="PostgreSQL" src={postgres} />
            <Image data-tip="Git" src={git} />
          </div>
        </section>
        <section>
          <div className="mt-15 ">
            <h3 className="text-3xl py-10 text-center mt-16 dark:text-white">
              My Portfolio
            </h3>
          </div>
          <div className="md:grid md:grid-cols-2 gap-10 py-10 flex-col flex-wrap mx-auto">
            <div className="basis-1/3 flex-1">
              <a
                href="https://github.com/FedericoIglesia/TheFoodPlace"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://user-images.githubusercontent.com/85205823/189451007-7730ea3e-30aa-4c52-8869-708b42eb5985.gif"
                  className="rounded-lg object-cover mb-10"
                  style={{ height: "300px", width: "600px" }}
                  data-tip="Recipe Full Stack App"
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
                  className="rounded-lg object-cover mb-10"
                  style={{ height: "300px", width: "600px" }}
                  data-tip="Full Stack E-commerce"
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
                  className="rounded-lg object-cover mb-10"
                  style={{ height: "300px", width: "600px" }}
                  data-tip="Crypto currency checker"
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
                  className="rounded-lg object-cover mb-10"
                  style={{ height: "300px", width: "600px" }}
                  data-tip="Command Line Game"
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
              data-tip="This site is a work in progress. More projects will be posted soon"
              layout="responsive"
            />
          </div>
        </section>
        <div style={{ color: "gray", fontSize: "5px" }}>
          <a href="https://www.freepik.es/vector-gratis/resumen-proximamente-diseno-fondo-estilo-semitono_10016647.htm#query=coming%20soon&position=3&from_view=keyword">
            Imagen de starline
          </a>{" "}
          en Freepik icon by
          <a target="_blank" rel="noreferrer" href="https://icons8.com">
            Icons8
          </a>
        </div>
      </main>
    </div>
  );
}
