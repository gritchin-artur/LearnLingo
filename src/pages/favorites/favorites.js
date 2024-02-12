import TeachersList from "pages/teachersList/teachersList";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ContentContainer } from "./favorites.styled";

export default function Favorite() {
  const favoriteList = useSelector((state) => state.favorite.favorite);
  const [loadedTeachersCount, setLoadedTeachersCount] = useState(4);

  const handleLoadMore = () => {
    setLoadedTeachersCount((prevCount) => prevCount + 4);
  };
  return (
    <>
      {favoriteList && (
        <ContentContainer>
          <ul className="TeachersList">
            {favoriteList
              .slice(0, loadedTeachersCount)
              .map((teacher, index) => (
                <TeachersList
                  key={index}
                  teacher={teacher}
                  filteredTeachers={favoriteList}
                />
              ))}
          </ul>
          {favoriteList.length > loadedTeachersCount && (
            <div className="ButtonLoadMoreContainer">
              <button className="ButtonLoadMore" onClick={handleLoadMore}>
                Load more
              </button>
            </div>
          )}
        </ContentContainer>
      )}
    </>
  );
}
