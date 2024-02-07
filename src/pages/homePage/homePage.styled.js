import styled from "styled-components";
import DefaultImg from "../../img/image-min.jpg";

export const Body = styled.div`
  display: grid;
  grid-template-areas:
    "c i"
    "s s";
  gap: 24px;

  .StartContainer {
    grid-area: c;
    border-radius: 30px;
    width: 720px;
    height: 530px;
    background: #f8f8f8;
    padding: 90px 72px;
    box-sizing: border-box;
  }

  .Img {
    grid-area: i;
    border-radius: 30px;
    width: 568px;
    height: 530px;
    background: #8a8a89;
    background-image: url(${DefaultImg});
  }

  .Statistics {
    grid-area: s;
    border: 3px dashed #8a8a89;
    border-radius: 30px;
    width: 1312px;
    height: 116px;
  }

  .Title {
    font-weight: 500;
    font-size: 48px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: #121417;
    margin: 0;
  }

  .TitlePart {
    border-radius: 6px;
    background: #8a8a89;
    padding-left: 15px;
    padding-right: 15px;
    font-style: italic;
    font-weight: 400;
  }

  .Text {
    font-weight: 400;
    font-size: 16px;
    line-height: 137%;
    letter-spacing: -0.02em;
    color: #121417;
    width: 477px;
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
  }

  .Statistics {
    padding: 0 132px;
    box-sizing: border-box;
    justify-content: center;
    display: flex;
  }

  .StatisticsElement,
  .Statisticslist {
    display: flex;
  }

  .Statisticslist {
    padding: 0;
    gap: 102px;
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
