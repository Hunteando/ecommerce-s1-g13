
import axios from 'axios';


export const getProductRequest = async () => 
   await axios.get("http://localhost:4000/api/products");

   export const getCustomProductRequest = async () => 
   await axios.get("http://localhost:4000/api/products/custom");


export const createProductRequest = async (product) => 
    await axios.post("http://localhost:4000/api/products", product)


