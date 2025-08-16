interface IPortofolioItem {
  judul: string;
  deskripsi: string;
  img: string;
  url: string;
}

interface PropTypes {
  portofolioObj: IPortofolioItem;
}

export default function PortofolioItem(props: PropTypes) {
  const { portofolioObj } = props;
  return (
    <div className="flex justify-center items-center">
      <div className="h-126 w-91 bg-white dark:bg-[#383838] rounded-2xl shadow-[9px_9px_21px_3px_#00000040] dark:shadow-[9px_9px_21px_3px_#00F6FF40] transition duration-300 flex flex-col">
        <img
          src={portofolioObj.img}
          alt=""
          className="w-full h-65 object-cover object-top bg-[#D9D9D9] dark:bg-[#797979] rounded-t-2xl"
        />
        <div className="p-4 flex flex-col">
          <h3 className="text-[26px] font-bold dark:text-white mb-2">
            {portofolioObj.judul}
          </h3>
          <p className="h-30 text-[16px] font-medium text-justify dark:text-white mb-4 overflow-hidden">
            {portofolioObj.deskripsi}
          </p>
          <a
            href={portofolioObj.url}
            className="self-end text-[16px] font-medium text-[#0063BF] hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Lihat Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
}
