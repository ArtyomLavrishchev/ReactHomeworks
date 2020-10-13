import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./HW8.module.css"

export type PeopleType = {
    _id: number
    name: string
    age: number
}
export type InitialStateType = Array<PeopleType>

const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map((p: PeopleType) => (
        <div key={p._id}  className={s.peoples}>
            <span>{p.name}</span><span>{`-${p.age}`}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: 18}))

    return (
        <div>
            homeworks 8
            <div className={s.item}>
                    {finalPeople}
                <div className={s.buttons}>
                    <SuperButton onClick={sortUp}>sort up</SuperButton>
                    <SuperButton onClick={sortDown}>sort down</SuperButton>
                    <SuperButton onClick={checkAge}>check age</SuperButton>
                </div>
            </div>
        </div>
    );
}

export default HW8;
