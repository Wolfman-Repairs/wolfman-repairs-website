import ContentCard from "@/components/content-card/content-card";
import DonationCard from "@/components/donation-card/donation-card";
import ShopCard from "@/components/shop-card/shop-card";
import HeroBanner from "@/components/hero-banner/hero-banner";
import TV from "@/components/tv/tv";
import ContactCard from "@/components/contact-card/contact-card";
import MailingCard from "@/components/mailing-card/mailing-card";
import AffiliateCarousel from "@/components/affiliate-carousel/affiliate-carousel";

export default function Home() {
  const youTubeBaseUrl = "https://www.youtube-nocookie.com/embed?listType=playlist&list="
  const youTubeListId = "UULFUit0DLfO1RQ1LjxVW1rT6Q";
  const youTubePlaylist = [];
  for (let i = 1; i <= 12; i++) {
    youTubePlaylist.push(youTubeBaseUrl + youTubeListId + "&index=" + i)
  }

  return (
    <main className="">
      <div className="bg-neutral-900 flex-1 flex-col items-center justify-between">
        <div className="p-2 sm:p-4 md:p-8">
          <HeroBanner
            image="/icons/logo.webp"
            imageAlt="Wolfman Repairs"
            text="Reviving retro, one console at a time!"
          />
          <section className="my-8 scroll-mt-20" id="video">
            <div className="text-center">
              <a href="#video" key="Videos"
                className="sm:text-xl lg:text-3xl text-center mb-4">&darr; Check out the latest video &darr;</a>
            </div>
            <TV playlist={youTubePlaylist}
              offImage="/icons/logo.webp"
              offImageAlt="Wolfman Repairs Logo" />
          </section>
          <section className="flex flex-col gap-8 xl:flex-row scroll-mt-16 my-8" id="about">
            <ContentCard
              title="About Wolfman Repairs"
              image="/nes-motherboard.webp"
              imageAlt="nes motherboard"
              text={`Welcome to Wolfman Repairs, where passion meets craftsmanship. Founded in late 2022, Wolfman Repairs was born out of a love for retro video games and a desire to breathe new life into classic consoles.`}
            />
            <ContentCard
              title="About Wolfman"
              image="/n64-chip.webp"
              imageAlt="n64 chip"
              text={`The driving force behind Wolfman Repairs: the one-man show known simply as The Wolfman. With a passion for retro gaming and a knack for fixing things, the Wolfman is the heart and soul of our operation.

Armed with years of experience and an insatiable curiosity, the Wolfman dives headfirst into the world of vintage gaming, armed with soldering iron in hand and a determination to conquer any challenge that comes his way.`}
            />
          </section>
          <section className="my-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:justify-evenly items-center my-8">
              <ShopCard
                title="eBay"
                image="/controller.svg"
                imageAlt="game controller"
                text=""
                url="https://www.ebay.com/usr/wolfmanrepairs"
              />
              <ShopCard
                title="Etsy"
                image="/shirt.svg"
                imageAlt="t-shirt"
                text=""
                url="https://www.etsy.com/shop/WolfmanRepairs"
              />
              <ShopCard
                title="Patreon"
                image="/screwdriver.svg"
                imageAlt="screwdriver"
                text=""
                url="https://www.patreon.com/WolfmanRepairs"
              />
            </div>
            <DonationCard />
          </section>
          <section className="scroll-mt-72 flex flex-col lg:flex-row gap-8 my-8" id="contact">
            <MailingCard
              title="Send Wolfman a package!"
              image="/package.svg"
              imageAlt="package"
              text={`WOLFMAN REPAIRS
              11250 Old St. Augustine Rd
              Suite 15-205
              Jacksonville Fl, 32257`}
            />
            <ContactCard />
          </section>
        </div>
      </div>
      <div className="bg-transparent">
        <div className="h-12 bg-repeat-x bg-[url('/tooth.svg')]" />
        <section className="m-2 sm:m-4 md:m-8 scroll-mt-16 my-8" id="tools">
          <div className="text-center">
            <ContentCard
              title="Wolfman's Toolbox"
              text="As an Amazon Associate I earn from qualifying purchases."
            />
          </div>
          <div className="flex flex-col xl:flex-row">
            <AffiliateCarousel
              slides={[
                {
                  title: "iFixit Moray Driver Kit",
                  image: "/toolbox/driver_kit.webp",
                  imageAlt: "Photo of Driver Kit",
                  url: "https://amzn.to/4dPyPlr"
                },
                {
                  title: "Hakko-CHP-170 Micro Cutter",
                  image: "/toolbox/micro_cutter.webp",
                  imageAlt: "Photo of Micro Cutter",
                  url: "https://amzn.to/3XdsGJN"
                },
                {
                  title: "Anti-Static Stainless Steel Curved Tweezers",
                  image: "/toolbox/tweezers.webp",
                  imageAlt: "Photo of Stainless Steel Curved Tweezers",
                  url: "https://amzn.to/4dUgbIB"
                },
                {
                  title: "Eclipse Tools CP-301G Pro'sKit Precision Wire Stripper",
                  image: "/toolbox/wire_stripper.webp",
                  imageAlt: "Photo of Precision Wire Stripper",
                  url: "https://amzn.to/3zBlnPi"
                },
                {
                  title: "Andonstar AD407 Digital Microscope",
                  image: "/toolbox/microscope.webp",
                  imageAlt: "Photo of Digital Microscope",
                  url: "https://amzn.to/40InzRb"
                },
                {
                  title: "Microscope 144 Led Ring Light",
                  image: "/toolbox/microscope.webp",
                  imageAlt: "Photo of Led Ring Light",
                  url: "https://amzn.to/4dVFgmA"
                }
              ]}
            />
          </div>
        </section>
        <div className="h-12 -scale-y-100 bg-repeat-x bg-[left_72px_center] bg-[url('/tooth.svg')]" />
      </div>

    </main >
  );
}
