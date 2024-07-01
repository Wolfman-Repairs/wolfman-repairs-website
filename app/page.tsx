import VideoPlayer from "./components/video-player/video-player";
import CardAccordion from "./components/card-accordion/card-accordion";
import DonationCard from "./components/donation-card/donation-card";

export default function Home() {
  return (
    <main className="flex-1 flex-col items-center justify-between">
      <div className="bg-gradient-to-b from-gray-500 to-neutral-900 pb-6">
        <div className="flex flex-col gap-3">
          <div className="m-12">
            <img
              className="object-contain w-full h-auto max-h-80 fill-white"
              src="/test-website-2/logo.png"
              alt="Wolfman Repairs Logo"
            />
          </div>

          <p className="text-white text-4xl font-bold text-center">
            Reviving Retro, One Console At a Time!!
          </p>
        </div>
      </div>
      <div className="m-4">
        <div className="md:px-10" id="video">
          <h2 className="text-4xl text-center my-4">Check out the latest video!!</h2>
          <VideoPlayer playlist="UULFUit0DLfO1RQ1LjxVW1rT6Q" />
        </div>
        <div className="" id="about">
          <h2 className="text-4xl text-center my-8">About Wolfman Repairs</h2>
          <div className="flex flex-col md:flex-row justify-center md:justify-evenly md:space-x-6">
            <CardAccordion
              title="Our Story"
              image="/test-website-2/next.svg"
              imageAlt="nes motherboard"
              visibleText={`Welcome to Wolfman Repairs, where passion meets craftsmanship. Founded in late 2022, Wolfman Repairs was born out of a love for retro video games and a desire to breathe new life into classic consoles.

Driven by a lifelong fascination with gaming, our founder embarked on a journey to not only restore vintage gaming systems but to also share the joy of retro gaming with a wider audience. Armed with soldering irons and a deep-seated commitment to quality, Wolfman Repairs began its quest to revive gaming nostalgia one console at a time.`}
              hiddenText={`From the dusty attics to the bustling world of eBay, we scoured for forgotten treasures, rescuing them from obscurity and bringing them back to their former glory. Each repair isn't just about fixing a piece of hardware; it's about preserving a piece of gaming history and passing it on to future generations.

Along the way, we encountered our fair share of challenges. From stubborn circuit boards to elusive spare parts, every obstacle only fueled our determination to succeed. Through perseverance and ingenuity, we honed our skills and refined our craft, emerging stronger with each conquest.

At the heart of Wolfman Repairs lies a deep-seated commitment to our mission and values. We believe in the power of nostalgia to connect people across generations and the importance of preserving the cultural heritage embodied in these gaming relics. Integrity, craftsmanship, and a dedication to customer satisfaction are the pillars upon which we built our reputation.

Since our humble beginnings, Wolfman Repairs has grown into a thriving community of retro gaming enthusiasts. With each repair, we not only breathe new life into consoles but also create opportunities for others to experience the magic of retro gaming firsthand.

As we look to the future, our vision is clear: to continue expanding our reach, spreading the joy of retro gaming far and wide, and leaving a lasting legacy in the gaming community. Join us on this journey as we embark on new adventures, one pixel at a time.

Thank you for being a part of the Wolfman Repairs family.`} />

            <CardAccordion
              title="Our Team"
              image="/test-website-2/next.svg"
              imageAlt="n64 chip"
              visibleText={`The driving force behind Wolfman Repairs: the one-man show known simply as the Wolfman. With a passion for retro gaming and a knack for fixing things, the Wolfman is the heart and soul of our operation.

Armed with years of experience and an insatiable curiosity, the Wolfman dives headfirst into the world of vintage gaming, armed with soldering iron in hand and a determination to conquer any challenge that comes his way.`}
              hiddenText={`As the sole member of the Wolfman Repairs team, he wears many hats: technician, curator, marketer, and everything in between. From scouring flea markets for hidden gems to meticulously restoring consoles in his dungeon, the Wolfman's dedication to his craft knows no bounds.

But it's not just about fixing consoles; it's about fostering a sense of community and sharing the joy of retro gaming with the world. With each repair, the Wolfman brings a piece of gaming history back to life, sparking nostalgia and creating memories for enthusiasts young and old.

Driven by a commitment to excellence and a passion for preserving gaming heritage, the Wolfman is more than just a repairman; he's a guardian of gaming nostalgia, ensuring that these timeless classics continue to bring joy for years to come.

Join the Wolfman on this journey through the annals of gaming history, as he continues to tinker, repair, and inspire. Together, let's celebrate the magic of retro gaming and keep the spirit of the Wolfman alive.`} />
          </div>
        </div>
        <DonationCard />
      </div>
    </main >
  );
}
