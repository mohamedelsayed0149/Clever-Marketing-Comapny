import React from 'react'
import "./Products.css"

function Products() {
    return (
        <section className="products">
          <div className="first_box">
           <img src="./images/product-1.png" alt=""/>
          </div>
          <div className="second_box">
            <div className="small_box">
            <span></span>
             <p>Top</p>
             <h2>Products</h2>
            </div>
            <div className="paragraph">
             <p>I struggled just to get out of bed. Every morning, the alarm clock would ring. I knew I should get up and deal but anxiety rushed in and I’d hit the snooze button instead. Here’s the thing.</p>
             <a href=" ">See More</a>
            </div>
          </div>
          <div className="third_box">
            <img src="./images/product-2.png" alt=""/>
          </div>
        </section>
    )
}

export default Products
