import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const onChangeRange = (value: number) => {
        setValue1(value)
    }

    const onChangeDoubleRange = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div>
            homeworks 11
            <div>
                <span>{value1}</span>
                <SuperRange onChangeRange={onChangeRange}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={onChangeDoubleRange}
                />
                <span>{value2}</span>
            </div>
        </div>
    );
}

export default HW11;
