import "./Footer.css";
import CopyRight from "./CopyRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <>
    <footer className="footer">
        <div className="resources">
            <ul>
              <li><h3>Resources</h3></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Find a Store</a></li>
              <li><a href="#">Become a Member</a></li>
              <li><a href="#">Nike x NBA</a></li>
              <li><a href="#">Nike Journal</a></li>
              <li><a href="#">Site Feedback</a></li>
            </ul>
        </div>
        <div className="help">
            <ul>
              <li><h3>Help</h3></li>
              <li><a href="#">Get Help</a></li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Shipping and Delivery</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Order Cancellation</a></li>
              <li><a href="#">Payment Options</a></li>
              <li><a href="#">Gift Card Balance</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
        </div>

        <div className="company">
            <ul>
              <li><h3>Company</h3></li>
              <li><a href="#">About Nike</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Purpose</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
        </div>
        <div className="pro-disc">
            
            <ul>
              <li><h3>Promotion & Discount</h3></li>
              <li><a href="#">Student</a></li>
              <li><a href="#">Military</a></li>
              <li><a href="#">Teacher</a></li>
              <li><a href="#">First Responders & Medical Professionals</a></li>
              <li><a href="#">Birthday</a></li>
            </ul>
        </div>
        <div className="location">
        <FontAwesomeIcon icon={faGlobe} className="globe"/>  
            <h3>United States</h3>
        </div>

    </footer>
    <CopyRight/>

    </>

  );
}
export default Footer;
