import { useDispatch, useSelector } from "react-redux";
import { TeachersContainer } from "./teachers.styled";
import { useEffect, useState } from "react";
import { getTeachers } from "../../redux/data/data-operation";
import { ReactComponent as OpenBook } from "../../img/book-open.svg";
import { ReactComponent as Star } from "../../img/star.svg";
import { ReactComponent as Heart } from "../../img/heartsvg.svg";
import { ReactComponent as Group } from "../../img/Group.svg";
import { ReactComponent as UkraineImg } from "../../img/ukraine.svg";

export function Teachers() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.teachers.isLoading);
  const teachers = useSelector((state) => state.teachers.teachers);
  const favoriteList = useSelector((state) => state.favorite.favorite);

  const [loadedTeachersCount, setLoadedTeachersCount] = useState(4);
  const [showTextWindow, setShowTextWindow] = useState(
    Array(teachers.length).fill(false)
  );
  const [languages, setLanguages] = useState(" ");
  const [level, setLevel] = useState(" ");
  const [price, setPrice] = useState(" ");

  const favoriteTeacher = teachers?.filter((el) =>
    favoriteList.includes(el.id)
  );

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  const handleLoadMore = () => {
    setLoadedTeachersCount((prevCount) => prevCount + 4);
  };

  const handleReadMore = (index) => {
    const newShowTextWindow = [...showTextWindow];
    newShowTextWindow[index] = true;
    setShowTextWindow(newShowTextWindow);
    console.log(loadedTeachersCount);
  };

  return (
    <TeachersContainer>
      <form className="Form">
        <div className="FormElement">
          <label className="Label" htmlFor="languages">
            Languages
          </label>
          <select className="Select" id="languages" name="languages">
            <option value="french">French</option>
            <option value="english">English</option>
            <option value="german">German</option>
            <option value="ukrainian">Ukrainian</option>
            <option value="polish">Polish</option>
          </select>
        </div>

        <div className="FormElement">
          <label className="Label" htmlFor="levelOfKnowledge">
            Level of knowledge
          </label>
          <select
            className="Select"
            id="levelOfKnowledge"
            name="levelOfKnowledge"
          >
            <option value="a1Beginner">A1 Beginner</option>
            <option value="a2Elementary">A2 Elementary</option>
            <option value="b2Intermediate">B1 Intermediate</option>
            <option value="b2Upper-Intermediate">B2 Upper-Intermediate</option>
          </select>
        </div>

        <div className="FormElement">
          <label className="Label" htmlFor="price">
            Price
          </label>
          <select className="Select" id="price" name="price">
            <option value="10$">10 $</option>
            <option value="20$">20 $</option>
            <option value="30$">30 $</option>
            <option value="40$">40 $</option>
            <option value="50$">50 $</option>
            <option value="60$">60 $</option>
            <option value="70$">70 $</option>
            <option value="80$">80 $</option>
            <option value="90$">90 $</option>
            <option value="100$">100 $</option>
          </select>
        </div>
      </form>

      <div className="ContentContainer">
        <ul className="TeachersList">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            teachers
              .map((teacher, index) => (
                <li key={index} className="TeacherCard">
                  <div className="AvatarContainer">
                    <Group className="Group" />
                    <img
                      className="Avatar"
                      alt={teacher.name}
                      src={teacher.avatar_url}
                    />
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
                          <span className="Price">
                            {teacher.price_per_hour}$
                          </span>
                        </h3>
                      </div>
                      <Heart className="Heart" />
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
                        <span className="LessonText">
                          {teacher.lesson_info}
                        </span>
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
                                    <p className="ReviewName">
                                      {review.reviewer_name}
                                    </p>
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
                            className={`Level ${
                              index === 0 ? "YellowBackground" : ""
                            }`}
                            key={index}
                          >
                            #{level}
                          </li>
                        ))}
                      </ul>
                      {showTextWindow[index] && (
                        <button className="ButtonBookLesson">
                          Book trial lesson
                        </button>
                      )}
                    </div>
                  </div>
                </li>
              ))
              .slice(0, loadedTeachersCount)
          )}
        </ul>
        {teachers.length > loadedTeachersCount && (
          <button className="ButtonLoadMore" onClick={handleLoadMore}>
            Load more
          </button>
        )}
      </div>
    </TeachersContainer>
  );
}
