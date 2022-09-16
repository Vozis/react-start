import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./global.css";
import { Header, PublicRoute, PrivateRoute } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import {
  HomePage,
  ChatPage,
  ProfilePage,
  GistsPage,
  LoginPage,
  RegistrationPage,
} from "./pages";
import { CustomThemeProvider, ThemeContext } from "./theme-context";
import { persistor, store, store2 } from "./store";
import { useContext } from "react";
import Router from "./routes/Router";
import { setupStore } from "./store/store";
import { myStore } from "./store/my-redux";
import { onAuthStateChanged } from "firebase/auth";
import { PersistGate } from "redux-persist/integration/react";
import { auth } from "./api/firebase";

const session = false;

const App = () => {
  const { theme } = useContext(ThemeContext);
  const [session, setSession] = useState(null);

  const isAuth = session?.email;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  console.log("session:", session?.email);

  return (
    <Provider store={store2}>
      {/*<PersistGate loading={null} persistor={persistor}>*/}
      <CustomThemeProvider initialTheme={theme}>
        {/*<Router />*/}
        <BrowserRouter>
          <Header email={session?.email} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="profile"
              element={
                <PrivateRoute isAuth={isAuth}>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
            <Route
              path="chats/*"
              element={
                <PrivateRoute isAuth={isAuth}>
                  <ChatPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<h1>404</h1>} />
            <Route
              path="gists"
              element={
                <PrivateRoute isAuth={isAuth}>
                  <GistsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute isAuth={isAuth}>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="registration"
              element={
                <PublicRoute isAuth={isAuth}>
                  <RegistrationPage />
                </PublicRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
      {/*</PersistGate>*/}
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
