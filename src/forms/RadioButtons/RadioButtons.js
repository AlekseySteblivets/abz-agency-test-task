import React, { forwardRef } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const radioButtons = [
  "Frontend developer",
  "Backend developer",
  "Designer",
  "QA",
];

export default forwardRef(function RadioButton(
  { name, onChange, onBlur },
  ref
) {
  // console.log(ref);
  return (
    <FormControl>
      <legend>Select your position</legend>
      <RadioGroup
        aria-labelledby="radio-position"
        defaultValue="female"
        name="position_id"
      >
        {radioButtons.map((button) => (
          <FormControlLabel
            key={button}
            value={button}
            control={
              <Radio
                ref={ref}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                color={"secondary"}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 20,
                  },
                }}
              />
            }
            label={button}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
});
