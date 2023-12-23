import { body, param } from "express-validator";

// Validates Body of the POST Request
export const createProduct = [
    body("name").exists().withMessage("name is missing").isString().withMessage("name should be string"),
    body("description").exists().withMessage("description is missing").isString().withMessage("description should be string")
]

// Validates Body of the PUT Request
export const updateProduct = [
    param("id").exists().withMessage("id is missing").isUUID().withMessage("id should be uuid"),
    body("name").isString().optional(),
    body("description").isString().optional()
]