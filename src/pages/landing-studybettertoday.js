import Banner from "@/components/Banner";
import { getLandingPageData } from "@/services/LandingPageService";
import React from "react";

export async function getStaticProps() {
  const domainSlug = "studybettertoday";
  const landingPageData = await getLandingPageData(domainSlug).then(
    (response) => response?.data
  );
  return {
    props: {
      landingPageData: landingPageData,
    },
    revalidate: 60,
  };
}
const LandingStudyBetterToday = ({ landingPageData }) => {
  console.log(landingPageData, "landingPageData");
  return (
    <div>
      <p>studybettertoday landing page</p>
      <Banner />
    </div>
  );
};

export default LandingStudyBetterToday;
