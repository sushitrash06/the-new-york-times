import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import IconNyt from '../../logonyt.png'
const navigation = [
    { name: "Home", href: "/", value: "home" },
    { name: "Arts", href: "/arts", value: "arts" },
    { name: "Automobiles", href: "/automobiles", value: "automobiles" },
    { name: "Business", href: "/Business", value: "Business" },
    { name: "Economy", href: "/Economy", value: "Economy"}
  ];
const HeaderMain: React.FunctionComponent = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location =useLocation()
  return (
    <div>
    <header className="lg:flex md:flex absolute inset-x-0 top-0 z-50 md:mx-20 mx-6 lg:mx-20 mt-10">
      <nav
        className="flex lg:p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              src={IconNyt}
              alt=""
              className="lg:w-2/3 md:w-2/3 w-1/2"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div onClick={()=>{
              setMobileMenuOpen(false)
            }}>
            <Link
              key={item.name}
              to={item.href}
              className={location.pathname === item.href ? "text-blue-800 font-bold" : "text-gray-900"}
            >
              {item.name}
            </Link>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {/* Log in <span aria-hidden="true">&rarr;</span> */}
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                src={IconNyt}
                alt=""
                className="lg:w-1/5 md:w-1/5 w-1/2"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  </div>
  )
};

export default HeaderMain;
