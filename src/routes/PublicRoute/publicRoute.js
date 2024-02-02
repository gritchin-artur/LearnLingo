// import authSelectors from "redux/auth/auth-selectors";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

export default function PublicRoute({ children, restricted = false }) {
  //   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  //   const shouldRedirect = isLoggedIn && restricted;
  return (
    <div>
      {
        // shouldRedirect ?
        // <Navigate to="/" />
        // : children
      }
    </div>
  );
}
