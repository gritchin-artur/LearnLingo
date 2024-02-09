import { NavLink } from "react-router-dom";
import { Body } from "./homePage.styled";

export function HomePage() {
  return (
    <Body>
      <div className="StartContainer">
        <h2 className="Title">
          Unlock your potential with the best{" "}
          <span className="TitlePart">language</span> tutors
        </h2>
        <p className="Text">
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <NavLink to="/teachers" className="ButtonGetStart">
          Get started
        </NavLink>
      </div>

      <div className="Img" />

      <div className="Statistics">
        <ul className="Statisticslist">
          <li className="StatisticsElement">
            <h3 className="NumberElement">32,000 +</h3>
            <p className="TextElement">Experienced tutors</p>
          </li>
          <li className="StatisticsElement">
            <h3 className="NumberElement">300,000 +</h3>
            <p className="TextElement">5-star tutor reviews</p>
          </li>
          <li className="StatisticsElement">
            <h3 className="NumberElement">120 +</h3>
            <p className="TextElement">Subjects taught</p>
          </li>
          <li className="StatisticsElement">
            <h3 className="NumberElement">200 +</h3>
            <p className="TextElement">Tutor nationalities</p>
          </li>
        </ul>
      </div>
    </Body>
  );
}
