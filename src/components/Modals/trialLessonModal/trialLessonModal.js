import { TrialModalContainer } from "./trialLessonModal.styled";
import { ReactComponent as CloseModal } from "../../../img/x.svg";
import { useEffect } from "react";
import { useModal } from "hooks/useModal";
import { useFormik } from "formik";

export function TrialModal({ handleClickClose }) {
  const { isModalTrialData } = useModal();
  const teacher = isModalTrialData[0];

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      activity: "",
      fullName: "",
      email: "",
      number: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    console.log(isModalTrialData);
  }, [isModalTrialData]);
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
                name="activity"
                type="radio"
                onChange={handleChange}
                value="Career and business"
                onBlur={handleBlur}
                checked={values.activity === "Career and business"}
              />
              Career and business
            </label>

            <label className="LabelInput">
              <input
                className="Input"
                id="Lesson for kids"
                name="activity"
                type="radio"
                onChange={handleChange}
                value="Lesson for kids"
                onBlur={handleBlur}
                checked={values.activity === "Lesson for kids"}
              />
              Lesson for kids
            </label>

            <label className="LabelInput">
              <input
                className="Input"
                id="Living abroad"
                name="activity"
                type="radio"
                onChange={handleChange}
                value="Living abroad"
                onBlur={handleBlur}
                checked={values.activity === "Living abroad"}
              />
              Living abroad
            </label>

            <label className="LabelInput">
              <input
                className="Input"
                id="Exams and coursework"
                name="activity"
                type="radio"
                onChange={handleChange}
                value="Exams and coursework"
                onBlur={handleBlur}
                checked={values.activity === "Exams and coursework"}
              />
              Exams and coursework
            </label>

            <label className="LabelInput">
              <input
                className="Input"
                id="Culture, travel or hobby"
                name="activity"
                type="radio"
                onChange={handleChange}
                value="Culture, travel or hobby"
                onBlur={handleBlur}
                checked={values.activity === "Culture, travel or hobby"}
              />
              Culture, travel or hobby
            </label>
          </div>
          <div className="InputContainer">
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
          </div>

          <button type="submit" className="ModalButton" onClick={handleSubmit}>
            Book
          </button>
        </form>
      </div>
    </TrialModalContainer>
  );
}
