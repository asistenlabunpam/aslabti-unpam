"use client";

import { ParallaxHeroImages } from "@/components/parallax-hero-images";
import StackedSections from "./components/stacked-list";

const features = [
  {
    name: "Adventure-ready",
    description:
      "The Drawstring Canister is water and tear resistant with durable canvas construction. This bag holds up to the demands of daily use while keeping your snacks secure.",
    imageSrc:
      "https://images.unsplash.com/photo-1788438868315-42d573e3b87f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Printed photo of bag being tossed into the sky on top of grass.",
  },
  {
    name: "Minimal and clean",
    description:
      "Everything you need, nothing you don't. This bag has the simple, contemporary design that enables you to tell everyone you know about how essentialism is the only rational way to live life.",
    imageSrc:
      "https://images.unsplash.com/photo-1788438868315-42d573e3b87f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Double stitched black canvas hook loop.",
  },
  {
    name: "Organized",
    description:
      "Never lose your snacks again with our patent-pending snack stash pocket system. With dedicated pouches for each of your snacking needs, the Drawstring Canister unlocks new levels of efficiency and convenience.",
    imageSrc:
      "https://images.unsplash.com/photo-1788438868315-42d573e3b87f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Black canvas body with chrome zipper and key ring.",
  },
];

const leftFeatures = [
  {
    number: "01",
    title: "Directional color",
    description:
      "The channel split follows pointer movement, so the image responds to intent instead of playing a fixed loop.",
  },
  {
    number: "02",
    title: "Native WebGL",
    description:
      "The shader runs directly on the GPU without a scene library or animation dependency.",
  },
];

const rightFeatures = [
  {
    number: "03",
    title: "Any image source",
    description:
      "Pass a local asset, CDN URL, or CMS image through one small component API.",
  },
  {
    number: "04",
    title: "Responsive by default",
    description:
      "Cover cropping and resize observation keep the treatment stable at every aspect ratio.",
  },
];

const timeline = [
  {
    name: "Founded company",
    description:
      "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.",
    date: "Aug 2021",
    dateTime: "2021-08",
  },
  {
    name: "Secured $65m in funding",
    description:
      "Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.",
    date: "Dec 2021",
    dateTime: "2021-12",
  },
  {
    name: "Released beta",
    description:
      "Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.",
    date: "Feb 2022",
    dateTime: "2022-02",
  },
  {
    name: "Global launch of product",
    description:
      "Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.",
    date: "Dec 2022",
    dateTime: "2022-12",
  },
  {
    name: "Pemrograman I",
    description:
      "Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.",
    date: "Feb 2022",
    dateTime: "2022-02",
  },
  {
    name: "Struktur Data",
    description:
      "Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.",
    date: "Dec 2022",
    dateTime: "2022-12",
  },
];

function MyFirstChapter() {
  return (
    <div className="flex h-[100vh] items-center justify-center bg-red-500">
      <h2 className="text-2xl font-bold">My First Chapter</h2>
    </div>
  );
}

function MySecondChapter() {
  return (
    <div className="flex h-[100vh] items-center justify-center bg-green-500">
      <h2 className="text-2xl font-bold">My Second Chapter</h2>
    </div>
  );
}

function MyThirdChapter() {
  return (
    <div className="flex h-[100vh] items-center justify-center bg-blue-500">
      <h2 className="text-2xl font-bold">My Third Chapter</h2>
    </div>
  );
}

