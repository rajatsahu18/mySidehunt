import React from 'react'
import {Link} from "react-router-dom"
import styles from "../Components/Styles/ProductTable.module.css"

const ProductTable = ( {product_name, price,id} ) => {
    console.log("product_name")
    return (
        <table className = {styles.table}>
            <tr>
                <td>{product_name}</td>
                <td>{price}</td>
                <td>
                    <Link style = {{textDecoration: "none"}} to = {`/productDetails/${id}`}> Show Product Details</Link>
                </td>
            </tr>
        </table>
    )
}

export { ProductTable }
