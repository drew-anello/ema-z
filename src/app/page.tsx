import Image from "next/image"
import img1 from "../../public/assets/website/ema1.jpg"
import img2 from "../../public/assets/website/ema2.jpg"
import img3 from "../../public/assets/website/ema3.jpg"
export default function Home() {
  return (
    <main>
      <div className="mt-60">
        <div className="grid grid-cols-3 gap-4">
          <Image className="w-2/3 mb-40"
            src={img1}
            alt="Ema on fire escape smoking"
          />
          <Image className="w-4/5 "
            src={img2}
            alt="Headshot of Ema"
          />
          <Image className="w-4/5 mt-8"
            src={img3}
            alt="Ema Headshot"
          />
        </div>
      </div>
    </main >
  )
}
