import Image from "next/image";
import emaresume from "../../../public/assets/website/emaresume.jpg";
import emresumepic from "../../../public/assets/website/emresumepic.jpg";

function page() {
  return (
    <div className="mt-10 mb-10">
      <div className="grid grid-cols-1 gap-4 md:gap-1 md:w-fit md:grid-cols-2">
        <Image src={emresumepic} alt="Headshot of Ema" className="md:w-1/2" />
        <Image src={emaresume} alt="Ema's Resume" />
      </div>
      <br></br>
      <div className="flex mt-4 ">
        <div className="justify-center border-8 border-purple-400">
          <a
            className="text-xl font-normal text-white bg-purple-400 border-4 border-purple-400"
            href="./emaResume.pdf"
            download="Ema's Resume"
          >
            Download My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;