function FeatureColumn({ features }: { features: typeof leftFeatures }) {
  return (
    <dl className="grid h-full grid-rows-2 divide-y divide-black/10 dark:divide-white/10">
      {features.map((feature) => (
        <div
          key={feature.number}
          className="flex min-h-48 flex-col justify-between gap-8 p-6 sm:p-8"
        >
          <dt className="flex items-start justify-between gap-4">
            <span className="text-lg font-medium">{feature.title}</span>
            <span className="font-mono text-sm tracking-wide text-neutral-400 tabular-nums dark:text-neutral-500">
              {feature.number}
            </span>
          </dt>
          <dd className="max-w-[40ch] text-pretty text-base/7 text-neutral-600 dark:text-neutral-400 sm:text-sm/6">
            {feature.description}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function Page() {
  return (
    <>
      <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
        <ParallaxHeroImages images={images} variant="edge-focus" />
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-800 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] md:text-6xl">
            State of the art, cutting edge images, everywhere.
          </h1>
          <p className="max-w-md text-neutral-600 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
            Move your mouse to see the parallax effect. Images at different
            depths move at different speeds.
          </p>
        </div>
      </div>

      <div className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Our mission
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-6xl lg:flex-auto">
                <p className="text-2xl/normal text-neutral-800">
                  Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                  sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                  id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                  scelerisque eget. Eleifend egestas fringilla sapien.
                </p>
                <p className="mt-10 max-w-5xl text-xl/normal text-gray-700">
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
              </div>
            </div>

            <div>
              <h3 className="max-w-[18ch] pt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                One image, four useful capabilities
              </h3>
              <div className="grid lg:grid-cols-[3fr_4fr_3fr]">
                <div className="order-2 border-black/10 dark:border-white/10 lg:order-1 lg:border-r">
                  <FeatureColumn features={leftFeatures} />
                </div>
                <img
                  src="https://assets.aceternity.com/screenshots/green-dither-2.webp"
                  alt="Green dithered abstract gradient"
                  className="order-1 aspect-[4/5] min-h-96 bg-stone-300 dark:bg-neutral-800 lg:order-2 lg:aspect-auto lg:min-h-92"
                />
                <div className="order-3 border-t border-black/10 dark:border-white/10 lg:border-t-0 lg:border-l">
                  <FeatureColumn features={rightFeatures} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm/6 font-semibold text-indigo-600"
                >
                  <svg
                    viewBox="0 0 4 4"
                    aria-hidden="true"
                    className="mr-4 size-1 flex-none"
                  >
                    <circle r={2} cx={2} cy={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    aria-hidden="true"
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  />
                </time>
                <p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">
                  {item.name}
                </p>
                <p className="mt-1 text-base/7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <section aria-labelledby="details-heading">
            <div className="flex flex-col items-center text-center">
              <h2
                id="details-heading"
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                The Fine Details
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Our patented padded snack sleeve construction protects your
                favorite treats from getting smooshed during all-day adventures,
                long shifts at work, and tough travel schedules.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
              <div>
                <img
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  src="https://images.unsplash.com/photo-1788438868315-42d573e3b87f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="aspect-3/2 w-full rounded-lg object-cover"
                />
                <p className="mt-8 text-base text-gray-500">
                  The 20L model has enough space for 370 candy bars, 6 cylinders
                  of chips, 1220 standard gumballs, or any combination of
                  on-the-go treats that your heart desires. Yes, we did the
                  math.
                </p>
              </div>
              <div>
                <img
                  alt="Front zipper pouch with included key ring."
                  src="https://images.unsplash.com/photo-1788438868315-42d573e3b87f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="aspect-3/2 w-full rounded-lg object-cover"
                />
                <p className="mt-8 text-base text-gray-500">
                  Up your snack organization game with multiple compartment
                  options. The quick-access stash pouch is ready for even the
                  most unexpected snack attacks and sharing needs.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="font-semibold text-gray-500">
                Drawstring Canister
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Use it your way
              </p>
              <p className="mt-4 text-gray-500">
                The Drawstring Canister comes with multiple strap and handle
                options to adapt throughout your day. Shoulder sling it,
                backpack it, or handy carry it.
              </p>
            </div>

            <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-12"
                >
                  <div className="flex-auto">
                    <img
                      alt={feature.imageAlt}
                      src={feature.imageSrc}
                      className="aspect-3/2 w-full rounded-lg bg-gray-100 object-cover"
                    />
                  </div>
                  <div className="mt-6 lg:mt-0">
                    <h3 className="text-lg font-medium text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <StackedSections stackOffset={48}>
        <MyFirstChapter />
        <MySecondChapter />
        <MyThirdChapter />
      </StackedSections>

      <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-neutral-50">
        <ParallaxHeroImages images={images} />
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-800 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] md:text-6xl">
            State of the art, cutting edge images, everywhere.
          </h1>
        </div>
      </div>
    </>
  );
}

const images = [
  "https://assets.aceternity.com/components/hero-section-with-mesh-gradient.webp",
  "https://assets.aceternity.com/components/3d-globe.webp",
  "https://assets.aceternity.com/components/keyboard-2.webp",
  "https://assets.aceternity.com/components/hero-1.webp",
  "https://assets.aceternity.com/components/hero-2.webp",
  "https://assets.aceternity.com/components/hero-3.webp",
];
