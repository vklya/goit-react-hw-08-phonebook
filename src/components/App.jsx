import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import PublicRoute from "modules/PublicRoute";
import PrivateRoute from "modules/PrivateRoute";

import AuthLayout from "modules/AuthLayout";
import NavBar from "modules/NavBar";

import Loader from "./Loader";

const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const SignUp = lazy(() => import('../pages/RegisterPage'));
const SignIn = lazy(() => import('../pages/LoginPage'));

export function App() {
  return (
    <AuthLayout>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </AuthLayout>
  );
}