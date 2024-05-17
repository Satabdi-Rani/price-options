import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu, IoMdClose  } from "react-icons/io";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About Us' },
        { id: 3, path: '/services', name: 'Our Services' },
        { id: 4, path: '/contact', name: 'Contact Us' },
        { id: 5, path: '/profile/:username', name: 'User Profile' }
      ];


    return (
        <nav className="text-black p-6 bg-yellow-600">
            <div className="md:hidden" onClick={()=> setOpen(!open)}>
                {
                    open === true? <IoMdClose className="text-3xl " />: <IoMdMenu className="text-3xl "></IoMdMenu>
                }
            
            </div>
            <ul className={`md:flex duration-1000 absolute md:static 
             ${open? 'top-16': '-top-60'}
            bg-yellow-500 px-6`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;