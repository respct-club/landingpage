import React from 'react'
import styles from './styles.module.css';
import Link from 'next/link';
import {footerContent} from "../../data";

export default function index() {
    return (
        <div  className={styles.footer}>
            <div className={styles.upperfooter}> 

                {Object.keys(footerContent).map((keyName, i) => (
                    <div key={i} className={styles.upperfooterColumn}>
                        <div className={styles.upperfooterHeading}>{keyName}</div>
                        <br />
                        {Object.keys(footerContent[keyName]).map((valueName, i) => (
                            <div key={i}>
                                <div  className={styles.upperfooterLink} >
                                    <Link href={footerContent[keyName][valueName]}>
                                        <a target="_blank">{valueName}</a>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

            </div>

            <div className={styles.lowerfooter}> 
            <div className={styles.lowerfooterInner}>
            <div className={styles.lowerfooterLink}>
                <Link href="/">
                    <a>Respct</a>
                </Link>
            </div>
            <div className={styles.lowerfooterLink}>
                <Link href="/">
                    <a>Privacy Policy</a>
                </Link>
            </div>
            </div>
            </div>
        </div>
    )
}
