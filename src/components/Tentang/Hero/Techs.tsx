

const techs = [
  {
    src: "laravel.png",
    alt: "Laravel",
  },
  {
    src: "figma.png",
    alt: "Figma",
  },
  {
    src: "react.png",
    alt: "React",
  },
  {
    src: "mysql.png",
    alt: "MySQL",
  },
  {
    src: "photoshop.png",
    alt: "Adobe Photoshop",
  },
  {
    src: "flutter.png",
    alt: "Flutter",
  },
];

export default function Techs() {
  return (
    <div className="mt-20 px-0 sm:px-6">
      <div className="bg-[#d1d1d1] dark:bg-gray-800 rounded-xl py-6 px-4 shadow-lg">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6 justify-items-center">
          {techs.map((item, index) => (
            <div key={index} className="bg-white rounded-xl px-6 py-4 shadow flex items-center justify-center w-24 lg:w-36 h-20">
              <img
                src={`/img/tentang/${item.src}`}
                alt={`${item.alt}`}
                className="h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
