import { TrialModalContainer } from "./trialLessonModal.styled";
import { ReactComponent as CloseModal } from "../../../img/x.svg";
import { useModal } from "hooks/useModal";
import { useFormik } from "formik";
import { LessonSchema } from "utils/validationSchemas";
import toast from "react-hot-toast";
import { ShowRules } from "utils/showRules";

export function TrialModal({ handleClickClose }) {
  const { isModalTrialData } = useModal();
  const teacher = isModalTrialData[0];

  const {
    values,
    isValid,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      reason: "",
      fullName: "",
      email: "",
      number: "",
    },

    validationSchema: LessonSchema,

    onSubmit: (values) => {
      toast.success(`${values.fullName} 
your reservation has been sent to the teacher!`);
      handleClickClose();
    },
  });

  const { getInputAlert } = ShowRules(values, touched, errors);

  return (
    <TrialModalContainer>
      <CloseModal className="CloseButton" onClick={handleClickClose} />
      <h3 className="TitleModal">Book trial lesson</h3>
      <p className="TextModal">
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>

      <div className="TeacherContainer">
        <div className="TeacherCardContainer">
          <img src={teacher.avatar_url} alt="avatar" className="Avatar" />
          <div>
            <p className="YourTeacher">Your teacher</p>
            <p className="FullName">
              {teacher.name} {teacher.surname}
            </p>
          </div>
        </div>
        <h2 className="TitleForm">
          What is your main reason for learning English?
        </h2>
        <form onSubmit={handleSubmit} className="Form">
          <div className="RadioButtonContainer">
            <label className="LabelInput">
              <input
                className="Input"
                id="Career and business"
                name="reason"
                type="radio"
                onChange={handleChange}
                value="Career and business"
                onBlur={handleBlur}
                checked={values.reason === "Career and business"}
              />
              Career and business
            </label>

            <label className="LabelInput">
              <input
                className="Input"
                id="Lesson for kids"
                name="reason"
                type="radio"
                onChange={handleChange}
                value="Lesson for kids"
                onBlur={handleBlur}
                checked={values.reason === "Lesson for kids"}
              />
              Lesson for kids
            </label>

            <label className="LabelInput">
              <input
                className="Input"
                id="Living abroad"
                name="reason"
                type="radio"
                onChange={handleChange}
                value="Living abroad"
                onBlur={handleBlur}
                checked={values.reason === "Living abroad"}
              />
              Living abroad
            </label>

            <label className="LabelInput">
              <input
                className="Input"
                id="Exams and coursework"
                name="reason"
                type="radio"
                onChange={handleChange}
                value="Exams and coursework"
                onBlur={handleBlur}
                checked={values.reason === "Exams and coursework"}
              />
              Exams and coursework
            </label>

            <label className="LabelInput">
              <input
                className="Input"
                id="Culture, travel or hobby"
                name="reason"
                type="radio"
                onChange={handleChange}
                value="Culture, travel or hobby"
                onBlur={handleBlur}
                checked={values.reason === "Culture, travel or hobby"}
              />
              Culture, travel or hobby
            </label>
          </div>
          <div className="InputContainer">
            <div className="DivInput">
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Full Name"
                className="ModalInput"
                onChange={handleChange}
                value={values.fullName}
                onBlur={handleBlur}
              />
              {getInputAlert("fullName")}
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

            <div className="DivInput">
              <input
                id="number"
                name="number"
                type="number"
                placeholder="Phone Number"
                className="ModalInput"
                onChange={handleChange}
                value={values.number}
                onBlur={handleBlur}
              />
              {getInputAlert("number")}
            </div>
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className="ModalButton"
            onClick={handleSubmit}
          >
            Book
          </button>
        </form>
      </div>
    </TrialModalContainer>
  );
}
