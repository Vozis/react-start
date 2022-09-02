import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile, updateProfileStudy } from "../../store/profile";

export const ProfileForm = () => {
  const { firstName, lastName, phone } = useSelector(
    (state) => state.profileStudy
  );
  const [form, setForm] = useState({
    firstName,
    lastName,
    phone,
  });

  const dispatch = useDispatch();

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Usual Form</h1>
      <>
        <input
          type="text"
          placeholder="firstName"
          value={form.firstName}
          data-name={"firstName"}
          onChange={handleChangeForm}
        />
        <input
          type="text"
          placeholder="lastName"
          value={form.lastName}
          data-name={"lastName"}
          onChange={handleChangeForm}
        />
        <input
          type="text"
          placeholder="phone"
          value={form.phone}
          data-name={"phone"}
          onChange={handleChangeForm}
        />
        <button onClick={() => dispatch(updateProfileStudy(form))}>
          Отправить
        </button>
      </>
    </div>
  );
};
