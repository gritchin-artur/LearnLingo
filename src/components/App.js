import Layout from "components/layout/layout";
import GlobalStyled from "createGlobalStyle/createGlobalStyle.styled";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "routes/PrivatRoute/privatRoute";
import PublicRoute from "routes/PublicRoute/publicRoute";

export const App = () => {
  return (
    <>
      <GlobalStyled />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index exact element={<PublicRoute></PublicRoute>} />
            <Route path="teachers" element={<PrivateRoute></PrivateRoute>} />
            <Route path="favorites" element={<PrivateRoute></PrivateRoute>} />
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
