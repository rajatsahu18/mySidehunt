import React from 'react'
import axios from "axios"
import { ProductTable } from './ProductTable'

const AllProducts = () => {

    const [ product, setProduct] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [isError,, setIsError] = React.useState(false)

    const getProducts = () => {
        setIsLoading(true)
        axios.get(`https://json-server-products.herokuapp.com/data`)
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
        getProducts();
    }, [])

    return  isLoading ? (
        <div>...loading</div>
    ) : isError ? (
        <div>something went wrong</div>
    ) : (
        <div>
            {product ?.map((item) => (
                <ProductTable {...item} key = {item.id}  />
            ))}
        </div>
    )
}

export default AllProducts
