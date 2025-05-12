import Image from "next/image";
import avatar from "../../app/assets/avatar/avatar-25.webp";
import logo from "../../app/assets/logo/compane demo logo.webp";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between gap-2 px-6 py-3.5 bg-white/20 backdrop-blur sticky top-0 z-50">
      <div className="flex items-center gap-2 text-headerColor text-sm font-semibold">
        <Image src={logo} alt="brand" className="w-5" />
        Innovate International Ltd
      </div>
      <div>
        <div>
          <Image src={avatar} alt="profile" className="w-9 h-9 rounded-full" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
