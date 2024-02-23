import styled from "styled-components";

export const TeacherCard = styled.li`
  @media only screen and (max-width: 1000px) {
    display: block;
  }
  position: relative;
  display: flex;
  gap: 48px;
  border-radius: 24px;
  padding: 24px;
  background: #fff;
  max-width: 1184px;

  box-sizing: border-box;

  .ContentContainer {
    display: ruby;
  }

  .AvatarContainer {
    position: relative;
    display: flex;
    border: 3px solid #fbe9ba;
    border-radius: 100px;
    width: 120px;
    height: 120px;
    padding: 20px;
    box-sizing: border-box;

    justify-content: center;
    display: flex;
    align-items: center;
  }

  .Avatar {
    border-radius: 50%;
    width: 96px;
    height: 96px;
  }

  .Group {
    position: absolute;
    right: 15px;
    top: 20px;
  }

  .HeaderCard {
    display: flex;
    align-items: center;
    gap: 40px;

    @media only screen and (max-width: 1000px) {
      display: block;
    }
  }

  .Heart {
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .TeacherQuatyContainer {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .TeacherQuaty {
    align-items: center;
    display: flex;
    gap: 8px;

    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
  }

  .Price {
    color: #38cd3e;
  }

  .TeacherQuatyContainer {
    flex-wrap: wrap;
  }

  .Languages {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #8a8a89;
  }

  .Border {
    color: #8a8a89;
  }

  .TeacherName {
    margin-top: 8px;
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    color: #121417;
  }

  .TeacherDescription {
    margin-top: 32px;
    gap: 8px;
    display: grid;
  }
  .Speaks {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #8a8a89;
  }

  .SpeaksText {
    margin-left: 4px;
    text-decoration: underline;
    color: #121417;
  }

  .LessonText {
    color: #121417;
  }

  .ButtonReadMore {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-decoration: underline;
    color: #121417;

    padding: 0;
    background: none;
    border: none;
    justify-content: flex-start;
    display: grid;
    margin-top: 8px;
    cursor: pointer;
  }

  .Level {
    border: 1px solid rgba(18, 20, 23, 0.2);
    border-radius: 35px;
    padding: 8px 12px;
    height: 32px;
    box-sizing: border-box;

    align-items: center;
    display: flex;
    justify-content: center;
  }

  .LevelList {
    gap: 8px;
    display: flex;
    padding: 0;
    margin-top: inherit;
    flex-wrap: wrap;
  }

  .YellowBackground {
    background: #f4c550;
  }

  .DefaultAvatar {
    border-radius: 50%;
  }

  .TeacherText {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
    margin-top: 8px;
  }

  .ReviewList {
    margin-top: 32px;
    display: grid;
    gap: 32px;
  }

  .ReviewContainer {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .ReviewName {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #8a8a89;
  }

  .ReviewRaring {
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    color: #121417;

    align-items: center;
    display: flex;
    gap: 8px;
  }

  .ReviewElement {
    display: grid;
    gap: 16px;
  }

  .ButtonBookLesson {
    margin-top: 32px;
    border-radius: 12px;
    width: 232px;
    height: 60px;
    background: #f4c550;
    border: none;

    font-weight: 700;
    font-size: 18px;
    line-height: 156%;
    color: #121417;
  }

  option:hover {
    background-color: #38cd3e;
  }

  option {
    padding: 50px;
  }
`;
