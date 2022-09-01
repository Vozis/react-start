import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import FormikControl from "./formik-form/FormikControl";
import { useDispatch, useSelector } from "react-redux";
import { updateVal } from "../../store/profile/profileSliceReducer";

function NewProfileForm(props) {
  const data = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const updateFirstName = (value) => {
    dispatch(updateVal(value));
  };

  console.log("data", data);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("Required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("Form data", values);

    updateFirstName(values);
    //onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control={"muiInput"}
              type={"text"}
              label={"First Name"}
              name={"firstName"}
            />
            <FormikControl
              control={"muiInput"}
              type={"text"}
              label={"Last Name"}
              name={"lastName"}
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
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default NewProfileForm;
