import { useDispatch, useSelector } from "react-redux";
import { TeachersContainer } from "./teachers.styled";
import { useEffect, useMemo, useState } from "react";
import { getTeachers } from "../../redux/data/data-operation";
import TeachersList from "components/teachersList/teachersList";
import Select from "react-select";
import { useSelect } from "hooks/useSelect";

export function Teachers() {
  const dispatch = useDispatch();
  const {
    optionsLanguages,
    optionsLevelOfKnowledge,
    optionsPrice,
    colourStyles,
    themeStyles,
  } = useSelect();

  const isLoading = useSelector((state) => state.teachers.isLoading);
  const teachers = useSelector((state) => state.teachers.teachers);

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

  const filteredTeachers = useMemo(() => {
    return teachers.filter((teacher) => {
      const languageFilterResult =
        !languages || teacher.languages.includes(languages);
      const levelFilterResult = !level || teacher.levels.includes(level);
      const priceFilterResult =
        !price || `${Math.round(teacher.price_per_hour / 5) * 5}` === price;

      return languageFilterResult && levelFilterResult && priceFilterResult;
    });
  }, [teachers, languages, level, price]);

  const renderedTeachers = useMemo(() => {
    return filteredTeachers
      .slice(0, loadedTeachersCount)
      .map((teacher, index) => (
        <TeachersList
          key={index}
          teacher={teacher}
          filteredTeachers={filteredTeachers}
        />
      ));
  }, [filteredTeachers, loadedTeachersCount]);

  return (
    <TeachersContainer>
      <form className="Form">
        <div className="FormElement">
          <label className="Label" htmlFor="languages">
            Languages
          </label>
          <Select
            id="languages"
            styles={colourStyles}
            theme={themeStyles}
            defaultValue=""
            onChange={(e) => setLanguages(e ? e.value : "")}
            options={optionsLanguages}
          />
        </div>

        <div className="FormElement">
          <label className="Label" htmlFor="levelOfKnowledge">
            Level of knowledge
          </label>
          <Select
            id="levelOfKnowledge"
            styles={colourStyles}
            theme={themeStyles}
            defaultValue=""
            onChange={(e) => setLevel(e ? e.value : "")}
            options={optionsLevelOfKnowledge}
          />
        </div>

        <div className="FormElement">
          <label className="Label" htmlFor="price">
            Price
          </label>
          <Select
            id="price"
            styles={colourStyles}
            theme={themeStyles}
            defaultValue=""
            onChange={(e) => setPrice(e ? e.value : "")}
            options={optionsPrice}
          />
        </div>
      </form>

      <div className="ContentContainer">
        <ul className="TeachersList">
          {!filteredTeachers.length && (
            <h2>
              You must be enter incorrect value! Please try enather value!
            </h2>
          )}
          {isLoading ? <h2>Loading...</h2> : renderedTeachers}
        </ul>
        {filteredTeachers.length > loadedTeachersCount && (
          <div className="ButtonLoadMoreContainer">
            <button className="ButtonLoadMore" onClick={handleLoadMore}>
              Load more
            </button>
          </div>
        )}
      </div>
    </TeachersContainer>
  );
}
