import StackedSections from "@/components/stacked-list";
import { chapters } from "@/data/content";

function MyFirstChapter() {
  return (
    <div className="flex h-[100vh] items-center justify-center bg-red-500">
      <h2 className="text-2xl font-bold">{chapters.chapter1}</h2>
    </div>
  );
}

function MySecondChapter() {
  return (
    <div className="flex h-[100vh] items-center justify-center bg-green-500">
      <h2 className="text-2xl font-bold">{chapters.chapter2}</h2>
    </div>
  );
}

function MyThirdChapter() {
  return (
    <div className="flex h-[100vh] items-center justify-center bg-blue-500">
      <h2 className="text-2xl font-bold">{chapters.chapter3}</h2>
    </div>
  );
}

export function ChaptersSection() {
  return (
    <StackedSections stackOffset={48}>
      <MyFirstChapter />
      <MySecondChapter />
      <MyThirdChapter />
    </StackedSections>
  );
}
