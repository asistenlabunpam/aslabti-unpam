import {
  aboutContent,
  pillarsHeading,
  leftFeatures,
  rightFeatures,
  type NumberedFeature,
} from "@/data/content";

function FeatureColumn({ features }: { features: NumberedFeature[] }) {
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

export function AboutSection() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-neutral-900 sm:text-5xl">
            {aboutContent.heading}
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-6xl lg:flex-auto">
              <p className="text-2xl/normal text-neutral-800">
                {aboutContent.vision}
              </p>
              <p className="mt-10 max-w-5xl text-xl/relaxed text-neutral-700">
                {aboutContent.mission}
              </p>
            </div>
          </div>

          <div className="w-full space-y-12 py-20">
            <hgroup className="max-w-lg mx-auto text-center">
              <h3 className="text-balance text-4xl font-medium tracking-tight sm:text-5xl">
                {pillarsHeading}
              </h3>
            </hgroup>
            <div className="grid lg:grid-cols-[3fr_4fr_3fr]">
              <div className="order-2 border-black/10 dark:border-white/10 lg:order-1 lg:border-r">
                <FeatureColumn features={leftFeatures} />
              </div>
              <img
                src="https://assets.aceternity.com/screenshots/green-dither-2.webp"
                alt="Laboratorium Komputasi Teknik Informatika"
                className="order-1 aspect-4/5 min-h-96 bg-stone-300 dark:bg-neutral-800 lg:order-2 lg:aspect-auto lg:min-h-92"
              />
              <div className="order-3 border-t border-black/10 dark:border-white/10 lg:border-t-0 lg:border-l">
                <FeatureColumn features={rightFeatures} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
