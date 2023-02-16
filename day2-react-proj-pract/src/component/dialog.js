import React from 'react'
import styles from "./dialog.module.css"




export default function Dialog(props) {
  return <>
    <button className={`${styles.whiteScreen} ${!(props.show) && styles.hidden}`}
        onClick={()=>{props.condt({
          show:false, msg:"",
        })}}>
        {props.msg}
    </button></>
}
