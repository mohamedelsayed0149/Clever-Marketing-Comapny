import React from 'react'
import "./Products.css"
import Product1 from "./images/product-1.png";
import Product2 from "./images/product-2.png";


function Products() {
    return (
        <section className="products">
          <div className="first_box">
           <img src={Product1} alt=""/>
          </div>
          <div className="second_box">
            <div className="small_box">
            <span className="line"></span>
             <p>Top</p>
             <h2>Products</h2>
            </div>
            <div className="paragraph">
             <p>When it comes to bathroom and hygiene products and plastic
             products you would be pretty hard pressed to find the modern esign with high quality material and perfect price
             here is our top products for you to review.</p>
             <a href=" ">See More</a>
            </div>
          </div>
          <div className="third_box">
            <img src={Product2} alt=""/>
          </div>
        </section>
    )
}

export default Products
