import Hr from "../Hr";
import styles from "./Projects.module.css";

export default function Djcs() {
  return (
    <>
      <div className={styles.projectBody}>
        <p>
          <strong>Stack: </strong>HTML, CSS, jQuery, Bootstrap.
        </p>
        <Hr className="my-4" />
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
        <p>
          The requirement was to update the look of the existing website and make it WCAG
          compliant.
        </p>
        <a
          className={styles.visitLink}
          href="https://jobs.careers.vic.gov.au/jobtools/JnCustomLogin.Login?in_organid=14188"
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
