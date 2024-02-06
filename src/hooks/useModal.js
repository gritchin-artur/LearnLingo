import { useSelector } from "react-redux";
import {
  selectShowModalLogIn,
  selectShowModalRegister,
  // selectShowMealType,
  // getStatusModalUserMenu,
  // getStatusModalGoal,
  // getStatusModalWeight,
  // getShowModalUpdateRecord,
} from "../redux/modals/modal-selectors";

export const useModal = () => {
  const isModalLogIn = useSelector(selectShowModalLogIn);
  const isModalRegister = useSelector(selectShowModalRegister);
  // const mealType = useSelector(selectShowMealType);
  // const isModalCloseUserMenu = useSelector(getStatusModalUserMenu);
  // const isModalShowGoal = useSelector(getStatusModalGoal);
  // const isModalShowWeight = useSelector(getStatusModalWeight);
  // const isModalOpenUpdateRecord = useSelector(getShowModalUpdateRecord);

  return {
    isModalLogIn,
    isModalRegister,
    // mealType,
    // isModalCloseUserMenu,
    // isModalShowGoal,
    // isModalShowWeight,
    // isModalOpenUpdateRecord,
  };
};
