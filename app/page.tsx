import ContentCard from "./components/content-card/content-card";
import DonationCard from "./components/donation-card/donation-card";
import ShopCard from "./components/shop-card/shop-card";
import HeroBanner from "./components/hero-banner/hero-banner";
import TV from "./components/tv/tv";
import ContactCard from "./components/contact-card/contact-card";

export default function Home() {
  const youTubeBaseUrl = "https://www.youtube-nocookie.com/embed?listType=playlist&list="
  const youTubeListId = "UULFUit0DLfO1RQ1LjxVW1rT6Q";
  const youTubePlaylist = [];
  for (let i = 1; i <= 12; i++) {
    youTubePlaylist.push(youTubeBaseUrl + youTubeListId + "&index=" + i)
  }

  return (
    <main className="flex-1 flex-col items-center justify-between">
      <div className="m-2 sm:m-4 md:m-8">
        <HeroBanner
          image="/wolfman-repairs-website/logo.png"
          imageAlt="Wolfman Repairs Logo"
          text="Reviving retro, one console at a time!"
        />
        <section className="my-8 scroll-mt-20" id="video">
          <h2 className="sm:text-xl lg:text-3xl text-center mb-4">Check out the latest video</h2>
          <TV playlist={youTubePlaylist} />
        </section>
        <section className="flex flex-col gap-8 xl:flex-row scroll-mt-16 my-8" id="about">
          <ContentCard
            title="About Wolfman Repairs"
            image="/wolfman-repairs-website/nes-motherboard.png"
            imageAlt="nes motherboard"
            text={`Welcome to Wolfman Repairs, where passion meets craftsmanship. Founded in late 2022, Wolfman Repairs was born out of a love for retro video games and a desire to breathe new life into classic consoles.`}
          />
          <ContentCard
            title="About Wolfman"
            image="/wolfman-repairs-website/n64-chip.png"
            imageAlt="n64 chip"
            text={`The driving force behind Wolfman Repairs: the one-man show known simply as The Wolfman. With a passion for retro gaming and a knack for fixing things, the Wolfman is the heart and soul of our operation.

Armed with years of experience and an insatiable curiosity, the Wolfman dives headfirst into the world of vintage gaming, armed with soldering iron in hand and a determination to conquer any challenge that comes his way.`}
          />
        </section>
        <section className="my-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:justify-evenly items-center my-8">
            <ShopCard
              title="eBay"
              image="/wolfman-repairs-website/controller.svg"
              imageAlt="game controller"
              text=""
              url="https://www.ebay.com/usr/wolfmanrepairs"
            />
            <ShopCard
              title="Etsy"
              image="/wolfman-repairs-website/shirt.svg"
              imageAlt="t-shirt"
              text=""
              url="https://www.etsy.com/shop/WolfmanRepairs"
            />
            {/* <ShopCard
              title="Patreon"
              image="/wolfman-repairs-website/screwdriver.svg"
              imageAlt="screwdriver"
              text=""
              url=""
            /> */}
          </div>
          <DonationCard />
        </section>
        <section className="scroll-mt-72 flex flex-col lg:flex-row gap-8 my-8" id="contact">
          <ContactCard />
        </section>
      </div>
    </main >
  );
}
