import * as yup from "yup";

const supportedFormats = ["image/jpg", "image/jpeg"];

export const schema = yup
  .object()
  .shape({
    name: yup.string().min(2).max(60).required(),
    email: yup.string().email().required(),
    phone: yup
      .string()
      .matches(
        // /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        // ^[\+]{0,1}380([0-9]{9})$),
        /^[\+]{0,1}380([0-9]{9})$/,
        // ((\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4})),
        "Invalid phone number"
      )
      .required(),
    position_id: yup.number().required(),
    // photo: yup.string().required(),
    photo: yup
      .mixed()
      .test("fileSize", "The file is too large", (value) => {
        if (!value.length) return false;
        return value[0].size <= 5242880; // 5Mb
      })
      .test("format", "Format is not image/jpg or image/jpeg ", (value) => {
        if (!value.length) return false;
        return supportedFormats.includes(value[0].type);
      }),
  })
  .required();
