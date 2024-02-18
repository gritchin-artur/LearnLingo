import styled from "styled-components";

export const TrialModalContainer = styled.div`
  border-radius: 30px;
  width: 599px;
  height: 971px;
  padding: 64px;
  box-sizing: border-box;

  background: #fff;
  position: relative;

  .CloseButton {
    position: absolute;
    top: 20px;
    right: 20px;

    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:active {
      path {
        stroke: #f4c550;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
    }
  }

  .TitleModal {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #121417;
  }

  .TextModal {
    margin-top: 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 137%;
    color: rgba(18, 20, 23, 0.8);
  }

  .TeacherContainer {
    margin-top: 20px;
  }

  .TeacherCardContainer {
    display: flex;
    gap: 14px;
  }

  .YourTeacher {
    font-weight: 500;
    font-size: 12px;
    line-height: 133%;
    color: #8a8a89;
  }

  .FullName {
    margin-top: 4px;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
  }

  .TitleForm {
    margin-top: 40px;
    font-weight: 500;
    font-size: 24px;
    line-height: 133%;
    color: #121417;
  }

  .Avatar {
    border-radius: 100px;
    width: 44px;
    height: 44px;
  }

  .Form {
    margin-top: 20px;
    display: grid;
    gap: 40px;
  }

  /* .RadioButtonContainer {
    display: grid;
    gap: 16px;
  } */

  .InputContainer {
    display: grid;
    gap: 18px;
  }

  .LabelInput {
    position: relative;
    align-items: center;
    display: flex;
    margin-bottom: 16px;
    padding-left: 8px;

    font-weight: 400;
    font-size: 16px;
    line-height: 137%;
    text-align: center;
    color: #121417;
  }

  .Input {
    height: 12px;
    width: 12px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    cursor: pointer;
    margin-right: 8px;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      border: 3px solid #8a8a89;
    }

    &:checked:before {
      border-color: #f4c550;
    }

    &:checked::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #f4c550;
      transform: translate(-50%, -50%);
      visibility: visible;
    }
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
    width: 100%;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.55556;
    color: #121417;
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
