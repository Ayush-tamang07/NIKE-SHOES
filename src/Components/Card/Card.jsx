import "./Card.css";
function Card(props) {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <a href="#">
            <img
              className="card-image"
              src={props.img}
              alt="image"
              width={380}
            />
            <div className="justin">{props.cardMessage}</div>
            <div className="shoesName">{props.shoeName}</div>
            <div className="shoesType">{props.shoesType}</div>
            <div className="colors">{props.colors}</div>
            <h3 className="price">{props.price}</h3>
          </a>
        </div>
      </div>
    </>
  );
}
export default Card;
