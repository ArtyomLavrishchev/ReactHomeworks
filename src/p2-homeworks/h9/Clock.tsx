import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./HW9.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            let newDate = new Date()
            setDate(newDate)
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    const stringTime = date ? date.toTimeString().replace(/ .*/, '') : "Time"; // fix with date
    const stringDate = date ? date.toDateString().replace(/... */, '') : "Date"; // fix with date

    return (
        <div>
            <div className={s.date}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                    <span>{stringTime}</span>
                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>
            <div className={s.buttons}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    );
}

export default Clock;
