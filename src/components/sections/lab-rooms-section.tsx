import { labRoomsSection, labRooms } from "@/data/content";

export function LabRoomsSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="font-semibold text-neutral-500">
              {labRoomsSection.tag}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              {labRoomsSection.title}
            </p>
            <p className="mt-4 text-neutral-500">
              {labRoomsSection.description}
            </p>
          </div>

          <div className="mt-10 space-y-16 border-t border-neutral-200 pt-10 sm:mt-16 sm:pt-16">
            {labRooms.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-12"
              >
                <div className="flex-auto">
                  <img
                    alt={feature.imageAlt}
                    src={feature.imageSrc}
                    className="aspect-3/2 w-full rounded-lg bg-neutral-100 object-cover"
                  />
                </div>
                <div className="mt-6 lg:mt-0">
                  <h3 className="text-lg font-medium text-neutral-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
