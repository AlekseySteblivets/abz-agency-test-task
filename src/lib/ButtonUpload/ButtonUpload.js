import styles from "./ButtonUpload.module.scss";

export default function ButtonUpload({ register }) {
  const registerInputProps = register("photo");
  const onChange = (e) => {
    console.log(e);
    registerInputProps.onChange(e);
    // console.log(e.target.files.name);
    // namePhoto = e.target.files.name;
  };

  console.log(register("photo"));
  return (
    <div className={styles.uploadBlock}>
      <input
        className={styles.inputUpload}
        {...registerInputProps}
        onChange={onChange}
        // {...register("photo")}
        id="uploadInput"
        type="file"
      />
      <label htmlFor="uploadInput" className={styles.buttonUpload}>
        Upload
      </label>
      <span className={styles.text}>
        {/* {fileName?? "Upload your photo"} */}
        {/* {fileName ? fileName  : "Upload your photo"} */}
      </span>
      {/* <button
        type="button"
        onClick={() => {
          triggerClick();
        }}
        className={styles.buttonUpload}
      >
        Upload
      </button>
      <span className={styles.text}>Upload your photo</span> */}
    </div>
  );
}
