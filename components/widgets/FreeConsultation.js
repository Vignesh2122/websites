import React from "react";
import FreeConsult from "@/public/pirai_free_consultation.gif";
import Image from "next/image";

import Link from "./Link";

const DeliveryLink = () => {
  return (
    <div className="stats">
      <div className="column-left">
        <p className="text-sm pb-7">
          Im Pirai&lsquo;s virtual assistant. Our team excels in Digital
          Transformation and can bring your vision to life.
        </p>
        <Image
          src={FreeConsult}
          alt="blogdesign"
          className="w-[70%] m-auto rounded-md"
        />
        <p className="text-sm pb-7">
          We offer free consultations to discuss your IT needs and how Pirai can
          help. Interested?
        </p>
        <a
          className="bg-[#d45147] px-3 py-2 rounded"
          href="https://piraiinfo.com/#form"
        >
          Book a Free Consultation
        </a>
      </div>
    </div>
  );
};

export default DeliveryLink;
