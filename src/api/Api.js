import axios from "axios"

export async function productsData (){
    const products = await axios.get("https://fakestoreapi.com/products")

    return products

   /* fetch("https://fakestoreapi.in/api/products")
    .then(res => res.json())
    .then(res =>{
        return res
    } )*/

}