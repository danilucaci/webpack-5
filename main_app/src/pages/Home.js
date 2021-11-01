import { Suspense, lazy } from "react";
import Image from "../components/Image";

const HelloWorldButton = lazy(() => import("lib_app/HelloWorldButton"));

function Home() {
  return (
    <>
      <Image />
      <Suspense fallback="Loading button...">
        <HelloWorldButton />
      </Suspense>
    </>
  );
}

export default Home;
