import * as React from "react";

function ContactInfo() {
  return (
    <div className="flex flex-col self-stretch">
      <h3 className="text-lg font-semibold leading-none">Contact Info</h3>
      <div className="flex flex-col mt-6 text-base">
        <address className="leading-6 not-italic">
          20, Guze Ellul Mercer Str, Iklin IKL1371 MALTA
        </address>
        <div className="flex flex-col mt-5 leading-none whitespace-nowrap">
          <a
            href="tel:123-456-789"
            className="flex gap-5 items-center self-start hover:underline focus:outline-none focus:ring-2 focus:ring-white"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ebca08c429b518ab244f6f09126456d00e8e09483e6459ba51db26a5ad6dc34?placeholderIfAbsent=true&apiKey=4fa3fff97dbb430f8edef042ded9c7a3"
              className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
              alt="Phone icon"
            />
            <span className="self-stretch my-auto">123-456-789</span>
          </a>
          <a
            href="mailto:maltaxplore@gmail.com"
            className="flex gap-5 items-center mt-4 hover:underline focus:outline-none focus:ring-2 focus:ring-white"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1d7ba8d48247e3a8044ed74dfd2075814681cca831f40280cd0a403cd46e113?placeholderIfAbsent=true&apiKey=4fa3fff97dbb430f8edef042ded9c7a3"
              className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
              alt="Email icon"
            />
            <span className="self-stretch my-auto">maltaxplore@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;