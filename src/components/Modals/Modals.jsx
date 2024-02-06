import { createPortal } from "react-dom";
import { BackdropModalStyle } from "./Modals.styled";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  closeModalRegister,
  closeModalLogIn,
} from "../../redux/modals/modal-slice";
import { useModal } from "hooks/useModal";
import { LogInModal } from "./logInModal/logInModal";
import { RegisterModal } from "./registrationModal/registrationModal";

const modalRoot = document.querySelector("#modal-root");

export const Modal = () => {
  const dispatch = useDispatch();
  const { isModalLogIn, isModalRegister } = useModal();

  const handleClickClose = useCallback(() => {
    dispatch(closeModalRegister());
    dispatch(closeModalLogIn());
  }, [dispatch]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClickClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        handleClickClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.cssText = `overflow: hidden; `;

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.cssText = `overflow: auto; `;
    };
  }, [isModalLogIn, isModalRegister, handleClickClose, dispatch]);

  return createPortal(
    (isModalLogIn || isModalRegister) && (
      <BackdropModalStyle onClick={handleBackdropClick}>
        <div>
          {isModalLogIn && <LogInModal handleClickClose={handleClickClose} />}
          {isModalRegister && (
            <RegisterModal handleClickClose={handleClickClose} />
          )}
        </div>
      </BackdropModalStyle>
    ),
    modalRoot
  );
};
