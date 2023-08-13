import Hr from "../Hr";
import styles from "./Projects.module.css";

export default function Asic() {
  return (
    <>
      <div className={styles.projectBody}>
        <p>
          <strong>Stack: </strong>HTML, CSS, jQuery, Bootstrap.
        </p>
        <Hr className="my-4" />
        <p>
          This is one of my favourite projects. I worked closely with the client throughout the design and development phases of this project.
          Glad to say that the client was very pleased with the outcome. It was a great pleasure and exprience.
        </p>
        <p>
          This work was done during my employment at{" "}
          <a
            className={styles.inlineLink}
            href="https://www.linkedin.com/company/springboardrecruitmentplatform/"
            target="_blank"
            rel="noreferrer"
          >
            Springboard
          </a>{" "}
          as Frontend web developer in the Implementations team.
        </p>
        <a
          className={styles.visitLink}
          href="https://careers.asic.gov.au/"
          target="_blank"
          rel="noreferrer"
        >
          Visit website
        </a>
      </div>
      <Hr />
      <footer className={styles.footer}>
        <p>
          Note: Changes to the website my have occured since the end of my
          employment at Springboard.
        </p>
      </footer>
    </>
  );
}
