import firstVideo_lap from '../assets/image/v3.mp4';

function Header() {
   return (
      <>
         <div className="mobile_view mb-4 mt-3">
            <video className=' w-[90%] md:w-[90vw] mx-auto rounded-2xl' src={firstVideo_lap} autoPlay muted loop></video>
         </div>
      </>
   )
}

export default Header;
