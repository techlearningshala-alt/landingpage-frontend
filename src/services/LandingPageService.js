// services/LandingPageService.js
import axios from "axios";
const token = process.env.NEXT_PUBLIC_API_TOKEN;
const headers = {
   Authorization: `Bearer ${token}`,
};

export const getLandingPageData = async (domainSlug) => {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BACKEND_URL +
        "landing-pages?filters[slug][$eq]=" +
        domainSlug +
        "&populate=*"
    , { headers });
    return res;
  } catch (err) {
    console.error("❌ Landing Page API error:", err.message);
    return [];
  }
};

// export async function getLandingPageData(slug) {
//   const url = product-a
//     ? `${STRAPI_URL}/api/landing-pages?filters[slug][$eq]=${(slug)}&populate=*`
//     : `${STRAPI_URL}/api/landing-pages?populate=*`;

//   return axios.get(url);
// }
