import './Footer.css'
function CopyRight(){
    return(
        <div className="copyright-information">
          <li><a href="#">&copy; {new Date().getFullYear()} Nike, Inc. All Rights Reserved</a></li>
          <li><a href="#">Guide</a></li>
          <li><a href="#">Terms of Sale</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Nike Privacy Policy</a></li>
          <li><a href="#">Your Privacy Policy</a></li>
          <li><a href="#">CA Supply Chains Act</a></li>
      </div>
    );
}
export default CopyRight;