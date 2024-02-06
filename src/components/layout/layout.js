import { NavLink, Outlet } from "react-router-dom";
import { ReactComponent as LogInImg } from "../../img/log-in-01.svg";
import { Header } from "./layout.styled";
import { Suspense } from "react";
import { useDispatch } from "react-redux";
import {
  openModalRegister,
  openModalLogIn,
} from "../../redux/modals/modal-slice";
import { Modal } from "components/Modals/Modals";
import { useModal } from "hooks/useModal";

function Layout() {
  const { isModalLogIn, isModalRegister } = useModal();
  const dispatch = useDispatch();

  const handleOpenModal = (id) => {
    if (id === "register") {
      return dispatch(openModalRegister());
    }
    if (id === "login") {
      return dispatch(openModalLogIn());
    }
  };

  return (
    <Header>
      <div className="UserDiv">
        <span className="UserIcon" /> LearnLingo
      </div>
      <ul className="Ul">
        <li>
          <NavLink className="Navlink" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="Navlink" to="/teachers">
            Teachers
          </NavLink>
        </li>
        <li>
          <NavLink className="Navlink" to="/favorites">
            Favorites
          </NavLink>
        </li>
      </ul>
      <div className="LogInContainer">
        <button
          className=" LogInButton"
          id="login"
          onClick={() => handleOpenModal("login")}
        >
          <LogInImg />
          Log in
        </button>

        <button
          id="register"
          className="RegisterButton"
          onClick={() => handleOpenModal("register")}
        >
          Registration
        </button>
      </div>
      {(isModalLogIn || isModalRegister) && <Modal />}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Header>
  );
}

export default Layout;
