import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import { Button } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../api/firebase";

function RegistrationForm(props) {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("Required"),
  });

  const onSubmit = async (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    // props.updateDate("");

    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      // props.updateDate("");
    } catch (e) {
      // props.updateDate(e.message);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FormikControl
              control={"muiInput"}
              type={"name"}
              label={"Name"}
              name={"name"}
            />
            <FormikControl
              control={"muiInput"}
              type={"email"}
              label={"Email"}
              name={"email"}
            />
            <FormikControl
              control={"muiInput"}
              type={"password"}
              label={"Password"}
              name={"password"}
            />
            <FormikControl
              control={"muiInput"}
              type={"password"}
              label={"Confirm Password"}
              name={"confirmPassword"}
            />
            <Button
              variant={"contained"}
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegistrationForm;
