import './Body.css'

function Body(){
    return(
        <>
        <div className='toogle'>
            Pick Up Today
        <label className='switch'>
                <input type="checkbox" />
                <span class="slider round"></span>
            </label>
        </div>
    

        <div className="container">
         
            <div className="side-bar">
                
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
                
                <div>
                    
                </div>
            </div>

            <div className="main">
                
                <div className="card">
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8fb34fe2-cc91-4865-9fa6-79b3b26b8ac7/pegasus-41-mens-road-running-shoes-7S90QB.png" alt="image" width={380}/>
                    <div className='justin'>Just In</div>
                    <div className='shoesName'>Nike Pegasus 41</div>
                    <div className='shoesType'>Men's Road Running Shoes</div>
                    <div className='colors'>8 Colors</div>
                    <div>$140</div>
                </div>
                <div className="card">
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8fb34fe2-cc91-4865-9fa6-79b3b26b8ac7/pegasus-41-mens-road-running-shoes-7S90QB.png" alt="image" width={380}/>
                    <div className='justin'>Just In</div>
                    <div className='shoesName'>Nike Pegasus 41</div>
                    <div className='shoesType'>Men's Road Running Shoes</div>
                    <div className='colors'>8 Colors</div>
                    <div>$140</div>
                </div>
                <div className="card">
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8fb34fe2-cc91-4865-9fa6-79b3b26b8ac7/pegasus-41-mens-road-running-shoes-7S90QB.png" alt="image" width={380}/>
                    <div className='justin'>Just In</div>
                    <div className='shoesName'>Nike Pegasus 41</div>
                    <div className='shoesType'>Men's Road Running Shoes</div>
                    <div className='colors'>8 Colors</div>
                    <div>$140</div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Body;