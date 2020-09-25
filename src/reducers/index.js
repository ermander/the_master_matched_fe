export const mainReducer = (state, action) =>  {
    switch(action.type){
        case "FILTRO_SPORT":
            return{
                ...state,
                filtro_sport: state.filtro_sport 
            }

        case "FILTRO_MERCATO":
            return{
                ...state
            }    
        
        case "FILTRO_DATA":
            return{
                ...state
            }

        case "FILTRO_LIQUIDITA":
            return{
                ...state
            }

        case "FILTRO_QUOTA_MIN_O_MAX":
            return{
                ...state
            }

        case "FILTRO_QUOTA_MIN_O_MAX":
            return{
             ...state
        }

        case "FILTRO_RATING_RIMBORSO":
            return{
                ...state
            }

        default: 
            return {
                ...state
            }
    }
}