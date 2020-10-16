import React, {ChangeEvent, useState} from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
import {PATH} from "./Routes";

function Header() {
    const [checked, setChecked] = useState<boolean>(false);
    const isActive = (e: ChangeEvent<HTMLInputElement>) => {
        let newActiveValue = e.currentTarget.checked
        setChecked(newActiveValue)
    }

    const activeMenuClass = `${checked ? s.menuActive : s.menu}`

    return (
        <div className={s.wrapper}>
            <div className={activeMenuClass}>
                <label className={s.label}>
                    <input type={"checkbox"} onChange={isActive} className={s.checkbox}/>
                    <span className={s.fake}/>
                </label>
                <nav className={s.nav}>
                    <div className={s.item}>
                        <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.activeLink}>PreJunior</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to={PATH.JUNIOR} activeClassName={s.activeLink}>Junior</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.activeLink}>Junior+</NavLink>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;
