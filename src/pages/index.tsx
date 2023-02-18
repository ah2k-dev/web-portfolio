import type { NextPage } from "next";

import Contact from "../components/Contact";
import Cursor from "../components/Cursor";
import Intro from "../components/Intro";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import MainProjects from "../components/MainProjects";
import Skills from "../components/Skills";
import SmallProjects from "../components/SmallProjects";
import Who from "../components/Who";
// import { allDataType } from "../shared/types";
import { useRef } from "react";
// import Canvas from "../components/Canvas";
import { data } from "../shared/contants";


const Home: NextPage = () => {
  const containerRef = useRef(null);
  console.log(data)
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: {
          smooth: true,
          breakpoint: 768,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <Cursor />
      <div data-scroll-container ref={containerRef}>
        {/* <Canvas /> */}
        <Intro />
        <Who />
        <Skills skills={data.skills} />
        <MainProjects projects={data.projects} />
        <SmallProjects projects={data.smallProjects} />
        <Contact />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Home;

// export const getStaticProps: GetStaticProps = async () => {
//   const data = await client.request(GET_ALL_DATA);

//   return {
//     props: {
//       data,
//     },
//     revalidate: 3600,
//   };
// };


