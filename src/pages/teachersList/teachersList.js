import { ReactComponent as OpenBook } from "../../img/book-open.svg";
import { ReactComponent as Star } from "../../img/star.svg";
import { ReactComponent as Heart } from "../../img/heartsvg.svg";
import { ReactComponent as Group } from "../../img/Group.svg";
import { ReactComponent as UkraineImg } from "../../img/ukraine.svg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { TeacherCard } from "./teachersList.styled";

export default function TeachersList({ index, teacher }) {
  const teachers = useSelector((state) => state.teachers.teachers);

  const [showTextWindow, setShowTextWindow] = useState(
    Array(teachers.length).fill(false)
  );

  const handleReadMore = (index) => {
    const newShowTextWindow = [...showTextWindow];
    newShowTextWindow[index] = true;
    setShowTextWindow(newShowTextWindow);
    console.log(teachers);
  };

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("teachers")) ?? []
  );
  const [buttonColors, setButtonColors] = useState(
    JSON.parse(localStorage.getItem("color")) ?? Array(teachers.length)
  );

  useEffect(() => {
    localStorage.setItem("teachers", JSON.stringify(favorites));
    localStorage.setItem("color", JSON.stringify(buttonColors));
  }, [favorites, buttonColors]);

  const handleIconClick = (teacher, index) => {
    setButtonColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = newColors[index] === "#f4c550" ? "" : "#f4c550";

      setFavorites((prevFavorites) => {
        if (newColors[index] === "#f4c550") {
          return [...prevFavorites, teacher];
        } else {
          return prevFavorites.filter(
            (item) => item.iavatar_url !== teacher.avatar_url
          );
        }
      });

      return newColors;
    });
  };

  return (
    <TeacherCard>
      <div className="AvatarContainer">
        <Group className="Group" />
        <img className="Avatar" alt={teacher.name} src={teacher.avatar_url} />
      </div>
      <div className="ContentContainer">
        <div className="HeaderCard">
          <p className="Languages">Languages</p>

          <div className="TeacherQuatyContainer">
            <h3 className="TeacherQuaty">
              <OpenBook />
              Lessons online
            </h3>
            <p className="Border">|</p>
            <h3 className="TeacherQuaty">
              Lessons done: {teacher.lessons_done}
            </h3>
            <p className="Border">|</p>
            <h3 className="TeacherQuaty">
              <Star />
              Rating: {teacher.rating}
            </h3>
            <p className="Border">|</p>
            <h3 className="TeacherQuaty">
              Price / 1 hour:
              <span className="Price">{teacher.price_per_hour}$</span>
            </h3>
          </div>
          <Heart
            className="Heart"
            onClick={() => handleIconClick(teacher, teacher.avatar_url)}
            fill={buttonColors[teacher.avatar_url] || "none"}
            // stroke={buttonColors[teacher.avatar_url] || "#f4c550"}
          />
        </div>
        <h2 className="TeacherName">
          {teacher.name} {teacher.surname}
        </h2>
        <div className="TeacherDescription">
          <p className="Speaks">
            Speaks:
            <span className="SpeaksText">
              {teacher.languages[0]}, {teacher.languages[1]}
            </span>
          </p>
          <p className="Speaks">
            Lesson Info:{" "}
            <span className="LessonText">{teacher.lesson_info}</span>
          </p>
          <p className="Speaks">
            Conditions:{" "}
            <span className="LessonText">
              {teacher.conditions[0]}, {teacher.conditions[1]}
            </span>
          </p>

          {!showTextWindow[index] && (
            <button
              className="ButtonReadMore"
              onClick={() => handleReadMore(index)}
            >
              Read more
            </button>
          )}
          {showTextWindow[index] && (
            <div>
              <p className="TeacherText">{teacher.experience}</p>
              <ul className="ReviewList">
                {teacher.reviews.map((review, index) => (
                  <li key={index} className="ReviewElement">
                    <div className="ReviewContainer">
                      <UkraineImg className="DefaultAvatar" />
                      <div>
                        <p className="ReviewName">{review.reviewer_name}</p>
                        <p className="ReviewRaring">
                          <Star />
                          {review.reviewer_rating}.0
                        </p>
                      </div>
                    </div>
                    <p>{review.comment}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <ul className="LevelList">
            {teacher.levels.map((level, index) => (
              <li
                className={`Level ${index === 0 ? "YellowBackground" : ""}`}
                key={index}
              >
                #{level}
              </li>
            ))}
          </ul>
          {showTextWindow[index] && (
            <button className="ButtonBookLesson">Book trial lesson</button>
          )}
        </div>
      </div>
    </TeacherCard>
  );
}
