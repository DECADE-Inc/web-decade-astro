import { useState } from "react";
import { cn } from "../../../lib/utils";
import ProfileItem from "./ProfileItem";

const anggota = {
  founder: [
    {
      id: "founder-1",
      name: "Yoga Ramadhani",
      role: "Founder",
      image: "img/profile/yoga.jpeg",
    },
    {
      id: "founder-2",
      name: "Muhammad Eagel Triutama",
      role: "Co-Founder",
      image: "img/profile/eagel.jpg",
    },
    {
      id: "founder-3",
      name: "Diva Aryadi",
      role: "Co-Founder",
      image: "img/profile/diva.jpg",
    },
  ],
  developer: [
    {
      id: "developer-1",
      name: "Muhammad Eagel Triutama",
      role: "Team Leader",
      image: "img/profile/eagel.jpg",
    },
    {
      id: "developer-2",
      name: "Yoga Ramadhani",
      role: "Member",
      image: "img/profile/yoga.jpeg",
    },
    {
      id: "developer-3",
      name: "Dwi Ramadhan Rivaldo",
      role: "Member",
      image: "img/profile/aldo.jpg",
    },
    {
      id: "developer-4",
      name: "Farjihan Arlin",
      role: "Member",
      image: "img/profile/farjihan.jpg",
    },
    {
      id: "developer-5",
      name: "Putri Kurnia Sari",
      role: "Member",
      image: "img/profile/putri.jpg",
    },
    {
      id: "developer-6",
      name: "Wagianto",
      role: "Member",
      image: "img/profile/profil.png",
    },
    {
      id: "developer-7",
      name: "Wenda",
      role: "Member",
      image: "img/profile/wenda.jpg",
    },
    {
      id: "developer-8",
      name: "L P Ranu Kumbolo",
      role: "Member",
      image: "img/profile/ranu.jpg",
    },
    {
      id: "developer-9",
      name: "Abdul Hadi",
      role: "Member",
      image: "img/profile/abdul.jpg",
    },
    {
      id: "developer-10",
      name: "Abdullah Royhan",
      role: "Member",
      image: "img/profile/profil.png",
    },
    {
      id: "developer-11",
      name: "Ika Bagus Sunandri",
      role: "Member",
      image: "img/profile/profil.png",
    },
    {
      id: "developer-12",
      name: "Rendra Jogja Sakti",
      role: "Member",
      image: "img/profile/profil.png",
    },
  ],
  designer: [
    {
      id: "designer-1",
      name: "Diva Aryadi",
      role: "Team Leader",
      image: "img/profile/diva.jpg",
    },
    {
      id: "designer-2",
      name: "Dimas Pratama",
      role: "Member",
      image: "img/profile/dimas.jpg",
    },
    {
      id: "designer-3",
      name: "Masyitah Elwinda",
      role: "Member",
      image: "img/profile/may.jpg",
    },
    {
      id: "designer-4",
      name: "Muhammad Ardiansyah",
      role: "Member",
      image: "img/profile/profil.png",
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
