import styles from './Projects.module.css'
import Card from "../Card/Card";
import wanderImg from "../../public/wander.png";
import asicImg from "../../public/asic.png";
import clemsImg from "../../public/clems.png";
import djcsImg from "../../public/djcs.png";
import egytekImg from "../../public/egytek.png";

export default function Projects() {
  return (
    <ul className="block md:flex flex-wrap content-start">
      <Card imageSrc={wanderImg} alt="Wander app preview">
        <h3 className={styles.heading}>Wander App</h3>
        <p>Wander is a side project and it is a trip planner</p>
      </Card>
      <Card imageSrc={asicImg} alt="ASIC Careers preview">
        <h3 className={styles.heading}>ASIC Careers</h3>
        <p>
          🚨 Disclaimer: I was assigned this project during my employment at
          Springboard as Frontend web developer in the Implementions team.
        </p>
      </Card>
      <Card
        imageSrc={djcsImg}
        alt="VIC Gov Department of justic and community safety Careers preview"
      >
        <h3 className={styles.heading}>
          VIC GOV Department of Justice and Community Safety Careers
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          euismod erat dolor. Aliquam sagittis mattis facilisis. Etiam vel massa
          bibendum, molestie ligula id, pulvinar ligula. Sed mollis dolor at
          arcu laoreet, in pellentesque justo tincidunt. Donec cursus et arcu
          sed eleifend. Maecenas ac blandit ante. Maecenas vitae nunc quis
          sapien feugiat feugiat ut eu tellus. Donec elementum nisi dictum justo
          finibus euismod. Aliquam sem urna, commodo ut nisl eget, vehicula
          euismod nisl. Curabitur tincidunt massa ligula, non feugiat metus
          fermentum ac. Nulla orci dolor, fringilla a tempus in, lobortis vel
          felis. Vestibulum in purus viverra, vehicula est ut, vestibulum
          tellus. Maecenas rhoncus, metus ut pellentesque ultricies, augue nisi
          facilisis eros, sit amet dignissim libero dui vel risus. Praesent
          congue quam sed dui varius laoreet. Ut sit amet commodo mauris,
          volutpat imperdiet nisl. Curabitur at porta nibh, sed fringilla nibh.
          Duis quis sem non nibh venenatis cursus. Sed consectetur fermentum
          nulla, mollis euismod tellus semper at. Proin justo eros, feugiat id
          pellentesque at, malesuada ac eros. Integer risus sapien, accumsan
          gravida erat vel, volutpat bibendum libero. Etiam tristique faucibus
          sem et auctor. Vivamus convallis leo eu tellus auctor, vitae
          vestibulum dolor tincidunt. Integer at metus vel risus tristique
          facilisis nec id risus. Cras elementum vehicula augue, ac dignissim
          nisi volutpat vel. Etiam nec ex eu diam ornare sagittis. Morbi cursus
          vestibulum risus, quis semper odio consequat tempor. Nulla vitae nibh
          porta, sollicitudin tellus et, faucibus leo. Aliquam vehicula in nisl
          nec maximus. Morbi in quam id urna luctus lobortis at vel urna.
          Pellentesque et imperdiet leo. Aliquam accumsan non lacus eget
          gravida. Duis commodo lorem nec vehicula accumsan. Vestibulum nisi
          neque, lacinia ut orci varius, sollicitudin eleifend ipsum. Vivamus
          rhoncus quis velit ac mattis. Sed auctor euismod metus, nec placerat
          neque eleifend sit amet. Ut rhoncus vehicula nulla, in tempus elit
          aliquam tempus. Nulla pretium quis lacus quis eleifend. Curabitur
          euismod augue quis enim laoreet, vel aliquam orci aliquam. Sed tempus
          condimentum ullamcorper. Sed ut faucibus erat. Duis a feugiat est, et
          volutpat massa. Duis lacus massa, vulputate vitae vestibulum eget,
          varius sed erat. Quisque sit amet rhoncus dolor, vel ultricies dolor.
          In id nisl urna. Fusce nec dui mauris. Nunc nec rutrum nunc, ut
          lobortis felis. Vivamus luctus magna a odio facilisis consectetur.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Maecenas vitae molestie risus. Sed a rutrum
          arcu. Nullam vitae sollicitudin mauris. Fusce est ligula, consequat id
          pretium at, varius suscipit ipsum. Nulla facilisi. In id dignissim
          lorem. Suspendisse potenti. Fusce tincidunt tempus tristique. Integer
          non lectus feugiat, accumsan ligula vel, rhoncus nunc. Pellentesque eu
          ligula in nisi congue hendrerit in eget nunc. Maecenas iaculis
          dignissim accumsan. Pellentesque a diam accumsan, sagittis leo eu,
          elementum lorem. In nunc est, efficitur pulvinar eros at, condimentum
          luctus nisi. Ut fringilla mi neque, id porta ipsum finibus eget. Cras
          pulvinar ex a urna tempus porta. Maecenas nec lectus id nibh tincidunt
          elementum. Aliquam in orci ipsum. Phasellus non tincidunt purus.
          Nullam a mattis libero. Donec in fermentum erat. Duis ullamcorper
          dictum augue vitae vestibulum. Aenean ac mauris tempor, porta purus
          sit amet, lobortis erat. Donec a lorem at erat ultrices auctor. Nam ut
          erat quis sapien iaculis bibendum. Sed et dapibus lacus. Integer
          mattis lorem in turpis dignissim, semper scelerisque metus luctus.
          Proin molestie nunc non suscipit ornare. Nam eu ante elementum,
          eleifend orci ac, facilisis ipsum. Ut ullamcorper tortor in odio
          tristique, sit amet interdum urna feugiat. Curabitur ac ante dui.
        </p>
        <p>
          🚨 Disclaimer: I was assigned this project during my employment at
          Springboard as Frontend web developer in the Implementions team.
        </p>
        <a
          href="https://jobs.careers.vic.gov.au/jobtools/JnCustomLogin.Login?in_organid=14188"
          target="_blank"
          rel="noreferrer"
        >
          Visit website
        </a>
      </Card>
      <Card imageSrc={clemsImg} alt="Clemenger Careers preview">
        <h3 className={styles.heading}>Clemenger Careers</h3>
        <p>
          🚨 Disclaimer: I was assigned this project during my employment at
          Springboard as Frontend web developer in the Implementions team.
        </p>
      </Card>
      <Card imageSrc={egytekImg} alt="Egytek Solutions preview">
        <h3 className={styles.heading}>Egytek Solutions</h3>
        <p>
          This one is from way back, but it is dear to me, as it this is my
          first real client website I ever built
        </p>
      </Card>
    </ul>
  );
}
