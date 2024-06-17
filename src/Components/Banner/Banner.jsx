import './Banner.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";

function Banner() {
  return (
    <>
    <div className="banner">
      <FontAwesomeIcon icon={faChevronLeft} className='arrow'/>
      <a href="#" className='offer'>Extra 20% off with code FLASH20.</a>
      <FontAwesomeIcon icon={faChevronRight} className='arrow'/>
    </div>
    {/* <hr /> */}
    </>
  );
}
export default Banner;
