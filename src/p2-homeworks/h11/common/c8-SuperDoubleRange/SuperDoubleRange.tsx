import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min?: number
    max?: number
    step?: number
    disable?: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        type,
        onChangeRange, value,
        onChange, className,min,max,step, disable,
        // min, max, step, disable, ...
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e); // сохраняем старую функциональность

        onChangeRange && onChangeRange([+e.currentTarget.value,+e.currentTarget.value]);
    }
    // сделать самому, можно подключать библиотеки

    return (
        <>
            <input
                type={"range"}
                onChange={onChangeCallback}


                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </>
    );
}

export default SuperDoubleRange;
