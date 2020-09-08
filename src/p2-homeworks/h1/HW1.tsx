import React from "react";
import Message from "./Message";

const messageData = {
    avatar: "https://i.pinimg.com/736x/c3/d7/85/c3d7852f50c1cb91986d4eaba6e614e2.jpg",
    name: "Артём",
    message: "npm start нажимал?",
    time: "22:00",
};

function HW1() {
    return (
        <div>
            homeworks 1
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    );
}

export default HW1;
