import React, { useContext, useState } from "react";

import { AuthContext } from "../Providers/Authprovider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdMenu, MdClose } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import { Link } from "react-router";

export const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignout = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Signout Successful!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.log("Signout Failed", error);
      });
  };

  return (
    <nav className="w-11/12 mx-auto flex justify-between items-center py-4">
      {/* Logo Section */}
      <div className="text-2xl font-bold">
        <Link to="/">
          Tasks<span className="text-[#0000ff]">Minder</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link to="/home" className="font-semibold">
          Home
        </Link>
      

        {user ? (
          <div className="flex items-center gap-2">
             <Avatar>
<AvatarImage src="https://github.com/shadcn.png" />
<AvatarFallback>CN</AvatarFallback>
</Avatar>
            <span className="font-semibold">{user.displayName || "User"}</span>
            <Button onClick={handleSignout}>Logout</Button>
          </div>
        ) : (
          <Link to="/signIn">
            <Button variant="outline">Login</Button>
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-3xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <MdClose /> : <MdMenu />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link to="/home" className="font-semibold" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
         
          {user ? (
            <div className="flex flex-col items-center space-y-3">
              <Avatar>
<AvatarImage src="https://github.com/shadcn.png" />
<AvatarFallback>CN</AvatarFallback>
</Avatar>
              <span className="font-semibold">{user.displayName || "User"}</span>
              <Button onClick={handleSignout}>Logout</Button>
            </div>
          ) : (
            <Link to="/signIn" onClick={() => setIsMenuOpen(false)}>
              <Button variant="outline">Login</Button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};
