import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import React from 'react'
import PageTeste from './pages/PageTeste'
import PageTeste2 from './pages/PageTeste2'
import Navbar from './components/template/Navbar'
import Footer from './components/template/Footer'
import './index.css'

// Layout padrão do projeto
const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AppLayout />}>
        <Route path="/" element={<PageTeste />} />
        <Route path="/home" element={<PageTeste2 />} />
      </Route>
    </Route>
  )
);



createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);