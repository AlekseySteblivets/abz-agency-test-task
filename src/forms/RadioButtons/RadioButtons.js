import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function RadioButton() {
  return (
    <FormControl>
      <legend>Select your position</legend>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="Frontend developer"
          control={
            <Radio
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
