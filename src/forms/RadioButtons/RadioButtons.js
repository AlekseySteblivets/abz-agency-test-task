import React, { forwardRef } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { usePosition } from "../../api/queries/usePositions";

export default forwardRef(function RadioButton(
  { name, onChange, onBlur },
  ref
) {
  const { isLoading, error, data } = usePosition();

  return (
    <FormControl>
      <legend>Select your position</legend>
      <RadioGroup
        aria-labelledby="radio-position"
        defaultValue="female"
        name="position_id"
      >
        {data?.map(({ id, name: labelName }) => (
          <FormControlLabel
            key={id}
            value={id}
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
            label={labelName}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
});
