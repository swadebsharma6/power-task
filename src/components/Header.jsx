import logo from '../assets/school.jpg';

const Header = () => {
    return (
        <nav className="py-5 md:py-8  fixed top-0 w-full !bg-[#191D26] z-50 ">
            <div className="container mx-auto flex items-center justify-between gap-x-6">
             <div className='flex items-center gap-x-3'>
             <a href="/">
             <img 
             className='h-[45px]'
             src={logo}
              alt="Logo"
               />
          </a>
          <h3 className='text-gray-100 font-bold'>Learn With SM</h3>
             </div>
            </div>
        </nav>
    );
};

export default Header;