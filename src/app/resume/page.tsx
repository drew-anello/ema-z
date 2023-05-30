
import Image from "next/image"
import emaresume from "../../../public/assets/website/emaresume.jpg"

function page() {
    return (
        <div className="mt-20 mb-10">

            <Image src={emaresume}
                alt="Ema's Resume" />
            <br></br>
            <div className="flex ">
                <div className="justify-center border-8 border-green-400">
                    <a className="text-xl font-extrabold text-orange-500 bg-green-400 border-4 border-green-400" href="./emaResume.pdf" download="Ema's Resume">Download My Resume</a>
                </div>
            </div >
        </div >
    )
}

export default page