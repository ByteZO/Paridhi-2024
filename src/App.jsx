import React, { Suspense, lazy } from "react";
import Layout from "./Layout/Layout";
const Hero = lazy(() => import("./Components/Hero/Hero"));
const Events = lazy(() => import("./Components/Events/Events"));
const Profile = lazy(() => import("./Components/Profile/Profile"));
const WorkShop = lazy(() => import("./Components/WorkShop/WorkShop"));
const Sponsors = lazy(() => import("./Components/Sponsors/Sponsors"));
const OurTeam = lazy(() => import("./Components/OurTeam/OurTeam"));
import Loading from "../src/assets/Videos/Loading.mp4";
const Registration = lazy(() =>
  import("./Components/Registration/Registration")
);
const DomainEvents = lazy(() =>
  import("./Components/Events/DomainEvents/DomainEvents")
);
const PrePredhiEvents = lazy(() =>
  import("./Components/PreParedhiEvents/PrePredhiEvents")
);
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const LoadingYOYO = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <video
          style={{
            width: "200px",
          }}
          autoPlay
          loop
        >
          <source src={Loading} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path=""
        element={
          <Suspense
            fallback={
              <>
                <LoadingYOYO />
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
              <LoadingYOYO />
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
              <LoadingYOYO />
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
              <LoadingYOYO />
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
                <LoadingYOYO />
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
                <LoadingYOYO />
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
              <LoadingYOYO />
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
              <LoadingYOYO />
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
          <Suspense
            fallback={
              <>
                <LoadingYOYO />
              </>
            }
          >
            <Registration />
          </Suspense>
        }
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
