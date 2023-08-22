import Image from "next/image";
import headers from "@/data/NavBarHeader";

export default function NavBar() {
  return (
    <div className="w-full max-w-[18rem] h-screen bg-blue-900 py-5 relative">
      {/* Header */}
      <div className="flex flex-row items-center w-full max-w-[17vw] gap-4 border border-white rounded-md m-auto py-2 px-2">
        <Image src={"/sj-logo.png"} width={55} height={55} alt="logo" />
        <h1 className="text-sm text-white font-semibold">
          Document Tracking System
        </h1>
      </div>

      {/* Menu */}
      <h1 className="text-slate-400 pl-12 py-2 text-sm">Menu</h1>
      <div className="flex flex-row text-blue-950 bg-blue-400 w-full max-w-[17vw] mx-auto rounded-lg px-2 py-2">
        <h1 className="text-blue-950 font-medium">Dashboard</h1>
      </div>

      {/* Border */}
      <div className="border border-slate-400 w-full max-w-[15rem] mx-auto mt-4 mb-5"></div>

      {/* Menu Continuation */}
      <div className="flex flex-col gap-2">
        {headers.map((data) => (
          <div
            className="flex flex-row  text-blue-950  w-full max-w-[17vw] mx-auto rounded-lg px-2 py-2 hover:bg-blue-800"
            key={data.id}
          >
            <h1 className="text-slate-400 font-medium">{data.name}</h1>
          </div>
        ))}
      </div>

      {/* Border */}
      <div className="border border-slate-400 w-full max-w-[15rem] mx-auto mt-4 mb-2"></div>
      {/* Menu Continuation */}
      <h1 className="text-slate-400 text-sm pl-12 mb-2">Reports</h1>
      <div className="flex flex-row text-blue-950 w-full max-w-[17vw] mx-auto rounded-lg px-2 py-2 hover:bg-blue-800">
        <h1 className="text-slate-400 font-medium">Transactions</h1>
      </div>

      {/* Credential/Signout */}
      <div className="flex flex-col absolute inset-x-0 bottom-5 px-4 gap-3 ">
        <div className="flex flex-row flex-wrap items-center gap-3">
          <div className="w-full max-w-[3rem] aspect-square bg-black rounded-full"></div>
          <h1 className="text-slate-400">Admin</h1>
        </div>
        <div className="">
          <button className="px-2 py-3 border border-slate-400 rounded-lg text-slate-400 font-normal w-full hover:bg-blue-800 hover:text-white">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
