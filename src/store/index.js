import { createStore } from "redux"
import { mainReducer } from "../reducers/index"

const initialState = {

    // Filtro modale oddsmatcher
    filtro_sport: "",
    filtro_sport: "",
    filtro_data: "",
    filtro_liquidita: "",
    filtro_quota_min: "",
    filtro_quota_max: "",
    filtro_rimborso_punta_stake: "",
    filtro_rimborso_bonus_stake: ""
}

export default function configureStore() {
    return createStore(mainReducer, initialState, 
        // Just for the redux tool extantion
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}