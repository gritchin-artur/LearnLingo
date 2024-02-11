import Layout from "components/layout/layout";
import GlobalStyled from "createGlobalStyle/createGlobalStyle.styled";
import Favorite from "pages/favorites/favorites";
import { HomePage } from "pages/homePage/homePage";
import { Teachers } from "pages/teachers/teachers";
import { Suspense, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import PrivateRoute from "routes/PrivatRoute/privatRoute";
import PublicRoute from "routes/PublicRoute/publicRoute";

export const App = () => {
  const location = useLocation();
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    if (
      location.pathname.includes("/teachers") ||
      location.pathname.includes("/favorites")
    ) {
      setBackgroundColor("#f8f8f8");
    } else {
      setBackgroundColor("#fff");
    }
  }, [location]);

  return (
    <>
      <GlobalStyled backgroundColor={backgroundColor} />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              exact
              element={
                // <PublicRoute>
                <HomePage />
                // </PublicRoute>
              }
            />
            <Route
              path="teachers"
              element={
                // <PrivateRoute>
                <Teachers />
                // </PrivateRoute>
              }
            />
            <Route
              path="favorites"
              element={
                // <PrivateRoute>
                <Favorite />
                // </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
            <Route
              path="register"
              element={
                <PublicRoute redirectTo="/teachers" restricted>
                  {/* <SingUp /> */}
                </PublicRoute>
              }
            />
            <Route
              path="login"
              restricted
              element={
                <PublicRoute redirectTo="/teachers" restricted>
                  {/* <LogIn /> */}
                </PublicRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
};
