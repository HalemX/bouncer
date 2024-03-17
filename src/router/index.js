import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import AllProducts from "@/pages/AllProducts.vue";
import ProductsByCategory from "../pages/ProductsByCategory.vue";
import SingleProductVue from "@/pages/SingleProduct.vue";
import CartPage from "@/pages/CartPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/products",
    name: "allProducts",
    component: AllProducts,
  },
  {
    path: "/products/cat/:slug",
    name: "productsByCategory",
    component: ProductsByCategory,
  },
  {
    path: "/products/:id",
    name: "singleProduct",
    component: SingleProductVue,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
