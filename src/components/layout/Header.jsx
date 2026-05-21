import { Search, Menu, Gem, User } from "lucide-react";
import Button from "../common/Button";

export default function Header() {
  return (
    <div className="bg-white border-b px-6 py-4 flex items-center justify-between">

      <div className="flex items-center border rounded-md px-3 py-2 w-[350px]">

        <input
          type="text"
          placeholder="Find influencers to collaborate with"
          className="outline-none flex-1 text-sm"
        />

        <Search size={18} className="text-gray-400" />
      </div>

      <div className="flex items-center gap-3">

        <Button bg="bg-yellow-400" text="text-black">
          <span className="inline-flex items-center gap-2">
            <Gem size={18} className="text-black" />
            Upgrade
          </span>
        </Button>

        <Button>
          <span className="inline-flex items-center gap-2">
            <span className="text-xl font-semibold">+</span>
            Create Campaign
          </span>
        </Button>

        <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-gray-700 hover:bg-gray-50">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <User size={16} />
          </div>
          <Menu size={20} />
        </button>
      </div>
    </div>
  );
}