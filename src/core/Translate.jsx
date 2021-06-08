import React, { useState } from "react"
import { useContext } from 'react'
import { useEffect } from 'react'
let initalState = {
    default: localStorage.getItem('lang') || 'en'
}

let Context = React.createContext(initalState)

export default function TranslateProvider({ children, translate }) {
    let [state, setState] = useState({ ...initalState, ...translate })

    function t(key) {
        return state?.[state.default]?.[key] || key
    }

    function selectLang(lang) {
        localStorage.setItem('lang', lang)
        setState({
            ...state,
            default: lang
        })
    }

    return <Context.Provider value={{ t, selectLang, lang: state.default }}>
        {children}
    </Context.Provider>
}
export function useTranslate() {
    let { t, selectLang } = useContext(Context)
    return {
        t,
        selectLang
    }
}