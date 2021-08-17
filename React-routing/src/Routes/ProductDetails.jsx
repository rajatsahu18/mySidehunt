import React from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'
import styles from "../Components/Styles/ProductDetails.module.css"

const ProductDetails = () => {

    const [ product, setProduct] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [isError,, setIsError] = React.useState(false)

    const {id} = useParams()

    const getProduct = () => {

        setIsLoading(true)
        axios.get(`https://json-server-products.herokuapp.com/data/${id}`)
        .then((res) => {
            setProduct(res.data)  
        })
        .catch((err) => {
            setIsError(true)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }
    React.useEffect(() => {
        getProduct()
    }, []);

    const {product_name, product_details} = product
    return isLoading ? (
        <div>...loading</div>
    ) : isError ? (
        <div>error</div>
    ) : (
        <div className = {styles.details}>
            <h4>Product Name: {product_name}</h4>
            <p>Description: {product_details}</p>
            <Link style = {{textDecoration: "none", border : "1px solid green", borderRadius: "5px", padding: "5px", background : "green", color : "white" }} to = "/allproducts" > Back To All Product Page</Link>
        </div>
    )
}

export default ProductDetails
