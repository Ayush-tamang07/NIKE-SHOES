import "./Footer.css";
function Footer() {
  return (
    <div className="container">

      <div className="resources">
        <h5>Resources</h5>
        <div className="resources-item">
            <ul>
                <li><a href="#">Gift Cards</a></li>
                <li><a href="#">Find a Store</a></li>
                <li><a href="#">Become a Member</a></li>
                <li><a href="#">Nike x NBA</a></li>
                <li><a href="#">Nike Journal</a></li>
                <li><a href="#">Site Feedback</a></li>
            </ul>
        </div>

      </div>

      <div className="help">
        <h5>Help</h5>
      </div>

      <div className="company">
        <h5>Company</h5>
      </div>

      <div className="promotion-discount">
        <h5>Promotions & discount</h5>
      </div>

    </div>
  );
}
export default Footer;
