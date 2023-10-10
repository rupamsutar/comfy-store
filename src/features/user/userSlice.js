import { createSlice } from "@reduxjs/toolkit"

const themes = {
    winter: 'winter',
    dracula: 'dracula'
  }
  
  const getLocalStorageTheme = () => {
    const theme = localStorage.getItem('theme') || themes.winter;
    document.documentElement.setAttribute('data-theme', theme);
    return theme
  }

const initialState = {
    user: {username: 'coding addict'},
    theme: getLocalStorageTheme()
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            console.log('login')
        },

        logoutUser: (state) => {
            console.log('logout')
        },

        toggleTheme: (state) => {
            const {dracula, winter} = themes;
            state.theme = state.theme === dracula ? winter : dracula;
            document.documentElement.setAttribute('data-theme' , state.theme);
            localStorage.setItem('theme', state.theme);
            
        }
    }
})

export const {loginUser, logoutUser, toggleTheme} = userSlice.actions

export default userSlice.reducer