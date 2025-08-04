// import { createContext, useContext, useEffect, useReducer } from "react";

// const FavContext = createContext()

// const FavReducer = (state, action) => {
//     switch (action.type) {
//         case "ADDFV":
//             const existProduct = state.find(p => p.id === action.product.id) 
           
//             if (existProduct) {
//                 return state.map(p => p.id === action.product.id ? {...p, quantity: p.quantity + 1} : p)
//             }

//             return [...state, {...action.product, quantity: 1}]   

//         case "INCREASEFV":
//             return state.map(p => p.id === action.product.id ? {...p, quantity: p.quantity + 1} : p)


//         case "INCREASEFV":
//             return state.map(p => p.id === action.product.id ? {...p, quantity: p.quantity - 1} : p)

//         case "REMOVEFV":
//             return state.filter(p => p.id !== action.id)

//         case "UPDATEFV":
//             return action.product;
//         default:
//             return state;
//     }
// }

// export function FavProvider({children}) {

//     const initFAV = () => {
//         const favLS = localStorage.getItem("fav")
//         return favLS ? JSON.parse(favLS) : []
//     }

//     const [fav, dispatch] = useReducer(FavReducer, [], initFAV)

//     useEffect(() => {
//         localStorage.setItem("fav", JSON.stringify(fav))

//     }, [fav])

//     return (
//         <FavContext.Provider value={{fav, dispatch}}>
//             {children}
//         </FavContext.Provider>
//     )
// }

// export const useFav = () => useContext(FavContext)