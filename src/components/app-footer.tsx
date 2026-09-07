import { logo } from "@/constants";

export function AppFooter() {
  return (
    <footer className="pt-10 w-full">
      <div className="grid px-4 pb-12 sm:px-6 lg:grid-cols-4 lg:gap-x-8 lg:px-8">
        <div className="max-w-lg lg:col-span-2">
          <a href="#">
            <span className="sr-only">Your Company</span>
            <img alt="" src={logo} className="h-10 w-auto" />
          </a>
          <p>lorem</p>
        </div>

        <div className="w-full space-y-8">
          <h3>Lorem Ipsum Dolor</h3>
          <div className="flex flex-col gap-y-5">
            <a href="http://">Hello World</a>
            <a href="http://">Hello World</a>
            <a href="http://">Hello World</a>
          </div>
        </div>

        <div className="w-full space-y-8">
          <h3>Lorem Ipsum Dolor</h3>
          <div className="flex flex-col gap-y-5">
            <a href="https://unpam.ac.id">unpam.ac.id</a>
            <a href="https://informatika.unpam.ac.id">
              informatika.unpam.ac.id
            </a>
            <a href="https://ftiunpam.com">ftiunpam.com</a>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <div className="from-neutral-50 pointer-events-none absolute inset-x-0 top-0 z-3 w-full h-64 bg-linear-to-b" />
        <div className="absolute -top-16 z-2 h-100 flex items-center justify-center w-full text-center">
          <p className="text-[16rem] font-bold font-[helvetica] text-blue-500 opacity-50">ASLAB TI</p>
        </div>
      </div>
    </footer>
  );
}
