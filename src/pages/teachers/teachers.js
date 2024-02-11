import { useDispatch, useSelector } from "react-redux";
import { TeachersContainer } from "./teachers.styled";
import { useEffect, useState } from "react";
import { getTeachers } from "../../redux/data/data-operation";
import TeachersList from "pages/teachersList/teachersList";

export function Teachers() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.teachers.isLoading);
  const teachers = useSelector((state) => state.teachers.teachers);
  // const favoriteList = useSelector((state) => state.favorite.favorite);

  const [loadedTeachersCount, setLoadedTeachersCount] = useState(4);
  const [languages, setLanguages] = useState("");
  const [level, setLevel] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  const handleLoadMore = () => {
    setLoadedTeachersCount((prevCount) => prevCount + 4);
  };

  const filteredTeachers = teachers.filter((teacher) => {
    const languageFilterResult =
      !languages || teacher.languages.includes(languages);
    const levelFilterResult = !level || teacher.levels.includes(level);
    const priceFilterResult =
      !price || `${Math.round(teacher.price_per_hour / 10) * 10}` === price;

    return languageFilterResult && levelFilterResult && priceFilterResult;
  });

  return (
    <TeachersContainer>
      <form className="Form">
        <div className="FormElement">
          <label className="Label" htmlFor="languages">
            Languages
          </label>
          <select
            className="Select"
            id="languages"
            name="languages"
            onChange={(e) => setLanguages(e.target.value)}
            value={languages}
          >
            <option value="French">French</option>
            <option value="English">English</option>
            <option value="German">German</option>
            <option value="Spanish">Spanish</option>
            <option value="Italian">Italian</option>
            <option value="Korean">Korean</option>
            <option value="Mandarin Chinese">Mandarin Chinese</option>
            <option value="Vietnamese">Vietnamese</option>
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
            onChange={(e) => setLevel(e.target.value)}
            value={level}
          >
            <option value="A1 Beginner">A1 Beginner</option>
            <option value="A2 Elementary">A2 Elementary</option>
            <option value="B1 Intermediate">B1 Intermediate</option>
            <option value="B2 Upper-Intermediate">B2 Upper-Intermediate</option>
            <option value="C1 Advanced">C1 Advanced</option>
            <option value="C2 Proficient">C2 Proficient</option>
          </select>
        </div>

        <div className="FormElement">
          <label className="Label" htmlFor="price">
            Price
          </label>
          <select
            className="Select"
            id="price"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          >
            <option value="10">10 $</option>
            <option value="20">20 $</option>
            <option value="30">30 $</option>
            <option value="40">40 $</option>
            <option value="50">50 $</option>
            <option value="60">60 $</option>
            <option value="70">70 $</option>
            <option value="80">80 $</option>
            <option value="90">90 $</option>
            <option value="100">100 $</option>
          </select>
        </div>
      </form>

      <div className="ContentContainer">
        <ul className="TeachersList">
          {!filteredTeachers.length && (
            <h2>
              You must be enter incorrect value! Please try enather value!
            </h2>
          )}
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            filteredTeachers
              .slice(0, loadedTeachersCount)
              .map((teacher, index) => (
                <TeachersList
                  key={index}
                  teacher={teacher}
                  filteredTeachers={filteredTeachers}
                />
              ))
          )}
        </ul>
        {filteredTeachers.length > loadedTeachersCount && (
          <div className="ButtonLoadMoreConyainer">
            <button className="ButtonLoadMore" onClick={handleLoadMore}>
              Load more
            </button>
          </div>
        )}
      </div>
    </TeachersContainer>
  );
}
