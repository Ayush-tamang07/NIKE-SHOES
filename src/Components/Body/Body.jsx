import "./Body.css";
import Card from "../Card/Card.jsx";

function Body() {
  return (
    <>
      <div className="container">
        <div className="side-bar">
          <div className="toogle">
            Pick Up Today
            <label className="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>

          <a href="#">Football</a>
          <a href="#">BasketBall</a>
          <a href="#">Running</a>
          <a href="#">Golf</a>
          <a href="#">Lifestyle</a>
          <a href="#">ACG</a>
          <a href="#">Walking</a>
          <a href="#">Boots</a>
          <a href="#">Nike By you</a>
          <a href="#">Training and Gym</a>
          <a href="#">Skateboarding</a>
          <a href="#">Track & Field</a>
          <a href="#">Soccer</a>
          <a href="#">Sandals & Slides</a>

          <div></div>
        </div>

        <div className="main">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
export default Body;
