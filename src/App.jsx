// Required Import
import React, { Suspense, lazy } from "react";
import styled, { keyframes } from "styled-components";
import Layout from "./Layout/Layout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Lazy loading Conversion
const Hero = lazy(() => import("./Components/Hero/Hero"));
const Events = lazy(() => import("./Components/Events/Events"));
const Profile = lazy(() => import("./Components/Profile/Profile"));
const WorkShop = lazy(() => import("./Components/WorkShop/WorkShop"));
const Sponsors = lazy(() => import("./Components/Sponsors/Sponsors"));
const OurTeam = lazy(() => import("./Components/OurTeam/OurTeam"));

const Registration = lazy(() =>
  import("./Components/Registration/Registration")
);
const DomainEvents = lazy(() =>
  import("./Components/Events/DomainEvents/DomainEvents")
);
const PrePredhiEvents = lazy(() =>
  import("./Components/PreParedhiEvents/PrePredhiEvents")
);

// Spinnner Styling 
const spinnerAnimation = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const Spinner = styled.div`
  width: 56px;
  height: 56px;
  display: grid;
  border: 4.5px solid #0000;
  border-radius: 50%;
  border-color: #222ce6 #0000;
  animation: ${spinnerAnimation} 1s infinite linear;

  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    margin: 2.2px;
    border: inherit;
    border-radius: 50%;
  }

  &::before {
    border-color: #e70000 #0000;
    animation: inherit;
    animation-duration: 0.5s;
    animation-direction: reverse;
  }

  &::after {
    margin: 8.9px;
  }
`;

// Defining the Route
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path=""
        element={
          <Suspense
            fallback={
              <>
                <Spinner />
              </>
            }
          >
            <Hero />
          </Suspense>
        }
      />
      <Route
        path="events"
        element={
          <Suspense
            fallback={
              <>
                <Spinner />
              </>
            }
          >
            <Events />
          </Suspense>
        }
      />
      <Route
        path="workshop"
        element={
          <Suspense
            fallback={
              <>
                <Spinner />
              </>
            }
          >
            <WorkShop />
          </Suspense>
        }
      />
      <Route
        path="our_team"
        element={
          <Suspense
            fallback={
              <>
                <Spinner />
              </>
            }
          >
            <OurTeam />
          </Suspense>
        }
      />
      <Route
        path="sponsors"
        element={
          <Suspense
            fallback={
              <>
                <Spinner />
              </>
            }
          >
            <Sponsors />
          </Suspense>
        }
      />
      <Route
        path="pre_paredhi_events"
        element={
          <Suspense
            fallback={
              <>
                <Spinner />
              </>
            }
          >
            <PrePredhiEvents />
          </Suspense>
        }
      />
      <Route
        path="events/:Domain"
        element={
          <Suspense
            fallback={
              <>
                <Spinner />
              </>
            }
          >
            <DomainEvents />
          </Suspense>
        }
      />
      <Route
        path="profile"
        element={
          <Suspense
            fallback={
              <>
                <Spinner />
              </>
            }
          >
            <Profile />
          </Suspense>
        }
      />
      <Route
        path="events/:Domain/:EvnetRegistration"
        element={
          <Suspense fallback={<></>}>
            <Registration />
          </Suspense>
        }
      />
    </Route>
  )
);

// Exporting the App component

export default function App() {
  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  );
}
