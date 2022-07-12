import ProductData from "./productData.js";
import ProductList from "./productList.js";
import { loadHeaderFooter } from "./utils.js";

loadHeaderFooter();
const category = getParam('category');
const dataSource = new ProductData();
const listElement = document.querySelector(".product-list");

const prodList = new ProductList(category, listElement, dataSource);
prodList.init();