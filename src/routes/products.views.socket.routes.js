//@ts-check
import productManager from "../services/ProductManager.js";
import express from "express";
export const routerViewsSocketProducts = express.Router();

routerViewsSocketProducts.use(express.urlencoded({ extended: true }));
routerViewsSocketProducts.use(express.json());

routerViewsSocketProducts.get("/", async (req, res) => {
    const products = await productManager.getProducts();

    return res.render("real-time-products", {
        title: "All productos in real time",
    });
});
