// pages/[[...slug]].js
import { Geist, Geist_Mono } from "next/font/google";
import { getLandingPageData } from "@/services/LandingPageService";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function getServerSideProps({ params }) {
  const landingPageData = await getLandingPageData(params.slug).then(
    (response) => response?.data?.data || []
  );

  return {
    props: { landingPageData },
  };
}

export default function Home({ landingPageData }) {
  console.log(landingPageData, "landingPageData");

  return (
    <div className={`${geistSans.className} ${geistMono.className}`}>
      <main>
        {landingPageData.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.domain}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
