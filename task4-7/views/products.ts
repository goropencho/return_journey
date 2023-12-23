import { randomUUID } from "crypto";

type Product = {
    id:string,
    name: string,
    description: string
}

let products: Product[] = []

const getAllProducts = (req, res) => {
    return res.status(200).json(products);
}

const getProductById = (req, res) => {
    let {id} = req.params;
    let product = products.find(obj => obj.id === id)
    if(!product){
        return res.status(404).json({
            message: "Product not found"
        })
    }
    return res.status(200).json(product);
}

const updateProductById = ( input, res) => {
    let product = products.findIndex(obj => obj.id === input.id)
    if(product == -1){
        return res.status(404).json({
            message: "Product not found"
        })
    }
    products[product] = {...products[product], ...input}
    return res.status(200).json(products[product]);
}

const deleteProductById = (req, res) => {
    let {id} = req.params;
    let product = products.findIndex(obj => obj.id === id)
    if(product == -1){
        return res.status(404).json({
            message: "Product not found"
        })
    }
    products.splice(product, 1);
    return res.status(204).send();
}

const createProduct = (product:any ,res:any) => {
    const id = randomUUID();
    const data = {id: id,...product}
    products.push(data);
    return res.status(201).send(data);
}


module.exports = {
    createProduct,
    deleteProductById,
    updateProductById,
    getProductById,
    getAllProducts
}