import styled from "styled-components";
import DefaultImg from "../../img/image-min.jpg";
import blockImg from "../../img/block.png";

export const Body = styled.div`
  gap: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .StartContainer {
    @media only screen and (max-width: 768px) {
      padding: 45px 36px;
    }
    border-radius: 30px;
    max-width: 720px;
    background: #f8f8f8;
    padding: 90px 72px;
    box-sizing: border-box;

    &:hover .TitlePart {
      background: #fbe9ba;
    }
    &:hover .ButtonGetStart {
      background: #ffdc86;
    }
    &:hover .Title {
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
  }

  .Img {
    /* grid-area: i; */
    border-radius: 30px;
    width: 568px;
    height: 530px;
    background: #8a8a89;
    background-image: url(${DefaultImg});
    background-position: center;

    transition: background-image 500ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background-image: url(${blockImg});
    }
  }

  .Title {
    font-weight: 500;
    font-size: 48px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: #121417;
    margin: 0;

    transition: text-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .TitlePart {
    border-radius: 6px;
    background: #8a8a89;
    padding-left: 15px;
    padding-right: 15px;
    font-style: italic;
    font-weight: 400;

    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .Text {
    font-weight: 400;
    font-size: 16px;
    line-height: 137%;
    letter-spacing: -0.02em;
    color: #121417;
    max-width: 477px;
    margin-top: 20px;
  }

  .ButtonGetStart {
    border-radius: 12px;
    width: 267px;
    height: 60px;
    background: #8a8a89;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin-top: 60px;

    font-weight: 700;
    font-size: 18px;
    line-height: 156%;
    color: #121417;

    &:hover,
    &.active {
      background: #f4c550;
    }

    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .Statistics {
    /* grid-area: s; */
    border: 1.5px dashed #8a8a89;
    border-radius: 30px;
    /* height: 116px; */
    width: 100%;
    padding: 50px;

    justify-content: center;
    display: flex;

    transition: border-color 500ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      border-color: #f4c550;
    }
  }

  .StatisticsElement,
  .Statisticslist {
    display: flex;
  }

  .Statisticslist {
    padding: 0;
    gap: 102px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .StatisticsElement {
    gap: 20px;
    align-items: center;
  }

  .NumberElement {
    font-weight: 500;
    font-size: 28px;
    line-height: 114%;
    letter-spacing: -0.02em;
    color: #121417;
  }

  .TextElement {
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    color: rgba(18, 20, 23, 0.7);

    width: 74px;
  }
`;
