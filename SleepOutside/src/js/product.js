import ProductData from "./productData.js";
import ProductDetails from "./productDetails.js";

import { getParam } from "./utils.js";
// import { getCartContents } from "./cart.js";

const dataSource = new ProductData("tents");
const productId = getParam("product");
// const cart = getCartContents;

const product = new ProductDetails(productId, dataSource);
product.init();

// let products = [];
// let cart = [];

// function setLocalStorage(key, data) {
//   localStorage.setItem(key, JSON.stringify(data));
// }

// function getLocalStorage(key) {
//   return JSON.parse(localStorage.getItem(key));
// }

// function getCartData() {
//   return getLocalStorage("so-cart") || [];
// }

// // add to cart button event handler
// function addToCart(e) {
//   const product = products.find((item) => item.Id === e.target.dataset.id);
//   cart.push(product);
//   setLocalStorage("so-cart", cart);
// }

// getCartData();
