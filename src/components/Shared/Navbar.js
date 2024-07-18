"use client";
import Link from "next/link";
import userDefaultPic from "../../../public/user.png";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import NavMenu from "./Navmenu";

const Navbar = () => {
  // const {user,logOut} = useContext(AuthContext);
  const user = { email: "joy@example.com", displayName: "Joy", photoURL: "" };
  const router = useRouter();
  const pathname = usePathname();
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log("user sign out", result);
      })
      .catch((error) => console.error(error));
  };
  const getLinkClasses = (href) => {
    return pathname === href
      ? "text-blue-400  sm:text-base md:text-xl underline"
      : " sm:text-base md:text-xl";
  };

  return (
    <div className="bg-sky-950">
      <NavMenu></NavMenu>
      <div className="max-w-screen-xl mx-auto   ">
        <div className="navbar  justify-center">
          <div className="navbar-center">
            <ul className="flex flex-wrap w-full gap-5 px-1 text-white">
              <li>
                <Link href="/" className={getLinkClasses("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className={getLinkClasses("/products")}>
                  All Product
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-red-500 text-xl underline"
                      : " text-xl "
                  }
                >
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-red-500 text-xl underline"
                      : " text-xl "
                  }
                >
                  Pricing Plans2
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
