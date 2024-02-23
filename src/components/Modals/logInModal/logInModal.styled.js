import styled from "styled-components";
import eye from "../../../img/eye.svg";
import eye_off from "../../../img/eye-off.svg";

export const ModalContainer = styled.div`
  position: relative;
  border-radius: 30px;
  max-width: 565px;
  padding: 64px;
  box-sizing: border-box;

  background: #fff;
  transform: rotate(-0deg);

  .CloseButton {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;

    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:active {
      path {
        stroke: #f4c550;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
    }
  }

  .Title {
    font-weight: 500;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: #121417;
    margin-top: 0px;
    margin-bottom: 20px;
  }

  .Text {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.375;
    letter-spacing: -0.02em;
    color: rgba(18, 20, 23, 0.8);
  }

  .ModalForm {
    margin-top: 40px;
    display: grid;
    gap: 18px;
  }

  .ModalInput {
    width: 91%;
    position: relative;
    font-weight: 400;
    font-size: 16px;
    line-height: 137%;
    color: #121417;
    height: 54px;
    border-radius: 12px;
    padding-left: 18px;
    padding-right: 18px;
    border: 1px solid rgba(18, 20, 23, 0.1);

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  .ModalButton {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.55556;
    color: #121417;
    margin-top: 22px;
    border: none;
    height: 60px;
    border-radius: 12px;
    background: #8a8a89;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:active {
      background: #f4c550;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .DivInput {
    position: relative;
  }

  .DivInput:hover .ShowPassword,
  .DivInput:hover .HidePassword {
    display: block;
  }

  .ShowPassword {
    display: none;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url(${eye_off});
  }

  .HidePassword {
    display: none;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url(${eye});
  }

  input::placeholder {
    color: #121417;
  }

  .ErrorText {
    position: absolute;
    color: red;
    top: 60px;
    left: 20px;
    font-size: 12px;
  }

  .SuccessText {
    position: absolute;
    color: green;
    top: 60px;
    left: 20px;
    font-size: 12px;
  }
`;
