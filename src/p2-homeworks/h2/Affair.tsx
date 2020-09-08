import React from "react";
import {AffairType} from "./HW2";
import s from "./affair.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };

    return (
        <div className={s.title}>
            <span className={s.name}>{props.affair.name}</span>
            <span className={s.priority}>{props.affair.priority}</span>
            <SuperButton className={s.but} onClick={deleteCallback}>✘</SuperButton>
        </div>
    );
}

export default Affair;
