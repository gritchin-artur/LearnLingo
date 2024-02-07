import styled from "styled-components";

export const TeachersContainer = styled.div`
  background: #f8f8f8;

  .Form {
    display: flex;
    gap: 20px;
  }

  .FormElement {
    display: grid;
    gap: 8px;
  }

  .Label {
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    color: #8a8a89;
  }

  .Select {
    font-weight: 500;
    font-size: 18px;
    line-height: 111%;
    color: #121417;

    border-radius: 14px;
    padding: 14px 18px;
    background: #fff;
    border: none;
  }

  .TeacherCard {
    border-radius: 24px;
    padding: 24px;
    width: 1184px;
    height: 328px;
    background: #fff;
  }
`;
