import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {username: 'coding addict'},
    theme: 'dracula'
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
            console.log('toggleTheme');
        }
    }
})

export const {loginUser, logoutUser, toggleTheme} = userSlice.actions

export default userSlice.reducer