import Image from "next/image"
import img1 from "../../public/assets/website/ema1.jpg"
import img2 from "../../public/assets/website/ema2.jpg"
import img3 from "../../public/assets/website/ema3.jpeg"
export default function Home() {
  return (
    <main className="mb-10">
      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-1.5">

          <Image className="w-2/3"
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
          <div className="md:col-start-1">
            <div className="ml-10">
              <p className="w-80">Ema Zivkovic is an immigrant actor, choreographer, and writer currently based in New York. Originally from Zagreb, Croatia, Ema embarked on a transformative journey at the age of sixteen when they moved to Chicago. Since then, they have established themselves as a talented artist in the New York City scene.
                <br></br>
                <br></br>
                Ema has had the pleasure of working with renowned institutions such as the Drama League, Actors Theatre of Louisville, The TEAM, The 24 Hour Plays, The Hangar Theatre, Target Margin Theatre, Perseverance Theatre, Colt Coeur, National Theatre Institute, Williamstown Theatre Festival, The Public Theatre, and many more.</p>
            </div>
          </div>
        </div>

      </div>
    </main >
  )
}
