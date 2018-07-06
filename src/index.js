import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";
import App from "./App";
import reducer from "./reducers"
///////// Создание стора редукс
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

////// отрисовка компонента
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
















// //////////////// Редьюсер
// const playlist = (state = [], action) => {
//     console.log(action)
//     if(action.type === 'ADD_TRACK'){
//         return [
//             ...state,
//             action.payload
//         ]
//     }
//     return state;
//   };

// ///////// Создание стора редукс
// const store = createStore(playlist);

// //// подписка на изменения стора
// store.subscribe(() => {
//   console.log("subscribe", store.getState());
// });

// ///создание диспатча
// store.dispatch({ type: "ADD_TRACK", payload: "Smell new song" });
// store.dispatch({ type: "ADD_TRACK", payload: "Smell second song" });

// store.dispatch({ type: "DELETE_TRACK", payload: "Smell old song" });
// ////////////////////////////////////////
