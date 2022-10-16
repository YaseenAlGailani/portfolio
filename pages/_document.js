import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Indie+Flower&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="transition-colors bg-neutral-50 dark:bg-slate-800 text-neutral-800">
        <Main />
        <NextScript />
        <Script id="theme">
          {`if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
              html.classList.add("dark");
            } else {
              html.classList.remove("dark");
          }`}
        </Script>
      </body>
    </Html>
  );
}
