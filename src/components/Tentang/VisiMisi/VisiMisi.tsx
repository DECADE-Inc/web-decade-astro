import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default function VisiMisi() {
  return (
    <section className="w-full bg-white dark:bg-black font-Hammersmith-One">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 ">
        <Swiper
          modules={[Autoplay, Pagination]}
          style={{
            "--swiper-pagination-color": "#000000",
            "--swiper-pagination-bullet-inactive-color": "#999999", // Inactive bullet color
            "--swiper-pagination-bullet-inactive-opacity": "0.7",
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-horizontal-gap": "8px",
          }}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            disableOnInteraction: false,
            delay: 5000,
          }}
        >
          <SwiperSlide>
            <div className="relative w-full  bg-white text-black dark:bg-black dark:text-white rounded-2xl px-4 sm:px-6 lg:px-16  flex items-center justify-center overflow-hidden min-h-[600px] lg:min-h-[550px]">
              <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
                <img
                  src="img/tentang/logo_komunitas biru.png"
                  alt="Logo"
                  className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] h-auto mx-auto md:mx-0"
                />
                <div className="text-center md:text-left">
                  <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                    Tentang Logo
                    <br />
                    <span>DECADE inc</span>
                  </h2>
                  <p className="mt-4 text-sm sm:text-lg md:text-xl leading-relaxed font-semibold">
                    Jam pasir adalah bentuk simbol abadi. Jika pasir di dalamnya
                    telah habis, jam akan masih berfungsi dengan cara
                    membalikkan jam nya dan waktu akan mulai hitung mundur juga.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" relative w-full bg-white text-black dark:bg-black dark:text-white rounded-2xl px-4 sm:px-6 lg:px-16 flex items-center justify-center min-h-[600px] lg:min-h-[550px] overflow-hidden">
              <img
                src="img/tentang/kedua.png"
                alt="Background Icon"
                className="absolute opacity-80 w-[200px] sm:w-[250px] md:w-[300px] h-auto object-contain inset-0 m-auto pointer-events-none dark:hidden"
              />
              <img
                src="img/tentang/kedua_dark.png"
                alt="Background Icon"
                className="absolute opacity-80 w-[200px] sm:w-[250px] md:w-[300px] h-auto object-contain inset-0 m-auto pointer-events-none hidden dark:block"
              />

              <div className="text-center px-4 sm:px-6 max-w-3xl">
                <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold mb-2">
                  Visi
                </h2>
                <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold mb-6">
                  DECADE inc
                </h2>
                <p className="text-sm sm:text-lg md:text-xl font-semibold leading-relaxed">
                  Menjadi pribadi yang mampu berkomunikasi serta berkolaborasi
                  dengan baik dalam suatu proyek pengembangan aplikasi. Menjadi
                  pribadi yang mampu bersaing di bidang IT.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" relative w-full bg-white text-black dark:bg-black dark:text-white rounded-2xl px-4 sm:px-6 lg:px-16 flex items-center justify-center overflow-hidden min-h-[600px] lg:min-h-[550px] ">
              <img
                src="img/tentang/kedua.png"
                alt="Background Icon"
                className="absolute opacity-80 w-[200px] sm:w-[250px] md:w-[300px] h-auto object-contain inset-0 m-auto pointer-events-none dark:hidden"
              />
              <img
                src="img/tentang/kedua_dark.png"
                alt="Background Icon"
                className="absolute opacity-80 w-[200px] sm:w-[250px] md:w-[300px] h-auto object-contain inset-0 m-auto pointer-events-none hidden dark:block"
              />

              <div className="text-center px-4 sm:px-6 max-w-3xl">
                <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold mb-2">
                  Misi
                </h2>
                <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold mb-6">
                  DECADE inc
                </h2>
                <p className="text-sm sm:text-lg md:text-xl font-semibold leading-relaxed">
                  Membangun pemahaman dan keahlian di bidang Teknologi serta
                  update terkait perkembangan IT pada waktu ke waktu, membangun
                  sebuah aplikasi yang modern, yang mampu bersaing dengan
                  kemajuan teknologi, dan mengikuti arus teknologi yang terus
                  berkembang.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
