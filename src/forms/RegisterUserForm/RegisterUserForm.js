// import React, { Component } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";

import Button from "../../lib/Button/Button";
import RadioButtons from "../RadioButtons/RadioButtons";
import ButtonUpload from "../../lib/ButtonUpload";

import styles from "./RedisterUserForm.module.scss";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup
      .string()
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        "Invalid phone number"
      )
      .required(),
    position: yup.string().required(),
    // photo: yup.object().required(),
  })
  .required();

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <h2 className={styles.title}>Working with POST request</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formUserForm}>
        {/* <div></div> */}
        <TextField
          error={!!errors.name}
          inputProps={{ ...register("name") }}
          className={styles.inputForm}
          type="text"
          label="Your name"
          variant="outlined"
          helperText={errors.name?.message}
        />

        <TextField
          error={!!errors.email}
          inputProps={{ ...register("email") }}
          className={styles.inputForm}
          type="text"
          label="Email"
          variant="outlined"
          helperText={errors.email?.message}
        />

        <TextField
          error={!!errors.phone}
          inputProps={{ ...register("phone") }}
          className={styles.inputForm}
          type="text"
          label="phone"
          variant="outlined"
          helperText={errors.phone?.message ?? "+38 (XXX) XXX - XX - XX"}
        />

        <RadioButtons register={register} />
        <ButtonUpload register={register} />
        <Button
          type="submit"
          disabled={!isValid}
          className={styles.btnUserForm}
        >
          Sing up
        </Button>
      </form>
    </>
  );
}
