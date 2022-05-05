import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function RadioButton({ register }) {
  return (
    <FormControl>
      <legend>Select your position</legend>
      <RadioGroup
        aria-labelledby="radio-position"
        defaultValue="female"
        name="position"
      >
        <FormControlLabel
          value="Frontend developer"
          control={
            <Radio
              {...register("position")}
              color={"secondary"}
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 20,
                },
              }}
            />
          }
          label="Frontend developer"
        />

        <FormControlLabel
          value="Backend developer"
          control={
            <Radio
              {...register("position")}
              color={"secondary"}
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 20,
                },
              }}
            />
          }
          label="Backend developer"
        />
        <FormControlLabel
          value="Designer"
          control={
            <Radio
              {...register("position")}
              color={"secondary"}
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 20,
                },
              }}
            />
          }
          label="Designer"
        />
        <FormControlLabel
          value="QA"
          control={
            <Radio
              {...register("position")}
              color={"secondary"}
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 20,
                },
              }}
            />
          }
          label="QA"
        />
      </RadioGroup>
    </FormControl>
  );
}
