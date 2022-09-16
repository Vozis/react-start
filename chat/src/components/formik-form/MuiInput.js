import React from "react";
import { Field } from "formik";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  TextField,
  OutlinedInput,
} from "@mui/material";

function MuiInput({ label, name, ...props }) {
  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <div>
            <FormControl error={form.errors[name] && form.touched[name]}>
              <FormLabel html={name}>{label}</FormLabel>
              <OutlinedInput id={name} {...props} {...field} />
              <FormHelperText
                style={{
                  color: "red",
                }}
              >
                {form.errors[name]}
              </FormHelperText>
            </FormControl>
          </div>
        );
      }}
    </Field>
  );
}

export default MuiInput;
