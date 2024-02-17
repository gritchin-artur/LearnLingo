import { ReactComponent as OpenBook } from "../../img/book-open.svg";
import { ReactComponent as Star } from "../../img/star.svg";
import { ReactComponent as Group } from "../../img/Group.svg";
import { ReactComponent as UkraineImg } from "../../img/ukraine.svg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { TeacherCard } from "./teachersList.styled";
import { addFavorite, removeFavorite } from "../../redux/data/favorite-slise";
import {
  addBookTrialLesson,
  openModalTrialLesson,
} from "../../redux/modals/modal-slice";
import toast from "react-hot-toast";

export default function TeachersList({ index, teacher }) {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers.teachers);
  const favoriteList = useSelector((state) => state.favorite.favorite);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userId = useSelector((state) => state.auth.userId);

  const [showTextWindow, setShowTextWindow] = useState(
    Array(teachers.length).fill(false)
  );

  const handleReadMore = (index) => {
    const newShowTextWindow = [...showTextWindow];
    newShowTextWindow[index] = true;
    setShowTextWindow(newShowTextWindow);
  };

  const isElementInArray = favoriteList.find(
    (obj) => obj.newFollower === userId && obj.id === teacher.experience.length
  );

  const handleIconClick = (teacher) => {
    const data = {
      newFollower: userId,
      id: teacher.experience.length,
    };
    if (!isAuth) {
      return toast.error("You is not authorized");
    }
    if (!isElementInArray) {
      dispatch(addFavorite(data));
    } else {
      dispatch(removeFavorite(data));
    }
  };
  const handleOpenModal = (teacher) => {
    console.log("teacher", teacher);
    dispatch(openModalTrialLesson());
    dispatch(addBookTrialLesson(teacher));
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
          <svg
            className="Heart"
            onClick={() => handleIconClick(teacher)}
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill={isElementInArray ? "#f4c550" : "none"}
          >
            <path
              stroke={isElementInArray ? "#f4c550" : "#121417"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M22.577 4.994a5.959 5.959 0 0 0-8.429 0L13 6.143l-1.148-1.149a5.96 5.96 0 0 0-8.429 8.428l1.149 1.149L13 22.999l8.428-8.428 1.149-1.149a5.96 5.96 0 0 0 0-8.428Z"
            />
          </svg>
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
            <button
              className="ButtonBookLesson"
              onClick={() => handleOpenModal(teacher)}
            >
              Book trial lesson
            </button>
          )}
        </div>
      </div>
    </TeacherCard>
  );
}
