import { NavLink } from "react-router-dom";
import { MobileMenuContainer } from "./mobileMenuModal.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  openModalLogIn,
  openModalRegister,
} from "../../../redux/modals/modal-slice";
import { logOut } from "../../../redux/auth/auth-operation";

export function MobileMenu({ handleClickClose }) {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const email = useSelector((state) => state.auth.email);

  const handleOpenModal = (id) => {
    handleClickClose();
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
    <MobileMenuContainer>
      <ul className="Ul">
        <li>
          <NavLink className="Navlink" to="/" onClick={handleClickClose}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="Navlink"
            to="/teachers"
            onClick={handleClickClose}
          >
            Teachers
          </NavLink>
        </li>
        {isAuth && (
          <li>
            <NavLink
              className="Navlink"
              to="/favorites"
              onClick={handleClickClose}
            >
              Favorites
            </NavLink>
          </li>
        )}
      </ul>
      <div className="LogInContainer">
        {isAuth ? (
          email
        ) : (
          <button
            className="LogInButton"
            id="login"
            onClick={() => handleOpenModal("login")}
          >
            Log in
          </button>
        )}

        <button
          id="register"
          className="LogInButton"
          onClick={isAuth ? handleLogOut : () => handleOpenModal("register")}
        >
          {isAuth ? "Log Out" : "Registration"}
        </button>
      </div>
    </MobileMenuContainer>
  );
}
