import TeachersList from "components/teachersList/teachersList";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ContentContainer } from "./favorites.styled";

export default function Favorite() {
  const favoriteList = useSelector((state) => state.favorite.favorite);
  const teachers = useSelector((state) => state.teachers.teachers);
  const [loadedTeachersCount, setLoadedTeachersCount] = useState(4);
  const userId = useSelector((state) => state.auth.userId);

  const findTeachersById = favoriteList.filter(
    (teacher) => teacher.newFollower === userId
  );

  const findFavorite = findTeachersById.map((teacher) =>
    teachers.find(
      (obj) => obj.experience.length.toString() === teacher.id.toString()
    )
  );

  const handleLoadMore = () => {
    setLoadedTeachersCount((prevCount) => prevCount + 4);
  };
  return (
    <>
      {findFavorite.length ? (
        <ContentContainer>
          <ul className="TeachersList">
            {findFavorite
              .slice(0, loadedTeachersCount)
              .map((teacher, index) => (
                <TeachersList
                  key={index}
                  teacher={teacher}
                  filteredTeachers={findFavorite}
                />
              ))}
          </ul>
          {findFavorite.length > loadedTeachersCount && (
            <div className="ButtonLoadMoreContainer">
              <button className="ButtonLoadMore" onClick={handleLoadMore}>
                Load more
              </button>
            </div>
          )}
        </ContentContainer>
      ) : (
        <h1 style={{ textAlign: "center" }}>You need to choose a teacher!</h1>
      )}
    </>
  );
}
