import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

const Header = ({ items }: { items: any }) => {
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#abdbe342] px-4 py-2 shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.1)] mb-[2px]">
      <div className="flex justify-between lg:justify-end items-center">
        
        <button
          className="lg:hidden text-[#07A854] focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-4">
          {/* <img src={profile} width="30px" height="30px" className="hidden md:flex rounded-full" /> */}
          <div className="hidden md:grid">
            <p className="text-sm text-[#151924]">CNAM</p>
            <p className="text-sm text-[#00AF27]">Admin</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <ChevronDown className="text-[#737898] w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Déconnexion
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </div>

      {/* Collapsible Mobile Menu */}
      <div
        className={`lg:hidden mt-4 transition-transform transform ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="flex items-center justify-center"> 
          {/* <img src={logo} alt="Logo" className="w-[150px] h-[100px]" /> */}
        </div>
        <ul className="flex flex-col gap-2 bg-white shadow-md rounded-md p-4">
          {items.map((item: any) => (
            <li
              key={item.key}
              className="text-sm text-[#151924] hover:text-[#00AF27] cursor-pointer"
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
