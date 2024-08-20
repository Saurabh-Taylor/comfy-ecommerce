import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";



const themes ={
    winter:"winter",
    dracula:"dracula"
}

const getUserFromLocalStorage = ()=>{
    return JSON.parse(localStorage.getItem("user")) || null ;
}

const getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem('theme') || themes.winter;
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
  };

const initialState  = {
    user:getUserFromLocalStorage(),
    theme:getThemeFromLocalStorage()
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            const user  = {...action.payload.user ,  token:action.payload.jwt}
            state.user = user
            localStorage.setItem("user" , JSON.stringify(user))
        },
        logout(state) {
            state.user = null;
            localStorage.removeItem("user")
            toast.success("logout Successfully")
        },
        toggleTheme(state) {
            const {winter , dracula} = themes
            state.theme = state.theme === dracula ? winter : dracula
            document.documentElement.setAttribute("data-theme",state.theme)
            localStorage.setItem("theme" , state.theme)
        }

    }
})

export const {toggleTheme , login , logout} = userSlice.actions

export default userSlice.reducer