import React from "react";
import ProductCard from "../product/ProductCard";
import styles from "./styles.module.css"

function ProductList(props) {
    return (
        <div className={styles.product_list}>
            {
                props.items.map(item => <ProductCard item={item}/>)
            }
        </div>
    )
}

export default ProductList