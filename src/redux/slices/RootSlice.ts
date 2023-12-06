import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        author: "Author",
        title: "Title",
        ISBN_number: "ISBN Number",
        page_number: "Page Number",
        cover_type: "Cover Type",
    },
    reducers: {
        chooseAuthor: (state, action) => { state.author = action.payload},
        chooseTitle: (state, action) => { state.title = action.payload},
        chooseISBN_number: (state, action) => { state.ISBN_number = action.payload},
        choosePage_number: (state, action) => { state.page_number = action.payload},
        chooseCover_type: (state, action) => { state.cover_type = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseAuthor, chooseTitle, chooseISBN_number, choosePage_number, chooseCover_type} = rootSlice.actions