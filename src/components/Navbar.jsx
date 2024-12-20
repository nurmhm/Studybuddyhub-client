import { useContext, useState } from 'react';
import logo from '../assets/images/logo.png';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

const Navbar = () => {
   const { user, logOut } = useContext(AuthContext);
   const [theme, setTheme] = useState('light');


   const toggleTheme = () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
   };

   return (
      <div className=' sticky bg-white top-0 z-10 shadow-lg Postsen text-[#1A4D2E]'>
         <div className="navbar container mx-auto rounded-lg px-6">
            <div className="navbar-start">
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                     <li><Link to='/assignments'>Assignments</Link></li>
                     <li><Link to='/create'>Create Assignments</Link></li>
                     <li><Link to='/allpandding'>Pending assignments</Link></li>
                  </ul>


               </div>
               <Link to='/'>  <img className='w-auto h-7' src={logo} alt='' /></Link>
               <Link to='/' className=" text-sm lg:text-xl ml-3">StudyBuddyHub</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  <li><Link to='/assignments'>Assignments</Link></li>
                  <li><Link to='/create'>Create Assignments</Link></li>
                  <li><Link to='/allpandding'>Pending assignments</Link></li>
               </ul>
            </div>
            <div className="navbar-end">
               <ul className='menu mr-8  flex items-center justify-end menu-horizontal px-1'>

                  <div className='hidden lg:block items-center justify-center mr-4 mt-3 ' onClick={toggleTheme}>
                     {theme === 'dark' ? <BsSunFill /> : <BsMoonFill />}
                  </div>

                  <div className='flex'>
                     {!user && (
                        <>
                           <li className=' hidden lg:block lg:text-end'>
                              <Link to='/login'>Login</Link>
                           </li>
                           <li>
                              <Link to='/register'>Register</Link>
                           </li>
                        </>
                     )}
                  </div>

               </ul>
               {user && (
                  <div className='dropdown dropdown-end z-50'>
                     <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
                        <div title={user?.displayName} className='w-10 rounded-full'>
                           <img referrerPolicy='no-referrer' alt='User Profile Photo' src={user?.photoURL} />
                        </div>
                     </div>
                     <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
                        <li>
                           <Link to='/myAttemted' className='justify-between'>
                              My Attempted
                           </Link>
                        </li>
                        <li className='mt-2'>
                           <button onClick={logOut} className='bg-gray-200 block text-center'>
                              Logout
                           </button>
                        </li>
                     </ul>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default Navbar;
