import React from 'react'
import './portfolio.scss'
function Portfolio() {
    return (
        <div className='port' id='port'>
        <h1>Portfolio</h1>
        <h2>My ongoing projects</h2>
        <h2>#1</h2><b>Business Start site</b>
        <div id='first'>
            <img src={require('./startup.png')} alt="" />
<div> 
    <h3>Description</h3>
    <p>This is a website designed  by me.I did create the website purposely to help
those who are confuse about how they should start their Business with little amount they are
holding.This website contains five buttons and each links to different page with different 
type of business.

       </p>
      

</div>


        </div>
      <h2>#2</h2>  <b>Transport E-commerce site</b>
        <div className='second'>
     
        <div> 
    <h3>Description</h3>
    <p>This is another my created E-commerce website.
        This website contains only transportation machines that you can buy one
        to save your money from tropping in one taxi to another.
        I intentionally create this website just to show my skills
        on how to create  an e-commerce site.In conclution let's
        check  the site for more details. 
       </p>
      
</div>
<img src={require('./ecommerce.png')} alt="" />
        </div>
        <h2>#3</h2> <b>Customers Records App</b>
        <div className='third'>
        <img src={require('./records.png')} alt="" />
        <div> 
    <h3>Description</h3>
    <p>This is a records app that helps track your customers whether
        you are a CEO or store keeper. This app contains three divisions
        the left side contains customer informations for instance where to enter
        customer name,date and his cost.The right side also contains investor informations similarly
        to the customers.The middle side gives you the income of customers and investors.Also below
        them is total income shown. Please let's check this lovely app.
      </p>
</div>

        </div>
       
        </div>
    )
}

export default Portfolio;
