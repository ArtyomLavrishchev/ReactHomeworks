import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./superRadio.module.css";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let item = e.currentTarget.value
        onChange && onChange(e)
        onChangeOption && onChangeOption(item)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + "-" + i}>
            <input
                type={"radio"}
                value={o}
                onChange={onChangeCallback}
                name={name}
                checked={value === o}
                className={s.radio}
            />
            <span className={s.fake}/>
            <span className={s.text}>{o}</span>
        </label>
    )) : [];

    return (
        <div className={s.item}>
            {mappedOptions}
        </div>
    );
}

export default SuperRadio;
