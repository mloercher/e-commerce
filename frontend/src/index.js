import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import productsReducer, { productsFetch } from './features/productsSlice'
import { productsApi } from './features/productsApi';
import cartReducer from './features/cartSlice'

// configureStore allows to combine all reducers, configure redux devtools
const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
   return (getDefaultMiddleware().concat(productsApi.middleware)) 
  }
})

// dispatching productsFetch action creator
store.dispatch(productsFetch())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
