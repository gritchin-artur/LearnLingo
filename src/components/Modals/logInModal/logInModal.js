import { ModalContainer } from "./logInModal.styled";
import { ReactComponent as CloseModal } from "../../../img/x.svg";
import { useFormik } from "formik";
import { SigninSchema } from "utils/validationSchemas";
import { ShowRules } from "utils/showRules";
import { logIn } from "../../../redux/auth/auth-operation";
import { useDispatch } from "react-redux";

export function LogInModal({ handleClickClose }) {
  const dispatch = useDispatch();
  const {
    values,
    errors,
    touched,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      // name: userName || "",
      // email: userEmail || "",
      // password: userPassword || "",
      email: "",
      password: "",
    },

    validationSchema: SigninSchema,

    onSubmit: (values) => {
      console.log(!isValid);
      handleClickClose();
      dispatch(logIn(values));
    },
  });

  const {
    showPassword,
    // getInputClass,
    getInputAlert,
    getHidePassword,
  } = ShowRules(values, touched, errors);

  return (
    <ModalContainer>
      <CloseModal className="CloseButton" onClick={handleClickClose} />
      <div>
        <h2 className="Title">Log In</h2>
        <p className="Text">
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
      </div>

      <form className="ModalForm" onSubmit={handleSubmit}>
        <div className="DivInput">
          <input
            id="logInEmail"
            name="email"
            type="email"
            placeholder="Email"
            className="ModalInput"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
          {getInputAlert("email")}
        </div>

        <div className="DivInput" id="password">
          <input
            id="logInPassword"
            name="password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            className="ModalInput"
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
          />
          {getInputAlert("password")}
          {values.password && getHidePassword()}
        </div>
        <button
          type="submit"
          disabled={!isValid}
          className="ModalButton"
          onClick={handleSubmit}
        >
          Log In
        </button>
      </form>
    </ModalContainer>
  );
}
