import Banner from "@/components/Banner";
import { getLandingPageData } from "@/services/LandingPageService";
import React from "react";

export async function getStaticProps() {
  const domainSlug = "studybettertoday";
  const landingPageData = await getLandingPageData(domainSlug).then(
    (response) => response?.data.data[0]
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
      <Banner />
    </div>
  );
};

export default LandingStudyBetterToday;
