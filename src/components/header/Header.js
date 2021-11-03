// import React, { useState } from 'react';
// import data from '../data/Data';
// import { Link } from 'react-router-dom';
// import Home from '../home/Home';
// import './Header.css';

// const Header = ({ cartItems }) => {


//     const [itemCount, setItemCount] = useState(null);
//     const { productItems } = data;
//     const cartItemsCount = cartItems.reduce((price, item) => price + item.quantity, 0);

//     return (
//         <header className="header">
//             <div>
//                 <h1 className="logo_title">
//                     <Link to="/" className="logo">
//                         <span style={{color: "#f54100"}}>S</span>
//                         <span style={{color: "#fa612a"}}>o</span> 
//                         <span style={{color: "#ff7b4b"}}>g</span> 
//                         <span style={{color: "#ff8e65"}}>i</span> 
//                         <span style={{color: "#ff9b76"}}>n</span> 
//                         <span style={{color: "#ffa889"}}>b</span> 
//                         <span style={{color: "#ffb89e"}}>0</span> 
//                         <span style={{color: "#ffcab7"}}>y</span> 
//                         <span style={{color: "#ffdbcd"}}>e</span> 
//                         <span style={{color: "#ffeae2"}}>v</span>
//                         &nbsp;
//                         <span style={{color: "#f54100"}}>O</span>
//                         <span style={{color: "#ff7b4b"}}>y</span>
//                         <span style={{color: "#ff9b76"}}>b</span> 
//                         <span style={{color: "#ffa889"}}>e</span> 
//                         <span style={{color: "#ffdbcd"}}>k</span> 
//                     </Link>
//                 </h1>
//             </div>
//             <div className="header_links">
//                 <ul>
//                     <li>
//                         <Link to="/productall">Product All</Link>
//                     </li>
//                 </ul>
//                 <ul>
//                     <li>
//                         <Link to="/signup">Sign Up</Link>
//                     </li>
//                 </ul>
//                 <ul className="cart_co">
//                     <li>

//                         <Link className="cart cat" to="/cart">
//                             Cart
//                             {itemCount ? 0
//                                 :
//                                 <span className="item_count">{cartItemsCount}</span>
//                             }
//                         </Link>
//                     </li>
//                 </ul>
//             </div>

//         </header>
//     )
// }

// export default Header
