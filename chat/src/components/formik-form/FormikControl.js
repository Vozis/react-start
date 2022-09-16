import React from "react";
import Input from "./Input";
import MuiInput from "./MuiInput";

function FormikControl({ control, ...props }) {
  switch (control) {
    case "input":
      return <Input {...props} />;
    /*case "textarea":
      return <Textarea {...props} />;
    case "select":
      return <Select {...props} />;
    case "radio":
      return <RadioButtons {...props} />;
    case "checkbox":
      return <Checkbox {...props} />;
    case "date":
      return <DatePicker {...props} />;*/
    case "muiInput":
      return <MuiInput {...props} />;
    default:
      return null;
  }
}

export default FormikControl;
