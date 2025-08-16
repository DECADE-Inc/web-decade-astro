import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../styles/portofolio_design.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";

const categories = [
  {
    id: "design_grafis",
    title: "DESIGN GRAFIS",
    items: [
      { src: "/img/portofolio/design/design1.png", alt: "Design 1" },
      { src: "/img/portofolio/design/design2.png", alt: "Design 2" },
      { src: "/img/portofolio/design/design3.png", alt: "Design 3" },
    ],
  },
  {
    id: "grafis_komersial",
    title: "GRAFIS KOMERSIAL",
    items: [
      { src: "/img/portofolio/design/commercial1.png", alt: "Commercial 1" },
      { src: "/img/portofolio/design/commercial2.png", alt: "Commercial 2" },
      { src: "/img/portofolio/design/commercial3.png", alt: "Commercial 3" },
    ],
  },
  {
    id: "design_logo",
    title: "DESAIN LOGO",
    items: [
      {
        src: "/img/portofolio/design/logo.png",
        alt: "Logo 1",
        label: "LOGO APPS",
      },
      {
        src: "/img/portofolio/design/logo.png",
        alt: "Logo 2",
        label: "LOGO APPS",
      },
      {
        src: "/img/portofolio/design/logo.png",
        alt: "Logo 3",
        label: "LOGO APPS",
      },
    ],
  },
];

export default function Design() {
  return (
    <div>
      <div className="w-full min-h-screen bg-gray-50 font-montserrat">
        {/* Hero Section */}
        <section
          className="h-screen flex flex-col justify-center items-center space-y-6 bg-cover"
          style={{
            backgroundImage: "url(/img/portofolio/hero-background.png)",
          }}
        >
          <div className="max-w-4xl flex flex-col items-center text-center mt-20 space-y-2">
            <div className="font-bold tracking-wide text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl ">
              PORTOFOLIO
              <span className="ml-2 text-xl sm:text-3xl md:text-4xl lg:text-8xl xl:text-6xl ">
                LOGO
              </span>
            </div>
            <div className="font-bold tracking-wider text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl ">
              DESAIN GRAFIS
            </div>
          </div>
        </section>
      </div>
      {categories.map((category) => (
        <div key={category.id} className="max-w-[124rem] p-[4rem_1rem]" id={category.id}>
          <div className="text-center font-bold text-2xl">{category.title}</div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            initialSlide={Math.floor(category.items.length / 2)} 
            pagination={{clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            {category.items.map((item) => (
              <SwiperSlide>
                <div className="flex justify-center">
                  <img src={item.src} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}
