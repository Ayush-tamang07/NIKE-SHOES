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
          {/* <Card img  /> */}
          <Card
            cardMessage="Just In"
            img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4b35bbe4-0dae-4160-91c1-3ada6ca52406/converse-chuck-70-high-top-unisex-shoe-hMF44R.png"
            shoeName="Nike Pegasus 4"
            shoesType="Men's Road Running Shoes"
            colors="8 Colors"
            price="150"
          />
          <Card
            cardMessage="Just In"
            img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1f31a5fd-9f59-4331-8bd1-c8fabe073b4e/zoom-vomero-5-shoes-MgsTqZ.png"
            shoeName="Nike Pegasus 41 Blueprint"
            shoesType="Men's Road Running Shoes"
            colors="16 Colors"
            price="$140"
          />
          <Card
            cardMessage="Sustainable Materials"
            img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b9c52ab5-ed2b-41e2-ba82-c395efcbd1e6/dunk-low-mens-shoes-l12Bc1.png"
            shoeName="Nike Dunk Low"
            shoesType="Men's Shoes"
            colors="2 Colors"
            price="$125"
          />
          <Card
            cardMessage="Just In"
            img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4b35bbe4-0dae-4160-91c1-3ada6ca52406/converse-chuck-70-high-top-unisex-shoe-hMF44R.png"
            shoeName="Nike Pegasus 4"
            shoesType="Men's Road Running Shoes"
            colors="8 Colors"
            price="150"
          />
          <Card
            cardMessage="Just In"
            img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1f31a5fd-9f59-4331-8bd1-c8fabe073b4e/zoom-vomero-5-shoes-MgsTqZ.png"
            shoeName="Nike Pegasus 41 Blueprint"
            shoesType="Men's Road Running Shoes"
            colors="16 Colors"
            price="$140"
          />
          <Card
            cardMessage="Sustainable Materials"
            img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b9c52ab5-ed2b-41e2-ba82-c395efcbd1e6/dunk-low-mens-shoes-l12Bc1.png"
            shoeName="Nike Dunk Low"
            shoesType="Men's Shoes"
            colors="2 Colors"
            price="$125"
          />
          {/* <Card img="" shoeName="" shoesType="" colors="" price="" /> */}
        </div>
      </div>
    </>
  );
}
export default Body;
