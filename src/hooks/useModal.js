import { useSelector } from "react-redux";
import {
  selectBookTrialLesson,
  selectShowModalLogIn,
  selectShowModalRegister,
  selectShowModalTrialLesson,
} from "../redux/modals/modal-selectors";

export const useModal = () => {
  const isModalLogIn = useSelector(selectShowModalLogIn);
  const isModalRegister = useSelector(selectShowModalRegister);
  const isModalTrialLesson = useSelector(selectShowModalTrialLesson);
  const isModalTrialData = useSelector(selectBookTrialLesson);

  return {
    isModalLogIn,
    isModalRegister,
    isModalTrialLesson,
    isModalTrialData,
  };
};
