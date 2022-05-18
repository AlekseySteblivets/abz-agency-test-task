import React, { forwardRef, useState } from "react";

import styles from "./ButtonUpload.module.scss";

export default forwardRef(function ButtonUpload(
  { name, onChange, onBlur, error },
  ref
) {
  const [fileName, setFileName] = useState(null);

  const fileInputChange = (e) => {
    onChange(e);
    let nameImg = e.target.files[0].name;
    setFileName(nameImg);
  };

  console.log(error);
  return (
    <>
      <div className={styles.uploadBlock}>
        <input
          ref={ref}
          className={styles.inputUpload}
          name={name}
          onBlur={onBlur}
          onChange={fileInputChange}
          id="uploadInput"
          type="file"
        />
        <label htmlFor="uploadInput" className={styles.buttonUpload}>
          Upload
        </label>
        <span className={styles.text}>{fileName ?? "Upload your photo"}</span>
      </div>
      {error && <span className={styles.errorUploadInput}>{error}</span>}
    </>
  );
});
