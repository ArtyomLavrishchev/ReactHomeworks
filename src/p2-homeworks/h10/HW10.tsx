import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, LoadingType} from "./bll/loadingReducer";
import preloader from "../../assets/images/preloader.png"
import s from "./HW10.module.css"

function HW10() {
    const state = useSelector<AppStoreType, LoadingType>(state => state.loading)
    const dispatch = useDispatch()
    const loading = state.loading;

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log("loading...");
    };

    return (
        <div>
            homeworks 10
            <div className={s.item}>
                {loading
                    ? (
                        <div><img src={preloader} alt={"preloader"}/></div>
                    ) : (
                        <div>
                            <SuperButton style={{"width": "80px", "height": "80px", "borderRadius": "50%"}}
                                         onClick={setLoading}>set loading</SuperButton>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default HW10;
