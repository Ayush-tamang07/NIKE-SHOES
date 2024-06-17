import "./Card.css";
function Card() {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <a href="#">
            <img
              className="card-image"
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4b35bbe4-0dae-4160-91c1-3ada6ca52406/converse-chuck-70-high-top-unisex-shoe-hMF44R.png"
              alt="image"
              width={380}
            />
            <div className="justin">Just In</div>
            <div className="shoesName">Nike Pegasus 41</div>
            <div className="shoesType">Men's Road Running Shoes</div>
            <div className="colors">8 Colors</div>
            <h3>$150</h3>
          </a>
        </div>
        <div className="card">
          <a href="#">
            <img
              className="card-image"
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4b35bbe4-0dae-4160-91c1-3ada6ca52406/converse-chuck-70-high-top-unisex-shoe-hMF44R.png"
              alt="image"
              width={380}
            />
            <div className="justin">Just In</div>
            <div className="shoesName">Nike Pegasus 41</div>
            <div className="shoesType">Men's Road Running Shoes</div>
            <div className="colors">8 Colors</div>
            <h3>$150</h3>
          </a>
        </div>
        <div className="card">
          <a href="#">
            <img
              className="card-image"
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4b35bbe4-0dae-4160-91c1-3ada6ca52406/converse-chuck-70-high-top-unisex-shoe-hMF44R.png"
              alt="image"
              width={380}
            />
            <div className="justin">Just In</div>
            <div className="shoesName">Nike Pegasus 41</div>
            <div className="shoesType">Men's Road Running Shoes</div>
            <div className="colors">8 Colors</div>
            <h3>$150</h3>
          </a>
        </div>
      </div>
    </>
  );
}
export default Card;
