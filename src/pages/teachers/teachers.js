import { TeachersContainer } from "./teachers.styled";

export function Teachers() {
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
          <li className="TeacherCard"></li>
        </ul>
      </div>
    </TeachersContainer>
  );
}
