import ContentCard from "./components/content-card/content-card";
import DonationCard from "./components/donation-card/donation-card";
import HeroBanner from "./components/hero-banner/hero-banner";
import TV from "./components/tv/tv";

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
        <div className="my-3 scroll-mt-20" id="video">
          <h2 className="sm:text-xl lg:text-3xl text-center my-4">Check out the latest video</h2>
          <TV playlist={youTubePlaylist} />
        </div>
        <section className="flex flex-col xl:flex-row xl:space-x-6 scroll-mt-16" id="about">
          <div className="xl:flex-1">
            <ContentCard
              title="About Wolfman Repairs"
              image="/wolfman-repairs-website/nes-motherboard.png"
              imageAlt="nes motherboard"
              text={`Welcome to Wolfman Repairs, where passion meets craftsmanship. Founded in late 2022, Wolfman Repairs was born out of a love for retro video games and a desire to breathe new life into classic consoles.`}
            />
          </div>
          <div className="xl:flex-1 mb-3">
            <ContentCard
              title="About Wolfman"
              image="/wolfman-repairs-website/n64-chip.png"
              imageAlt="n64 chip"
              text={`The driving force behind Wolfman Repairs: the one-man show known simply as The Wolfman. With a passion for retro gaming and a knack for fixing things, the Wolfman is the heart and soul of our operation.

Armed with years of experience and an insatiable curiosity, the Wolfman dives headfirst into the world of vintage gaming, armed with soldering iron in hand and a determination to conquer any challenge that comes his way.`}
            />
          </div>
        </section>
        <DonationCard />
      </div>
    </main >
  );
}
