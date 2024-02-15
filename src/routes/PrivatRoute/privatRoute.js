import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return <div>{isAuth ? children : <Navigate to="/" />}</div>;
}
