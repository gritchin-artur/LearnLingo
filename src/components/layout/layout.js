import { NavLink, Outlet } from "react-router-dom";
import { ReactComponent as LogInImg } from "../../img/log-in-01.svg";
import { Header } from "./layout.styled";
import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openModalRegister,
  openModalLogIn,
} from "../../redux/modals/modal-slice";
import { Modal } from "components/Modals/Modals";
import { useModal } from "hooks/useModal";
import { logOut } from "../../redux/auth/auth-operation";

function Layout() {
  const { isModalLogIn, isModalRegister, isModalTrialLesson } = useModal();
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuth);
  const email = useSelector((state) => state.auth.email);

  const handleOpenModal = (id) => {
    if (id === "register") {
      return dispatch(openModalRegister());
    }
    if (id === "login") {
      return dispatch(openModalLogIn());
    }
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <Header>
        <NavLink to="/" className="UserDiv">
          <span className="UserIcon" />
          LearnLingo
        </NavLink>
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
          {isAuth && (
            <li>
              <NavLink className="Navlink" to="/favorites">
                Favorites
              </NavLink>
            </li>
          )}
        </ul>
        <div className="LogInContainer">
          {/* <button
            className=" LogInButton"
            id="login"
            onClick={() => handleOpenModal("login")}
          >
            <LogInImg />
            Log in
          </button> */}

          {isAuth ? (
            email
          ) : (
            <button
              className=" LogInButton"
              id="login"
              onClick={() => handleOpenModal("login")}
            >
              <LogInImg />
              Log in
            </button>
          )}

          <button
            id="register"
            className="RegisterButton"
            onClick={isAuth ? handleLogOut : () => handleOpenModal("register")}
          >
            {/* <NavLink to="/register" className="NavlinkButton"> */}
            {isAuth ? "Log Out" : "Registration"}
            {/* </NavLink> */}
          </button>
        </div>
        {(isModalLogIn || isModalRegister || isModalTrialLesson) && <Modal />}
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layout;
