import React from 'react'
import styles from "./dialog.module.css"




export default function Dialog(props) {
  return <>
    <button className={`${styles.whiteScreen} ${!(props.show) && styles.hidden}`}
      onClick={() => {
        props.condt({
          show: false, msg: "",
        })
      }}>
      <div className={styles.innerMsg}>
        <h3 className={{ opacity: 1 }}>{props.msg}</h3>

      </div>
    </button></>
}
