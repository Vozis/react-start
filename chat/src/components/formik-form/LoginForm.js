import React, { useEffect } from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "./FormikControl";
import { Button } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../api/firebase";

function LoginForm(props) {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    console.log("Saved Data", JSON.parse(JSON.stringify(values)));
    // props.updateDate("");
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
    } catch (e) {
      // props.updateDate(e.message);
    }
  };

  // const navigate = useNavigate();

  /* useEffect(() => {
     if (user) {
       navigate("/auth", { replace: true });
     } else {
       // navigate("/");
     }
   }, [user]);*/

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
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control={"muiInput"}
              type="password"
              label="Password"
              name="password"
            />
            <Button
              variant="contained"
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
