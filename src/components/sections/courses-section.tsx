import { coursesHeading, timeline } from "@/data/content";
import { motion } from "motion/react";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  useParallaxY,
  useParallaxX,
  VIEWPORT,
} from "@/lib/animation";
import {
  BarChart3,
  Blocks,
  Boxes,
  Brain,
  Cloud,
  Code2,
  Database,
  Globe,
  Network,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

const COURSE_ICONS: Record<string, LucideIcon> = {
  "Algoritma & Pemrograman": Code2,
  "Struktur Data": Boxes,
  "Pemrograman": Blocks,
  "Pemrograman Berorientasi Objek": Blocks,
  "Basis Data": Database,
  "Sistem Basis Data": Database,
  "Jaringan Komputer": Network,
  "Cloud Computing": Cloud,
  "Komputasi Awan (Cloud)": Cloud,
  "Pemrograman Web": Globe,
  "Mobile Programming": Smartphone,
  "Pemrograman Bergerak (Mobile)": Smartphone,
  "Data Mining": BarChart3,
  "Data Mining & Analitika": BarChart3,
  "Machine Learning": Brain,
  "Machine Learning & AI": Brain,
};

function getCourseIcon(name: string): LucideIcon {
  if (COURSE_ICONS[name]) return COURSE_ICONS[name];
  const lower = name.toLowerCase();
  if (lower.includes("algoritma")) return Code2;
  if (lower.includes("struktur data")) return Boxes;
  if (lower.includes("pemrograman") && (lower.includes("objek") || lower.includes("oop"))) return Blocks;
  if (lower.includes("basis data") || lower.includes("database")) return Database;
  if (lower.includes("jaringan") || lower.includes("network")) return Network;
  if (lower.includes("awan") || lower.includes("cloud")) return Cloud;
  if (lower.includes("web")) return Globe;
  if (lower.includes("mobile") || lower.includes("bergerak")) return Smartphone;
  if (lower.includes("mining") || lower.includes("data")) return BarChart3;
  if (lower.includes("learning") || lower.includes("ai")) return Brain;
  return Code2;
}

function CourseIconBadge({ name }: { name: string }) {
  const Icon = getCourseIcon(name);
  return (
    <motion.div
      className="flex justify-center items-center size-8 text-neutral-500"
      whileHover={{ scale: 1.2, color: "#6366f1", transition: { duration: 0.2 } }}
    >
      <Icon size={20} aria-hidden="true" />
    </motion.div>
  );
}

export function CoursesSection() {
  // Section heading drifts up as you scroll in
  const { ref: headingRef, y: headingY } = useParallaxY([-50, 25]);
  // Left column drifts from the left, right column from the right
  const { ref: leftColRef, x: leftColX } = useParallaxX([-25, 15]);
  const { ref: rightColRef, x: rightColX } = useParallaxX([25, -15]);

  const midIndex = Math.ceil(timeline.length / 2);
  const leftItems = timeline.slice(0, midIndex);
  const rightItems = timeline.slice(midIndex);

  return (
    <div id="mata-kuliah" className="bg-white space-y-20 py-20 overflow-hidden">
      <div className="w-full max-w-7xl space-y-20 mx-auto px-4 sm:px-6 lg:px-8 2xl:px-0">
        {/* Heading with parallax Y */}
        <motion.hgroup
          ref={headingRef as React.RefObject<HTMLElement>}
          style={{ y: headingY }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="max-w-lg"
        >
          <h3 className="text-balance text-4xl font-medium tracking-tight sm:text-5xl">
            {coursesHeading}
          </h3>
        </motion.hgroup>

        {/* Two columns with independent horizontal parallax */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-24 lg:gap-y-20">
          {/* Left column */}
          <motion.div
            ref={leftColRef}
            style={{ x: leftColX }}
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col gap-8"
          >
            {leftItems.map((item) => (
              <motion.div
                key={item.name}
                variants={staggerItem}
                className="space-y-8 group"
                whileHover={{ x: 4, transition: { duration: 0.25 } }}
              >
                <div className="relative flex items-center font-semibold text-neutral-800">
                  <svg
                    viewBox="0 0 4 4"
                    aria-hidden="true"
                    className="mr-4 size-1 flex-none"
                  >
                    <circle r={2} cx={2} cy={2} fill="currentColor" />
                  </svg>
                  <motion.div
                    className="h-0.5 bg-neutral-800 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 112 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-neutral-900/30 sm:-ml-4 lg:static lg:-mr-6 lg:ml-6 lg:w-auto lg:flex-auto lg:translate-x-0"
                  />
                </div>
                <div className="flex items-center gap-x-5">
                  <CourseIconBadge name={item.name} />
                  <h3 className="text-lg/8 font-medium tracking-tight text-neutral-900 sm:text-xl lg:text-2xl">
                    {item.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm/6 text-neutral-600 lg:text-base/7">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right column — opposing X drift */}
          <motion.div
            ref={rightColRef}
            style={{ x: rightColX }}
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col gap-8"
          >
            {rightItems.map((item) => (
              <motion.div
                key={item.name}
                variants={staggerItem}
                className="space-y-8 group"
                whileHover={{ x: 4, transition: { duration: 0.25 } }}
              >
                <div className="relative flex items-center font-semibold text-neutral-800">
                  <svg
                    viewBox="0 0 4 4"
                    aria-hidden="true"
                    className="mr-4 size-1 flex-none"
                  >
                    <circle r={2} cx={2} cy={2} fill="currentColor" />
                  </svg>
                  <motion.div
                    className="h-0.5 bg-neutral-800 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 112 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-neutral-900/30 sm:-ml-4 lg:static lg:-mr-6 lg:ml-6 lg:w-auto lg:flex-auto lg:translate-x-0"
                  />
                </div>
                <div className="flex items-center gap-x-5">
                  <CourseIconBadge name={item.name} />
                  <h3 className="text-lg/8 font-medium tracking-tight text-neutral-900 sm:text-xl lg:text-2xl">
                    {item.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm/6 text-neutral-600 lg:text-base/7">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
