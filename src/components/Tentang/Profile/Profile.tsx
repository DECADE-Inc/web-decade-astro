import { useState } from "react";
import { cn } from "../../../lib/utils";
import ProfileItem from "./ProfileItem";


import yogaImg from "../../../../public/img/profile/yoga.jpeg"
import eagelImg from "../../../../public/img/profile/eagel.jpg"
import divaImg from "../../../../public/img/profile/diva.jpg"
import aldoImg from "../../../../public/img/profile/aldo.jpg"
import farjihanImg from "../../../../public/img/profile/farjihan.jpg"
import putriImg from "../../../../public/img/profile/putri.jpg"
import wendaImg from "../../../../public/img/profile/wenda.jpg"
import ranuImg from "../../../../public/img/profile/ranu.jpg"
import abdulImg from "../../../../public/img/profile/abdul.jpg"
import dimasImg from "../../../../public/img/profile/dimas.jpg"
import mayImg from "../../../../public/img/profile/may.jpg"
import wagiImg from "../../../../public/img/profile/wagianto.jpeg"
import placeholder from "../../../../public/img/profile/profil.png"






const anggota = {
  founder: [
    {
      id: "founder-1",
      name: "Yoga Ramadhani",
      role: "Founder",
      image: yogaImg.src,
    },
    {
      id: "founder-2",
      name: "Muhammad Eagel Triutama",
      role: "Co-Founder",
      image: eagelImg.src,
    },
    {
      id: "founder-3",
      name: "Diva Aryadi",
      role: "Co-Founder",
      image: divaImg.src,
    },
  ],
  developer: [
    {
      id: "developer-1",
      name: "Muhammad Eagel Triutama",
      role: "Team Leader",
      image: eagelImg.src,
    },
    {
      id: "developer-2",
      name: "Yoga Ramadhani",
      role: "Member",
      image: yogaImg.src,
    },
    {
      id: "developer-3",
      name: "Dwi Ramadhan Rivaldo",
      role: "Member",
      image: aldoImg.src,
    },
    {
      id: "developer-4",
      name: "Farjihan Arlin",
      role: "Member",
      image: farjihanImg.src,
    },
    {
      id: "developer-5",
      name: "Putri Kurnia Sari",
      role: "Member",
      image: putriImg.src,
    },
    {
      id: "developer-6",
      name: "Wagianto",
      role: "Member",
      image: wagiImg.src,
    },
    {
      id: "developer-7",
      name: "Wenda",
      role: "Member",
      image: wendaImg.src,
    },
    {
      id: "developer-8",
      name: "L P Ranu Kumbolo",
      role: "Member",
      image: ranuImg.src,
    },
    {
      id: "developer-9",
      name: "Abdul Hadi",
      role: "Member",
      image: abdulImg.src,
    },
    {
      id: "developer-10",
      name: "Abdullah Royhan",
      role: "Member",
      image: placeholder.src,
    },
    {
      id: "developer-11",
      name: "Ika Bagus Sunandri",
      role: "Member",
      image: placeholder.src,
    },
    {
      id: "developer-12",
      name: "Rendra Jogja Sakti",
      role: "Member",
      image: placeholder.src,
    },
  ],
  designer: [
    {
      id: "designer-1",
      name: "Diva Aryadi",
      role: "Team Leader",
      image: divaImg.src,
    },
    {
      id: "designer-2",
      name: "Dimas Pratama",
      role: "Member",
      image: dimasImg.src,
    },
    {
      id: "designer-3",
      name: "Masyitah Elwinda",
      role: "Member",
      image: mayImg.src,
    },
    {
      id: "designer-4",
      name: "Muhammad Ardiansyah",
      role: "Member",
      image: placeholder.src,
    },
  ],
};

export default function Profile() {
  const [activeTab, setActiveTab] = useState("founder");
  const handleActiveTab = (
    identifier: "founder" | "developer" | "designer"
  ) => {
    if (identifier === "founder") {
      setActiveTab("founder");
    } else if (identifier === "developer") {
      setActiveTab("developer");
    } else {
      setActiveTab("designer");
    }
  };
  return (
    <section className="pt-0 pb-18 bg-gradient-to-b from-[#C3C3C333] to-white dark:bg-none font-Hammersmith-One">
      <div className="mx-auto">
        <div className="px-4 lg:px-0">
          <div className="max-w-lg">
            <div className="flex  bg-[#D9D9D9] shadow-md rounded-lg overflow-hidden">
              <button
                className={cn(
                  "flex-1 py-4 lg:py-8 text-sm md:text-xl font-bold transition duration-200 text-black hover:bg-[#c4c4c4] cursor-pointer",
                  activeTab === "founder" ? "bg-[#8C8C8C80] text-white" : null
                )}
                onClick={() => handleActiveTab("founder")}
              >
                Founder
              </button>
              <button
                className={cn(
                  "flex-1 py-4 lg:py-8 text-sm md:text-xl font-bold transition duration-200 text-black hover:bg-[#c4c4c4] cursor-pointer",
                  activeTab === "developer" ? "bg-[#8C8C8C80] text-white" : null
                )}
                onClick={() => handleActiveTab("developer")}
              >
                Developer
              </button>
              <button
                className={cn(
                  "flex-1 py-4 lg:py-8 text-sm md:text-xl font-bold transition duration-200 text-black hover:bg-[#c4c4c4] cursor-pointer",
                  activeTab === "designer" ? "bg-[#8C8C8C80] text-white" : null
                )}
                onClick={() => handleActiveTab("designer")}
              >
                Designer
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          {activeTab === "founder" && (
            <div className="flex flex-row gap-4 justify-center flex-wrap">
              {anggota.founder.map((item) => (
                <ProfileItem key={item.id} profileObj={item} />
              ))}
            </div>
          )}
          {activeTab === "developer" && (
            <div className="flex flex-row gap-4 justify-center flex-wrap">
              {anggota.developer.map((item) => (
                <ProfileItem key={item.id} profileObj={item} />
              ))}
            </div>
          )}
          {activeTab === "designer" && (
            <div className="flex flex-row gap-4 justify-center flex-wrap">
              {anggota.designer.map((item) => (
                <ProfileItem key={item.id} profileObj={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
