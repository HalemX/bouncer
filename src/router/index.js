import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import productsGrid from "../pages/ProductsGrid.vue";
import SingleProductVue from "@/pages/SingleProduct.vue";
import CheckOut from "@/pages/CheckOut.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/products",
    name: "products",
    component: productsGrid,
  },
  {
    path: "/productdetails",
    name: "singleProduct",
    component: SingleProductVue,
  },
  {
    path: "/checkout",
    name: "checkOut",
    component: CheckOut,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
