import { SEARCH_INPUT, DELETE_MOVIE, RATING_SEARCH, ADD_MOVIE, EDIT_MOVIE } from "../constants/actionsType";

const initialeState = {
  movieItems: [
    {
      id:1,
      title: "One Night in Istanbul",
      image:
        "https://upload.wikimedia.org/wikipedia/en/2/2e/ONII_Movie_Poster.jpg",
      rating: 5,
      trailer:"https://www.youtube.com/embed/kDehTEEoFnE"
    },
    {
      id:2,
      title: "Cukur",
      image:
        "https://m.mycima.tv/wp-content/uploads/2019/04/5c190c7d4aeaf-.jpg",
      rating: 4,
  trailer:"https://www.youtube.com/embed/kDehTEEoFnE"
    },
    {
      id:3,
      title: "Icerde",
      image:
        "https://upload.wikimedia.org/wikipedia/ar/3/36/%D9%85%D9%84%D8%B5%D9%82_%D9%81%D9%8A_%D8%A7%D9%84%D8%AF%D8%A7%D8%AE%D9%84.jpg",
      rating: 3,
      trailer:"https://www.youtube.com/embed/kDehTEEoFnE"
    },
    {
      title: "SAW 8",
      image:
        "https://teaser-trailer.com/wp-content/uploads/Saw-8-Jigsaw-Japanese-Poster.jpg",
      rating: 1,
      isLarge: false,
      id: 4,
      trailer:"https://www.youtube.com/embed/kDehTEEoFnE"
    },
    {
      id:5,
      title: "Joker",
      image:
        "https://media.senscritique.com/media/000018727645/source_big/Joker.jpg",
      rating: 2,
      trailer:"https://www.youtube.com/watch?v=rgXplohCw5o"
    }
  ],
  input_search:"",
  rate_search:1
};
export default function MovieReducers(
  state = initialeState,
  { type, payload }
) {
  switch (type) {
    case SEARCH_INPUT: {
      return {
        ...state,
        input_search:payload

      } ;
    }
    case DELETE_MOVIE:{
      return {
        ...state,
        movieItems:state.movieItems.filter(el=>el.id!==payload)
      }
    }
case RATING_SEARCH:{
 return {
  ...state,
  rate_search:payload
 } 

}
case ADD_MOVIE : {
  return {
    ...state,
    movieItems:[...state.movieItems,payload]

  }
}
case EDIT_MOVIE:{
  return{
    ...state,
    movieItems:state.movieItems.map(el=>
      el.id === payload.id ? payload :el
      )

  }
}
    default:
      return state;
  }
}
