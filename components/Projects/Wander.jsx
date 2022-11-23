import Hr from "../Hr";
import styles from "./Projects.module.css";

export default function Wander() {
  return (
    <>
      <div className={styles.projectBody}>
        <p>
          <strong>Stack: </strong>Reactjs, Nextjs, Nodejs, TypeScript,
          Tailwindcss, PostgreSQL, and a bunch of libraries
        </p>
        <Hr className="my-4" />
        <p>
          This one is a side project of mine. A trip planner where you can put
          all your itenrary in one place.
        </p>
        <p>
          It&apos;s a work in progress, get in touch if you would like to learn
          more.
        </p>
        <a
          className={styles.visitLink}
          href="https://www.wander-planner.com/"
          target="_blank"
          rel="noreferrer"
        >
          Visit website
        </a>
      </div>
      <footer></footer>
    </>
  );
}
