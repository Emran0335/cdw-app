import FeaturesSection from "@/components/homepage/features-section";
import HeroSecction from "@/components/homepage/hero-section";
import LatesArrivals from "@/components/homepage/latest-arrivals-carousel";
import OurBrandsSection from "@/components/homepage/our-brands-section";
import { PageProps } from "@/config/types";
import React from "react";

export default async function Home(props: PageProps) {
  const searchParams = await props.searchParams;
  return (
    <div>
      <HeroSecction />
      <FeaturesSection />
      <LatesArrivals />
      <OurBrandsSection />
    </div>
  );
}
