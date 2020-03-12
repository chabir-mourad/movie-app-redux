import { SEARCH_INPUT, DELETE_MOVIE,RATING_SEARCH, ADD_MOVIE, EDIT_MOVIE } from "../constants/actionsType";






export const search_input =payload=>({
type : SEARCH_INPUT,
payload
})


export const delete_movie =payload=>({
    type : DELETE_MOVIE,
    payload
    })
    export const rating_search =payload=>({
        type :RATING_SEARCH,
        payload
    })
    export const add_movie =payload=>({
        type :ADD_MOVIE,
        payload
    })
    export const edit_movie =payload=>({
        type :EDIT_MOVIE,
        payload
    })