import styled from "styled-components";

export const MobileMenuContainer = styled.div`
  right: 0;
  position: fixed;
  top: 0;
  width: 50%;
  height: 100%;
  background: #fbe9ba;

  justify-content: center;
  display: grid;
  align-items: center;

  .ButtonClose {
    cursor: pointer;
    position: absolute;
    top: 30px;
    right: 30px;
  }

  .Navlink {
    cursor: pointer;
    text-decoration: none;
    font-weight: 400;
    font-size: 40px;
    line-height: 1.25;
    color: #8a8a89;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &.active {
      color: #121417;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .LogInContainer {
    display: grid;
  }

  .LogInButton {
    background: none;
    border: none;
    text-decoration: none;
    align-items: center;
    display: flex;
    font-weight: 700;
    font-size: 30px;
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
