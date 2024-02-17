import styled from "styled-components";
import ukraineImg from "../../img/ukraine.svg";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 64px;
  padding-right: 64px;
  margin-top: 24px;
  margin-bottom: 24px;

  .UserDiv {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: #121417;

    text-decoration: none;
    color: inherit;

    &:hover .UserIcon {
      background-image: url(${ukraineImg});
    }
  }

  .UserIcon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #8a8a89;
    margin-right: 8px;

    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1),
      background-image 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .Ul {
    list-style: none;
    display: flex;
    margin-left: auto;
    gap: 28px;
  }

  .Navlink {
    cursor: pointer;
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: #8a8a89;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &.active {
      color: #121417;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .NavlinkButton {
    text-decoration: none;
    color: inherit;
  }

  .LogInContainer {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .RegisterButton {
    border: none;
    text-decoration: none;
    border-radius: 12px;
    padding: 14px 39px;
    font-weight: 700;
    font-size: 16px;
    background: #8a8a89;
    color: #fff;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:active {
      background: #121417;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .LogInButton {
    background: none;
    border: none;
    text-decoration: none;
    align-items: center;
    display: flex;
    font-weight: 700;
    font-size: 16px;
    color: #8a8a89;
    gap: 8px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:active {
      color: #121417;
      path {
        stroke: #f4c550;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;
