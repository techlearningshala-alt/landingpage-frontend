
import Banner from "@/components/Banner";
import { getLandingPageData } from "@/services/LandingPageService";
import React from "react";

export async function getStaticProps() {
  const domainSlug = "edusprinthub";
  const landingPageData = await getLandingPageData(domainSlug).then(
    (response) => response?.data?.data[0] || null
  );
  return {
    props: {
      landingPageData: landingPageData,
    },
    revalidate: 60,
  };
}

const Home = ({landingPageData}) => {
  console.log(landingPageData,"mydatya");
  
  return <div>
    <Banner/>
  </div>;
};

export default Home;
