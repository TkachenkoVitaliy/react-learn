import React from "react";
import ImgButton from "../imgButton/ImgButton";
import styles from './styles.module.css';


function Header() {
    return (
        <div className={styles.header_container}>
            <div className={styles.header}>
                <ImgButton
                    count = "12"
                    title = "Корзина"
                    iconId = "basket"
                />
            </div>
        </div>
    )
}

export default Header