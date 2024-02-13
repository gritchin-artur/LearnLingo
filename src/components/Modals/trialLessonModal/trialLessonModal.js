import { TrialModalContainer } from "./trialLessonModal.styled";
import { ReactComponent as CloseModal } from "../../../img/x.svg";
import { useEffect } from "react";
import { useModal } from "hooks/useModal";

export function TrialModal({ handleClickClose }) {
  const { isModalTrialData } = useModal();
  const teacher = isModalTrialData[0];

  useEffect(() => {
    console.log(isModalTrialData);
  }, [isModalTrialData]);
  return (
    <TrialModalContainer>
      <CloseModal className="CloseButton" onClick={handleClickClose} />
      <h2>Book trial lesson</h2>
      <p>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>

      <div className="TeacherContainer">
        <img src={teacher.avatar_url} alt="avatar" className="Avatar" />
        <div>
          <p className="YourTeacher">Your teacher</p>
          <p className="TeacherName">
            {teacher.name} {teacher.surname}
          </p>
        </div>
      </div>
    </TrialModalContainer>
  );
}
