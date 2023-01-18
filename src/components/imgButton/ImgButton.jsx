import React, {useState} from "react";
import SvgIcon from "../SvgIcon";
import styles from './styles.module.css'

function ImgButton(props) {
    const [color, setColor] = useState('black');

    return (
        <div 
            className={styles.imgbutton_container}
            onMouseEnter={() => setColor('white')}
            onMouseLeave={() => setColor('black')}
        >
            {
                props.iconId &&
                <div className={styles.icon_container}>
                    <SvgIcon 
                        iconId={props.iconId}
                        color={color}
                    />
                </div>
            }

            {
                props.count ? 
                <div
                    style={{color: color}}
                    className={styles.counter}
                >
                    {props.count}
                </div> :
                null
            }

            <div 
                style={{color: color}}
                className={styles.title}
            >
                {props.title}
            </div>
        </div>
    )
}

export default ImgButton