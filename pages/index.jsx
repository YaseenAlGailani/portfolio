import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import GLogo from "../components/icons/GLogo";
import HeroImage from "../public/hero.svg";
import Cascade from "../components/Cascade";
import TechOrbit from "../components/TechOrbit/TechOrbit";
import Hr from "../components/Hr";
import Projects from "../components/Projects/Projects";
import { Nav, NavList } from "../components/Nav/Nav";
import StickyNote from "../components/StickyNote";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import CodepenIcon from "../components/icons/CodepenIcon";
import FreeCircle from "../components/FreeCircle";

export default function Home() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollTo = (node) => {
    const position = node.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: position, behavior: "smooth" });
  };

  const handleNavItemClick = (e, section) => {
    e.preventDefault();
    scrollTo(section);
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <title>gailani.dev</title>
        <meta
          content="Hi, I'm Yaseen, a frontend web developer passionate about bringing ideas to the web."
          name="description"
        />
        <meta
          content="Frontend web developer, React developer"
          name="keywords"
        />
        <meta content="https://gailani.dev/og-image.png" name="image" />
        <meta content="https://gailani.dev" property="og:url" />
        <meta content="Yaseen AlGailani" property="og:title" />
        <meta
          content="Hi, I'm Yaseen, a frontend web developer passionate about bringing ideas to the web."
          property="og:description"
        />
        <meta
          content="https://gailani.dev/og-image.png"
          property="og:image"
        />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@thegailani" name="twitter:creator" />
        <meta content="@thegailani" name="twitter:site" />
        <meta content="Yaseen" name="twitter:title" />
        <meta
          content="Hi, I'm Yaseen, a frontend web developer passionate about bringing ideas to the web."
          name="twitter:description"
        />
        <meta
          content="https://gailani.dev/og-image.png"
          name="twitter:image"
        />
        <meta content="Yaseen AlGailani" name="twitter:alt" />
      </Head>
      <div>
        <header>
          <div className="relative flex justify-between items-center container mx-auto mb-8 py-12">
            <span aria-hidden={true}>
              <GLogo />
            </span>
            <Nav>
              <NavList>
                <a
                  to={section1Ref.current}
                  onClick={(e) => {
                    handleNavItemClick(e, section1Ref.current);
                  }}
                >
                  Tech I build with
                </a>
                <a
                  to={section2Ref.current}
                  onClick={(e) => {
                    handleNavItemClick(e, section2Ref.current);
                  }}
                >
                  Things I built
                </a>
                <a
                  to={section3Ref.current}
                  onClick={(e) => {
                    handleNavItemClick(e, section3Ref.current);
                  }}
                >
                  Get in touch
                </a>
              </NavList>
            </Nav>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center container mx-auto">
            <div className="relative">
              <Cascade className="mb-8" before="#">
                <h1 className="text-8xl sm:text-9xl lg:text-9xl xl:text-12xl 2xl:text-15xl font-display transition-all">
                  Hello <br aria-hidden="true" />
                  world!
                </h1>
              </Cascade>
              <p className="font-handwriting text-neutral-500 dark:text-neutral-200 -mt-4">
                so creative...
              </p>
            </div>
            <div>
              <Image
                aria-hidden="true"
                src={HeroImage}
                alt="building an app in a code editor"
              />
            </div>
          </div>
          <Hr className="mb-12" />
          <div className="container mx-auto mb-12">
            <p className="flex items-center">
              <span className="text-6xl mr-8">👋</span>
              <span className="text-2xl sm:text-4xl font-bold text-palette-blue-900 dark:text-palette-grey">
                Hi, I&apos;m Yaseen, <br />
                I&apos;m passionate about bringing ideas to{" "}
                <span className="relative inline-block bg-neutral-100 dark:bg-slate-700 py-2 px-1 after:content-[''] after:absolute after:-bottom-0 after:left-0 after:block after:bg-palette-yellow after:w-full after:h-2">
                  the web!
                </span>
              </span>
            </p>
          </div>
        </header>
        <Hr className="sm:mb-12 md:mb-20" />
        <main>
          <section
            ref={section1Ref}
            className="relative pt-8 container mx-auto pb-32 sm:pb-0 mb-8 sm:mb-12 md:mb-20"
          >
            <Cascade before="##">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl text-palette-blue-900 font-display mb-8">
                Tech I build with
              </h2>
            </Cascade>
            <StickyNote classes="absolute bottom-0 lg:bottom-auto z-10">
              <p className="-rotate-1 sm:text-[1.3rem]">
                I should add more things, I want people to take me seriously!
              </p>
            </StickyNote>
            <div className="grid grid-cols-12 ">
              <TechOrbit />
            </div>
          </section>
          <Hr className="sm:mb-12 md:mb-20" />
          <section
            ref={section2Ref}
            className="relative pt-8 container mx-auto mb-8 sm:mb-12 md:mb-20"
          >
            <Cascade before="##">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl text-palette-blue-900 font-display mb-8">
                Things I built
              </h2>
            </Cascade>
            <StickyNote classes="absolute z-10 right-0 top-0 -rotate-6 bg-cyan-300 dark:bg-cyan-300">
              <p className="rotate-3">
                a few of the least embarrassing things...
              </p>
            </StickyNote>
            <div>
              <Projects />
            </div>
          </section>
          <Hr className="sm:mb-12 md:mb-20" />
          <section
            ref={section3Ref}
            className="relative pt-8 container mx-auto mb-8 sm:mb-12 md:mb-20"
          >
            <Cascade before="##">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl text-palette-blue-900  font-display mb-8">
                Get in touch
              </h2>
            </Cascade>
            <div className="relative mb-40 sm:mb-52">
              <StickyNote classes="absolute top-0 left-32 lg:bottom-auto z-10 -rotate-6 p-1 sm:p-4">
                <p className="rotate-2 sm:text-[1.2rem]">
                  I can&apos;t be bothered to build a form, please get in touch
                  with me on linkedin ✌️
                </p>
              </StickyNote>
              <input
                disabled
                aria-disabled={true}
                type="text"
                className="border p-4 rounded-xl sm:w-96"
                placeholder="Enter you email"
              />
            </div>
            <div className="flex justify-between mx-auto sm:mx-0 items-center sm:max-w-lg">
              <div>
                <a
                  className="relative hover:after:opacity-100 hover:after:-bottom-7 after:opacity-0 after:content-[''] after:w-full after:h-2 after:block after:bg-palette-yellow after:rounded-sm after:absolute after:bottom-0 rounded-full inline-block after:transition-all"
                  href="https://github.com/YaseenAlGailani"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Check my GitHub page</span>
                  <GithubIcon />
                </a>
              </div>
              <FreeCircle>
                <div>
                  <a
                    className="relative hover:after:opacity-100 hover:after:-bottom-7 after:opacity-0 after:content-[''] after:w-full after:h-2 after:block after:bg-palette-yellow after:rounded-sm after:absolute after:bottom-0 rounded-full inline-block after:transition-all"
                    href="https://www.linkedin.com/in/yaseenalgailani"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">Check my Linked-in profile</span>
                    <LinkedinIcon />
                  </a>
                </div>
              </FreeCircle>
              <div>
                <a
                  className="relative hover:after:opacity-100 hover:after:-bottom-7 after:opacity-0 after:content-[''] after:w-full after:h-2 after:block after:bg-palette-yellow after:rounded-sm after:absolute after:bottom-0 rounded-full inline-block after:transition-all"
                  href="https://twitter.com/TheGailani"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Check my twitter page</span>
                  <TwitterIcon />
                </a>
              </div>
              <div>
                <a
                  className="relative hover:after:opacity-100 hover:after:-bottom-7 after:opacity-0 after:content-[''] after:w-full after:h-2 after:block after:bg-palette-yellow after:rounded-sm after:absolute after:bottom-0 rounded-full inline-block after:transition-all"
                  href="https://codepen.io/YaseenAlGailani"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Check my Code pen page</span>
                  <CodepenIcon />
                </a>
              </div>
            </div>
          </section>
        </main>
        <Hr />
        <footer className="container mx-auto py-8 flex justify-between">
          <GLogo small />
          <span className="text-neutral-700 dark:text-neutral-400">
            © Gailani {new Date().getFullYear()}
          </span>
        </footer>
      </div>
    </>
  );
}
