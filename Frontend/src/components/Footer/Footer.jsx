import React from 'react'
import { Link } from 'react-router-dom'
import insta from "../../assets/images/insta.svg"
import linkedin from "../../assets/images/linkedin.svg"
import x from "../../assets/images/x.svg"
const Footer = () => {
  return (
    <footer className=" text-white  py-4 bg-blue-300 ">
    <div className='mx-20 flex flex-row  justify-between gap-4  '>
        <div className="text-sm text-center ">
            <p>Copyright &copy; 2025 TicketBooker. All right reserved.</p>
        </div>
        <div className='flex gap-3'>
          <Link to="#">  <img src={insta} className='w-6 h-6' alt='instagram-icon'/> </Link>
          <Link to="#">    <img src={linkedin} className='w-6 h-6' alt='lindedin-icon'/> </Link>
           <Link to="#">   <img src={x} className='w-6 h-6' alt='x-icon'/> </Link>

        </div>
        <div className='flex space-x-4 text-sm'>
            <Link to="#"><p>Privacy Policy</p></Link>
            <Link to="#"><p>Terms of Use</p></Link>
        </div>
    </div>

    </footer>
  )
}

export default Footer