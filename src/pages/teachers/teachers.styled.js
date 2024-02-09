import styled from "styled-components";

export const TeachersContainer = styled.div`
  background: #f8f8f8;

  justify-content: center;
  display: grid;

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

  .TeachersList {
    gap: 32px;
    display: grid;
    margin-top: 30px;
  }

  .TeacherCard {
    display: flex;
    gap: 48px;
    border-radius: 24px;
    padding: 24px;
    background: #fff;

    box-sizing: border-box;
  }

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
    margin-right: 64px;
  }

  .Languages {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #8a8a89;

    margin-right: 191px;
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
`;
