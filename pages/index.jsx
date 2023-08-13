import { useRef } from "react";
import Head from "next/head";
import GLogo from "../components/icons/GLogo";
import Cascade from "../components/Cascade";
import TechOrbit from "../components/techOrbit/TechOrbit";
import Hr from "../components/Hr";
import Projects from "../components/projects/Projects";
import { Nav, NavList } from "../components/nav";
import StickyNote from "../components/StickyNote";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import CodepenIcon from "../components/icons/CodepenIcon";
import FreeCircle from "../components/FreeCircle";
import HeroArt from "../components/HeroArt";
import { motion } from "framer-motion";
import ExtLinkIcon from "../components/icons/ExtLinkIcon";

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
    <div className="px-3 mx-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <title>gailani.dev</title>
        <meta
          content="Hi, I'm Yaseen 👋, I like building engaging, accessible, and visually stunning user interfaces."
          name="description"
        />
        <meta
          content="Frontend web developer, React developer"
          name="keywords"
        />
        <meta content="https://gailani.dev/og-image.png" name="image" />
        <meta content="https://gailani.dev" property="og:url" />
        <meta
          content="Yaseen AlGailani - Web Developer Portfolio"
          property="og:title"
        />
        <meta
          content="Hi, I'm Yaseen 👋, I like building engaging, accessible, and visually stunning user interfaces."
          property="og:description"
        />
        <meta content="https://gailani.dev/og-image.png" property="og:image" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@thegailani" name="twitter:creator" />
        <meta content="@thegailani" name="twitter:site" />
        <meta
          content="Yaseen AlGailani - Web Developer Portfolio"
          name="twitter:title"
        />
        <meta
          content="Hi, I'm Yaseen 👋, I like building engaging, accessible, and visually stunning user interfaces."
          name="twitter:description"
        />
        <meta content="https://gailani.dev/og-image.png" name="twitter:image" />
        <meta content="Yaseen AlGailani" name="twitter:alt" />
      </Head>
      <div>
        <header>
          <div className="relative flex justify-between items-center container mx-auto mb-4 lg:mb-8 py-4 lg:py-12">
            <GLogo />
            <motion.div
              className="block"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              <Nav>
                <NavList>
                  <a
                    className="flex"
                    href="https://blog.gailani.dev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Blog <span className="sr-only">(opens in a new tab)</span>
                    <span aria-hidden="true" className="ml-2">
                      <ExtLinkIcon />
                    </span>
                  </a>
                  <a
                    onClick={(e) => {
                      handleNavItemClick(e, section1Ref.current);
                    }}
                  >
                    Tech I build with
                  </a>
                  <a
                    onClick={(e) => {
                      handleNavItemClick(e, section2Ref.current);
                    }}
                  >
                    Things I&apos;ve built
                  </a>
                  <a
                    onClick={(e) => {
                      handleNavItemClick(e, section3Ref.current);
                    }}
                  >
                    Get in touch
                  </a>
                </NavList>
              </Nav>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center container mx-auto mb-8">
            <div className="relative">
              <Cascade className="mb-8">
                <h1 className="text-8xl sm:text-9xl lg:text-9xl xl:text-12xl 2xl:text-15xl font-display transition-all">
                  <motion.span
                    className="block"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0 }}
                  >
                    Hello
                  </motion.span>
                  <motion.span
                    className="block"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    world!
                  </motion.span>
                </h1>
              </Cascade>
            </div>
            <div>
              <HeroArt />
            </div>
          </div>
          <Hr className="mb-12" />
          <div className="container mx-auto mb-12">
            <p className="flex items-center">
              <span className="text-6xl mr-8">👋</span>
              <span className="text-2xl sm:text-4xl text-palette-blue-900 dark:text-palette-grey sm:leading-[3rem]">
                Hi, I&apos;m Yaseen, I like building engaging, accessible, and
                visually stunning user interfaces.
              </span>
            </p>
          </div>
        </header>
        <Hr className="sm:mb-12 md:mb-20" />
        <main>
          <section
            ref={section1Ref}
            className="relative pt-8 container mx-auto mb-12 sm:pb-0 sm:mb-12 md:mb-20"
          >
            <Cascade>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl text-palette-blue-900 font-display mb-8">
                Tech I build with
              </h2>
            </Cascade>
            <div className="grid grid-cols-12 ">
              <TechOrbit />
            </div>
          </section>
          <Hr className="sm:mb-12 md:mb-20" />
          <section
            ref={section2Ref}
            className="relative pt-8 container mx-auto mb-8 sm:mb-12 md:mb-20"
          >
            <Cascade>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl text-palette-blue-900 font-display mb-8">
                Things I&apos;ve built
              </h2>
            </Cascade>
            <div>
              <Projects />
            </div>
          </section>
          <Hr className="sm:mb-12 md:mb-20" />
          <section
            ref={section3Ref}
            className="relative pt-8 container mx-auto mb-8 sm:mb-12 md:mb-20"
          >
            <Cascade>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl text-palette-blue-900  font-display mb-8">
                Get in touch
              </h2>
            </Cascade>
            <div className="relative mb-40 sm:mb-52">
              <StickyNote classes="absolute -top-10 left-32 lg:bottom-auto z-10 -rotate-6 p-4 sm:p-8">
                <p className="rotate-2 text-2xl">
                  please find me on linkedin ✌️
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
    </div>
  );
}
