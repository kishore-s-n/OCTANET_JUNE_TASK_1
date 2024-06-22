import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { navItems } from "../constants";
import Button from "../utils/Button";
import { useState } from "react";
const Navbar = () => {
  const [mobileDrawOpen, setMobileDrawOpen] = useState(false);

  const toggleMobileView = () => {
    setMobileDrawOpen(!mobileDrawOpen);
    console.log(mobileDrawOpen);
  };
  return (
    <nav className='sticky top-0 z-20 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
      <div className='px-2 mx-auto relative text-sm'>
        <div className='flex justify-around items-center'>
          <div className='flex items-center flex-shrink-0'>
            <img src={logo} alt='logo' className='h-10 w-10 mr-2' />
            <h2 className='text-xl tracking-tight'>VirtualR</h2>
          </div>
          <ul className='hidden lg:flex ml-14 space-x-12'>
            {navItems.map((item, index) => (
              <li key={index} className='font-bold text-base'>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className='hidden lg:flex justify-center space-x-12 items-center'>
            <Button transparent={true} content='Sign In' />
            <Button transparent={false} content='Create an Account' />
          </div>
          <div className='lg:hidden md:flex flex-col justify-end'>
            <button onClick={toggleMobileView}>
              {mobileDrawOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawOpen && (
          <div className='fixed right-0 z-20 bg-neutral-800 w-full p-6 flex flex-col justify-center items-center lg:hidden'>
            <ul className='flex flex-col justify-center items-center pb-6'>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className='py-3 justify-center items-center text-base'>
                  <a href={item.href} id={item.label}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className='lg:hidden space-x-6 flex '>
              <Button transparent={true} content='Sign In' />
              <Button transparent={false} content='Create an Account' />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
