import Button from "../../lib/Button/Button";

import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.titleHero}>
        Test assignment for front-end developer
      </h1>
      <p className={styles.textHero}>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <Button className={styles.button}>Sing up</Button>
    </div>
  );
}
