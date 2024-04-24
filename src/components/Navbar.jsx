import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='bg-black py-2 space-x-6'>
      <div className="container mx-auto flex justify- space-x-4 items-center">
      <Link to='/' className="text-white">Home</Link>

        <Link to='/about' className="text-white">About</Link>

        <Link to='/profile'className="text-white">Profile</Link>

        <Link to='/help'className="text-white" >Help</Link>
        
      <ul className="container mx-auto flex justify-end space-x-9 ">
        <li>
        <Link to='/signin' className="text-white">Signin</Link>
        </li>
        
      </ul>
      </div>
    </nav>
  )
}
export default Navbar;