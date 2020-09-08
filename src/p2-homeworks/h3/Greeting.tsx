import React, {KeyboardEvent} from "react";
import s from "./Greeting.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
{name, setNameCallback, addUser, error, totalUsers}) => {

    let inputClass = error ? s.error : s.textArea;
    let disabled = error && !name ? true : false;
    const addKeyPressed = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addUser()
        }
    }
    return <div className={s.greeting}>
            <SuperInputText value={name} onChange={setNameCallback} className={inputClass} error={error} onEnter={addUser}/>
            <div className={s.button}>
            <SuperButton red={!!error} onClick={addUser}>Add</SuperButton>
            <span>{totalUsers}</span>
            </div>
        </div>
}

export default Greeting;

