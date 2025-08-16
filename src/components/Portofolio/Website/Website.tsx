import { ArrowUpIcon } from "@heroicons/react/16/solid";

export default function Website() {
  return (
    <>
      <div className="mt-24 lg:mt-34 lg:py-16 h-auto text-center space-y-6 relative p-4 flex justify-center items-center flex-col">
        <div className="text-xl lg:text-4xl text-[#414141] font-bold">
          decadeinc.com
        </div>
        <img
          className="block mx-auto"
          src="/img/portofolio/website/web-decade.png"
          alt=""
        />
        <div className="max-w-md mx-auto lg:text-lg font-semibold">
          decadeinc.com merupakan website dari komunitas decade yang berisi
          portofolio-portofolio website ataupun design grafis.{" "}
        </div>
        <a className="flex items-center gap-1" href="/">
          <div
            className="px-4 py-3 rounded-full bg-[#414141] text-white font-bold"
           
          >
            Kunjungi website
          </div>
          <div className="p-2 rounded-full bg-[#414141] text-white w-fit">
            <ArrowUpIcon className="w-4 h-4 md:w-6 md:h-6 rotate-[30deg]" />
          </div>
        </a>
        <img
          className="hidden absolute lg:block top-0 left-0 right-0 bottom-0 blur-sm -z-10 mx-auto"
          src="/img/portofolio/website/bg-web-decade.png"
          width="1000"
          alt=""
        />
      </div>
      <div className="mt-16 lg:mt-24 lg:py-16 h-auto text-center space-y-6 relative p-4 mb-32 lg:mb-64 flex justify-center items-center flex-col">
        <div className="text-xl lg:text-4xl  font-bold lg:text-white">
          servicecenterelectrolux.com
        </div>
        <img
          className="block mx-auto"
          src="/img/portofolio/website/web-servis.png"
          alt=""
        />
        <div className="max-w-md mx-auto lg:text-lg font-semibold lg:text-white">
          Service center electrolux merupakan website landing page yang dibuat
          untuk mempromosikan layanan perbaikan produk-produk electrolux
        </div>
        <a
          href="https://servicecenterelectrolux.com/"
          className="flex items-center gap-1"
        >
          <div
            className="px-4 py-3 rounded-full bg-[#414141] text-white font-bold"
           
          >
            Kunjungi website
          </div>
          <div className="p-2 rounded-full bg-[#414141] text-white w-fit">
            <ArrowUpIcon className="w-4 h-4 md:w-6 md:h-6 rotate-[30deg]" />
          </div>
        </a>
        <img
          className="hidden absolute lg:block top-0 left-0 right-0 bottom-0 blur-sm -z-10 mx-auto"
          src="/img/portofolio/website/bg-web-servis.png"
          width="1000"
          alt=""
        />
      </div>
    </>
  );
}
