import imgSuccessfullyRegictered from "../../assets/img/success-image.png";

import styles from "./SuccessfullyRegistered.module.scss";

export default function SuccessfullyRegistered() {
  return (
    <div className={styles.successfullyRegistered}>
      <h2 className={styles.title}>User successfully registered</h2>
      <img alt="successfullyRegistered" src={imgSuccessfullyRegictered} />
    </div>
  );
}
