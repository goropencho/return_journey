import express from "express";
const router = express.Router();
import { matchedData, param, validationResult } from 'express-validator';
import { createProduct, updateProduct } from '../validations/products';
const productView = require('../views/products');


router
    .post("/", createProduct, (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array().map(err => { return { message: err.msg } })
            })
        }
        return productView.createProduct(matchedData(req), res);
    })

    .get("/", (req, res) => {return productView.getAllProducts(req, res)})

    .get("/:id", param("id").exists().isUUID().withMessage("id must be a uuid"), (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array().map(err => { return { message: err.msg } })
            })
        }
        return productView.getProductById(req, res);
    })

    .put("/:id", updateProduct, (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array().map(err => { return { message: err.msg } })
            })
        }
        return productView.updateProductById(matchedData(req), res);
    })

    .delete("/:id", param("id").exists().isUUID().withMessage("id must be a uuid"), (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array().map(err => { return { message: err.msg } })
            })
        }
        return productView.deleteProductById(req, res);
    })



module.exports = router;