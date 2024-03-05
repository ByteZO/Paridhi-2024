import React from "react";
import Layout from "./Layout/Layout";
import Hero from "./Components/Hero/Hero";
import Events from "./Components/Events/Events";
import WorkShop from "./Components/WorkShop/WorkShop";
import OurTeam from "./Components/OurTeam/OurTeam";
import Sponsors from "./Components/Sponsors/Sponsors";
import PrePredhiEvents from "./Components/PreParedhiEvents/PrePredhiEvents";
import { Registration } from "./Components/Registration/Registration";
import DomainEvents from "./Components/Events/DomainEvents/DomainEvents";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Hero />} />
      <Route path="events" element={<Events />} />
      <Route path="workshop" element={<WorkShop />} />
      <Route path="our_team" element={<OurTeam />} />
      <Route path="sponsors" element={<Sponsors />} />
      <Route path="pre_paredhi_events" element={<PrePredhiEvents />} />
      <Route path="events/:Domain" element={<DomainEvents />} />
      <Route
        path="events/:Domain/:EvnetRegistration"
        element={<Registration />}
      />
    </Route>
  )
);

export default function App() {
  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  );
}
