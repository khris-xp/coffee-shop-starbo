import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  function handleNavbarOpen(): void {
    setOpen(!open);
    console.log(open);
  }

  return (
    <nav className="bg-white border-gray-200 font-nunito">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            className="h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Coffee Shop
          </span>
        </a>
        <button
          type="button"
          onClick={() => handleNavbarOpen()}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`items-center justify-between ${open ? "block" : "hidden"} w-full md:block md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <a href="#" className="text-gray-600 hover:text-green-800">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-800">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-800">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-800">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
