import Hr from "../Hr";
import styles from "./Projects.module.css";

export default function Egytek() {
  return (
    <>
      <div className={styles.projectBody}>
        <p>
          <strong>Stack: </strong>HTML, CSS, JavaScript.
        </p>
        <Hr className="my-4" />
        <p>
          This one is from way back. It&apos;s one of the first real world
          websites - for a real client I&apos;d ever built and it&apos;s dear to
          me.
        </p>
      </div>
      <footer>
        <a
          className={styles.visitLink}
          href="http://egytek-solutions.com/"
          target="_blank"
          rel="noreferrer"
        >
          Visit website
        </a>
      </footer>
    </>
  );
}
