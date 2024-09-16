/** @format */
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const MenuLinks = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Shop", link: "/#shop" },
  { id: 3, name: "About", link: "/#about" },
  { id: 4, name: "Blogs", link: "/#blogs" },
];
const Navbar = () => {
  return (
    <div className="Thanhocd  bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 ThanhDevIT">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4 ">
            <a
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
              href="#">
              EShop
            </a>
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:text-white duration-200">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>
            <button className="relative p-3">
              <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs  ">
                5
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
