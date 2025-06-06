import { BsCameraFill } from "react-icons/bs";
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="bg-gray-800 shadow-lg flex items-center justify-around py-3 px-32 fixed top-0 left-0 w-full">

            <div className='flex items-center gap-5 text-black'>
                <Link to="/">
                    <span className='font-semibold text-lg flex items-center gap-3 text-blue-400'>
                        <BsCameraFill className='text-6xl' />
                        <span className='font-semibold text-2xl'>lerrman-photos</span>
                    </span>
                </Link>

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

        </nav >
    )
}

export default Navbar