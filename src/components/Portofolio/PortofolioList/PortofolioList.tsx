import PortofolioItem from "./PortofolioItem";

const allPortofolioItem = [
  {
    judul: "Website",
    deskripsi: "Semua aplikasi website yang telah dibangun oleh decade",
    img: "/img/portofolio/image1.png",
    url: "/portofolio/website",
  },
  {
    judul: "Design",
    deskripsi:
      "Semua design grafis baik itu poster maupun flyer yang sudah dibuat oleh decade",
    img: "/img/portofolio/image2.png",
    url: "/portofolio/design#design_grafis",
  },
  {
    judul: "Logo",
    deskripsi: "Semua logo yang sudah dibuat oleh decade",
    img: "/img/portofolio/image3.png",
    url: "/portofolio/design#design_logo",
  },
];

export default function PortofolioList() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-center w-full px-4 my-14">
      {allPortofolioItem.map((item) => (
        <PortofolioItem portofolioObj={item} />
      ))}
    </div>
  );
}
