import React from "react";
import styles from "./styles.module.css"

function ProductCard(props) {
    return (
        <div className={styles.card_container}>
            <div className={styles.card}>
                <div className={styles.card_title}>
                    <span className={styles.text}>{props.item.name.toUpperCase()}</span>
                </div>
                <img className={styles.card_img}
                    src="https://via.placeholder.com/150.png"
                    alt="placeholder"
                />
                <div className={styles.card_price}>
                    <span className={styles.text}>{props.item.price}</span>
                    <span className={styles.text}> ₽</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard