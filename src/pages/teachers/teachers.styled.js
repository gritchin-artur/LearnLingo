import styled from "styled-components";

export const TeachersContainer = styled.div`
  background: #f8f8f8;

  justify-content: center;
  display: grid;

  .Form {
    @media only screen and (max-width: 1000px) {
      justify-content: center;
    }
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
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

  .TeachersList {
    gap: 32px;
    display: grid;
    margin-top: 30px;
  }

  .ButtonLoadMore {
    border-radius: 12px;
    width: 183px;
    height: 60px;
    background: #f4c550;
    border: none;
    margin-top: 60px;

    font-weight: 700;
    font-size: 18px;
    line-height: 156%;
    color: #121417;
  }

  .ButtonLoadMoreContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
