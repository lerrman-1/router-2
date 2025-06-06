import { BsCameraFill } from "react-icons/bs";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 shadow-lg flex items-center justify-between py-3 px-32 fixed top-0 left-0 w-full">
            {/* Logo a la izquierda */}
            <div className='flex items-center gap-3'>
                <BsCameraFill className='text-4xl text-blue-400' />
                <span className='font-semibold text-2xl text-blue-400'>lerrman</span>
            </div>
            {/* Enlaces a la derecha */}
            <div className='flex items-center gap-5'>
                <Link
                    to="/"
                    className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300'>
                    Home
                </Link>
                <Link
                    to="/about"
                    className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300'>
                    About
                </Link>
                <Link
                    to="/contact"
                    className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300'>
                    Contact
                </Link>
                <Link
                    to="/products"
                    className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300'>
                    Products
                </Link>
            </div>
        </nav>
    )
}

export default Navbar