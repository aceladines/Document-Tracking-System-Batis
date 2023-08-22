import NavBar from "@/components/NavBar";
import Table from "@/components/dashboard/Table";

export default function dashBoard() {
  return (
    <div className="flex flex-row">
      <div className="w-full max-w-[18.8vw]">
        <NavBar />
      </div>
      <div className="py-8 px-7">
        <h1 className="text-black font-bold text-3xl ">Your Dashboard</h1>

        <div className="flex flex-row pt-5 gap-3 flex-wrap">
          <div className="bg-white pt-8 pb-2 pr-24 pl-2 rounded-lg">
            <h1 className="text-5xl">12</h1>
            <h1 className="text-xl">Open Documents</h1>
          </div>

          <div className="bg-red-400 pt-8 pb-2 pr-24 pl-2 rounded-lg">
            <h1 className="text-5xl">12</h1>
            <h1 className="text-xl">Overdue Documents</h1>
          </div>

          <div className="bg-gray-300  pt-8 pb-2 pr-24 pl-2 rounded-lg">
            <h1 className="text-5xl">12</h1>
            <h1 className="text-xl">Assigned To You</h1>
          </div>

          <div className="bg-green-300 pt-8 pb-2 pr-24 pl-2 rounded-lg">
            <h1 className="text-5xl">12</h1>
            <h1 className="text-xl">Closed Documents</h1>
          </div>
        </div>

        {/* Search */}
        <div className="flex flex-row pt-6 justify-between mb-4">
          <div className="flex flex-row w-1/3 gap-2 items-center">
            <input
              className="py-2 px-4 w-full rounded-lg"
              type="text"
              placeholder="Search"
            />
            <div className="bg-white py-2 px-2 rounded-lg">
              <h1 className=" ">🔍</h1>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <label htmlFor="sort">Sort By:</label>
            <select className="py-2 px-4 rounded-lg w-52" name="sort" id="sort">
              <option value="" selected></option>
              <option value="">Name</option>
              <option value="">Department</option>
            </select>
          </div>
        </div>

        <Table />
      </div>
    </div>
  );
}
