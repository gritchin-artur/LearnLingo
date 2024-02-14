import { ModalContainer } from "./registrationModal.styled";
import { ReactComponent as CloseModal } from "../../../img/x.svg";
import { useFormik } from "formik";
import { SigninSchema } from "utils/validationSchemas";
import { ShowRules } from "utils/showRules";
import { useDispatch } from "react-redux";
import { logUp } from "../../../redux/auth/auth-operation";

export function RegisterModal({ handleClickClose }) {
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
      name: "",
      email: "",
      password: "",
    },

    validationSchema: SigninSchema,

    onSubmit: (values) => {
      console.log(values);
      dispatch(logUp(values));
      handleClickClose();
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
        <h2 className="Title">Registration</h2>
        <p className="Text">
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
      </div>

      <form className="ModalForm" onSubmit={handleSubmit}>
        <div className="DivInput">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            className="ModalInput"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
          />
          {getInputAlert("name")}
        </div>

        <div className="DivInput">
          <input
            id="email"
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
            id="password"
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
          Sign Up
        </button>
      </form>
    </ModalContainer>
  );
}
