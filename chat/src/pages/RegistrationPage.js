import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";
import RegistrationForm from "../components/formik-form/RegistrationForm";

const onSubmit = (form) => {
  return createUserWithEmailAndPassword(auth, form.email, form.password);
};

export const RegistrationPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };
  return (
    <div>
      <h1>Registration Page</h1>
      <div>
        <input
          placeholder={"email"}
          value={form.email}
          data-name={"email"}
          onChange={handleChangeForm}
        />{" "}
        <input
          placeholder={"password"}
          value={form.password}
          data-name={"password"}
          onChange={handleChangeForm}
        />
        <button
          onClick={() => {
            onSubmit(form);
          }}
        >
          Sign up
        </button>
      </div>
      <hr />
      <div>
        <RegistrationForm />
      </div>
    </div>
  );
};
