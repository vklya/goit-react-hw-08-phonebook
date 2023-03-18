import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import PublicRoute from "modules/PublicRoute";
import PrivateRoute from "modules/PrivateRoute";

import AuthLayout from "modules/AuthLayout";
import NavBar from "modules/NavBar";

import Loader from "./Loader";

const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));

export function App() {
  return (
    <AuthLayout>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PublicRoute />}>

          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Suspense>
    </AuthLayout>
  );
}