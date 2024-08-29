import Header from "@/components/Header";
import Image from "next/image";
import india from "../../public/icons/india.svg";
import malaysia from "../../public/icons/malaysia.svg";
import germany from "../../public/icons/germany.svg";
import unitedkingdom from "../../public/icons/united-kingdom.svg";
import unitedstates from "../../public/icons/united-states (2).svg";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import Form from "@/components/Form";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>
          Get in Touch: Your Gateway to IT Solutions | Pirai Infotech
        </title>
        <meta
          name="description"
          content="Uncover the evolution of Pirai Infotech, a world-renowned expert in IT solutions. Learn about our key achievements, foundational successes, and welcoming company culture."
        />
        <meta
          name="keywords"
          content="Pirai Infotech, Cloud solutions, Digital transformation, Global leader, Success milestones, Technology innovation"
        />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/title.png" type="image/png" />
        <link rel="canonical" href="https://www.piraiinfo.com/contact-us/" />
      </Head>
      <Header />

      {/* -----------------------------------------------Global Reach----------------------------------- */}

      <section className="items-center mt-[10%] justify-center lg:block hidden  container mx-auto font-poppins lg:mb-[0px]">
        <h1 className="text-[36px] font-[600] pb-[6%] text-center mt-[50px]   text-textDarkBlue">
          Our Global <span className="text-bgPrimaryRed"> Reach </span>
        </h1>
        <div>
          <Map />
        </div>
      </section>

      {/* our global research only for mobile view*/}

      <section className="block lg:hidden px-[20px]">
        <div className="">
          <h2 className="text-center font-[600] text-[24px] md:text-[36px]  text-textDarkBlue md:pb-[20px] pt-5">
            Our Global <span className="text-[#D45147]">Reach</span>
          </h2>
        </div>
        <div>
          <div className="block sm:flex  w-[100%] justify-between pt-[40px]">
            <div className="flex w-full sm:w-[33%] bg-[#afafaf12] p-[3%] mb-2 rounded flex-col items-center text-center px-[5px]">
              <Image src={india} alt="india" className="w-[24px] h-[24px] " />
              <p className="md:text-[14px] text-[16px]">
                Pirai Infotech Private Limited 6, 32, Kamaraj Rd, Arumugam
                Nagar, Mahalingapuram, Tamil Nadu 642002
                <br />
                Phone: +91 4259 228627
              </p>
            </div>
            <div className="flex w-full sm:w-[33%] bg-[#afafaf12] p-[3%] mb-2 rounded flex-col items-center text-center px-[5px]">
              <Image src={malaysia} alt="malasia" />
              <p className="md:text-[14px] text-[16px]">
                Pirai Infosolutions SDN BHD, No. 23 Lorong Cakera Purnama, 12/32
                Seksyen 12 42300 Bandar Puncak Alam Selangor, Malaysia
                <br />
                Phone: +60 16-9245224
              </p>
            </div>
            <div className="flex w-full sm:w-[33%] bg-[#afafaf12] p-[3%] mb-2 rounded flex-col items-center text-center px-[5px]">
              <Image src={germany} alt="germany" />
              <p className="md:text-[14px] text-[16px]">
                Pirai Infotech UG, 12307 Berlin, Germany
                <br />
                Phone: +49 1521 8118 447
              </p>
            </div>
          </div>
          <div className="sm:flex  w-[100%] justify-between">
            <div className="flex w-full sm:w-[33%] bg-[#afafaf12] p-[3%] mb-2 rounded flex-col items-center text-center px-[5px]">
              <Image src={unitedkingdom} alt="unitedkingdom" />
              <p className="md:text-[14px] text-[16px]">
                Pirai Infotech Limited Venture House, Downshire Way, Arlington
                Square, Bracknell RG12 1WA, United Kingdom
                <br />
                Phone: +44 7894 733974
              </p>
            </div>
            <div className="flex w-full sm:w-[33%] bg-[#afafaf12] p-[3%] mb-2 rounded flex-col items-center text-center px-[5px]">
              <Image src={unitedstates} alt="unitedstates" />
              <p className="md:text-[14px] text-[16px]">
                Pirai Infotech INC, 99 Wall Street, #1253, New York, NY 10005
                <br />
                Phone: +1 (480) 374-4957
              </p>
            </div>
            {/* <div className="flex w-full sm:w-[33%] bg-[#afafaf12] p-[3%] mb-2 rounded flex-col items-center text-center px-[5px]">
              <Image src={malaysia} alt="malasia" />
              <p className="md:text-[14px] text-[16px]">
                Pirai Infotech SDN BHD 12A-6A & 12B-6B, Galleria@Cyberjaya,
                Jalan Teknokrat 6, Cyberjaya 5, 63000 Cyberjaya, Selangor Darul
                Ehsan, Malaysia
                <br />
                Phone: +603-40506111
              </p>
            </div> */}
            {/* <div className="flex w-[45%] flex-col items-center text-center px-[5px]">
              <Image src={malaysia} alt="malasia" />
              <p className="md:text-[14px] text-[10px]">
                Pirai Infosolutions SDN BHD, No. 23 Lorong Cakera Purnama, 12/32
                Seksyen 12 42300 Bandar Puncak Alam Selangor, Malaysia
                <br />
                Phone: +60 16-9245224
              </p>
            </div> */}
          </div>
          {/* <div className="flex w-[33%] flex-col items-center text-center px-[5px]">
              <Image src={malaysia} alt="malasia" />
              <p className="md:text-[14px] text-[10px]">
                Pirai Infotech SDN BHD
                Unit 911, 9th Floor,
                Plaza Permata,
                No 6 Jalan Kampar 5100
                Kuala Lumpur, 50400,
                Malaysia
                <br />
                Phone: +603-40506111
              </p>
            </div> */}
        </div>
      </section>
      <Form />

      {/* ---------------------------------------------------Footer------------------------------ */}
      <Footer />
    </>
  );
}
