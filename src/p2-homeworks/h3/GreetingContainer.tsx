import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string>("");

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setError("")
        setName(e.currentTarget.value);
    };
    const addUser = () => {
        addUserCallback(name)
        setName("")
        if (name) {

            alert(`Hello ${name} !`)
        } else {
            setError("Enter your name!")
        }
    };


    const totalUsers = users.length;

    return (
        <div>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />

        </div>
    );
}

export default GreetingContainer;
