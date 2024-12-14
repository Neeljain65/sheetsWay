import React from "react";
import NewsletterForm from "./components/NewsLetterForm";
import FooterNavigation from "./components/FooterNav";
import ContactInfo from "./components/ContactInfo";
import SocialLinks from "./components/socialLinks";
import Navbar from "./components/Navbar";
import CardSlider from "./components/cardSlider";
import TravelTips from "./components/TravelTips";
import Unique from "./components/Unique";

const BlogTravelGuides = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar/>
      {/* Hero Section */}
      <section style={{ backgroundImage: "url('/image (1).png')" }} className="relative mx-10 mt-3 h-72 bg-cover rounded-3xl bg-center">
  <div className="flex items-center justify-center h-full w-full rounded-3xl bg-black bg-opacity-50">
    <img src="/image (1).png" alt="Background" className="w-full h-full object-cover rounded-3xl" />
  </div>
  <div className="absolute inset-0 flex gap-3 flex-col items-center justify-center text-center">
    <h1 className="text-white text-3xl md:text-5xl font-bold">Blog & Travel Guides</h1>
    <p className="text-white">Travel tips, unique guides, and stories to inspire your Maltese adventure.</p> 
  </div>
</section>


      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <TravelTips/>

        {/* Unique Experiences */}
        <h2 className="text-center text-3xl font-bold mt-12 mb-8">Unique Experiences</h2>
       <Unique/>
          
        {/* Stories from other tourists */}
        <CardSlider/>
        <h2 className="text-center text-3xl font-bold mt-12 mb-8">Stories from other tourists</h2>
       
      </div>


      {/* Footer */}
      
    <div className="flex overflow-hidden flex-col items-center bg-white">
      <div className="flex flex-col self-end mt-12 w-full max-w-[1340px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between mt-12 max-md:mt-10 max-md:max-w-full" />
      </div>
      <footer className="flex relative flex-col items-center self-stretch px-20 pt-16 pb-8 mt-24 w-full min-h-[540px] max-md:px-5 max-md:mt-10 max-md:max-w-full" role="contentinfo">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8fa97c86dcf232213838928e648baf98ddafeae42b1e62b958caac9eb77a9ee?placeholderIfAbsent=true&apiKey=4fa3fff97dbb430f8edef042ded9c7a3"
          className="object-cover absolute inset-0 size-full"
          alt=""
        />
        <div className="flex relative flex-wrap gap-5 justify-between w-full max-w-[1240px] max-md:max-w-full">
          <h2 className="text-2xl font-medium text-white uppercase max-md:max-w-full">
            So why late? one steep far from a tour
          </h2>
          <NewsletterForm />
        </div>
        <div className="relative shrink-0 mt-7 max-w-full h-px border border-white border-solid w-[1240px]" />
        <div className="flex relative flex-wrap gap-5 justify-between items-start mt-16 w-full text-white max-w-[1240px] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col items-start">
            <div className="text-2xl font-black">Logo Here</div>
            <p className="self-stretch mt-4 text-sm leading-4">
              Immerse yourself in stunning visuals and captivating stories as
              you navigate through our website.
            </p>
            <SocialLinks />
          </div>
          <FooterNavigation />
          <ContactInfo />
        </div>
        <div className="relative shrink-0 self-start mt-5 max-w-full h-px border border-white border-solid w-[1170px]" />
        <p className="relative mt-8 text-sm leading-none text-white">
          © maltaxplore 2024, All Rights Reserved
        </p>
      </footer>
    </div>
  



    </div>
  );
};

export default BlogTravelGuides;
