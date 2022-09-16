import { useDispatch, useSelector } from "react-redux";
import { ProfileForm } from "../components/profile-form/ProfieForm";
import { decrement, increment } from "../store/counter/counterSliceReducer";
import NewProfileForm from "../components/profile-form/NewProfileForm";
import { Button } from "@mui/material";
import { toggleVisibleProfile } from "../store/profile/profileSliceReducer";

export const ProfilePage = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const { firstName, lastName, email, password, isVisibleProfile } =
    useSelector((state) => state.profile);
  const profile = useSelector((state) => state.profile);

  return (
    <div>
      <div>
        <h1>Counter</h1>
        <h2>Counter: {count}</h2>

        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement(1));
          }}
        >
          decrement
        </button>
      </div>
      <hr />
      <div>
        <ProfileForm />
      </div>
      <hr />
      <div>
        <div>
          <h1>Formik Form</h1>
          <h3>Profile Info</h3>
          <p> First name: {firstName}</p>
          <p>Last name: {lastName}</p>
          <p>Email: {email}</p>
        </div>
        <hr />
        {isVisibleProfile && <NewProfileForm />}
        <Button
          variant={"contained"}
          onClick={() => {
            dispatch(toggleVisibleProfile());
          }}
        >
          Изменить данные
        </Button>
      </div>
    </div>
  );
};
