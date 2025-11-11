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
const LandingEdusprinthub = ({landingPageData}) => {
  console.log(landingPageData, "landingPageData");
  return (
    <div>
      <p>edusprinthub landing page</p>
      <Banner />
    </div>
  );
};

export default LandingEdusprinthub;
