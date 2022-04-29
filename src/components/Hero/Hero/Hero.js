import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <>
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
      <button type="button" className={styles.button}>
        Sing up
      </button>
    </>
  );
}
