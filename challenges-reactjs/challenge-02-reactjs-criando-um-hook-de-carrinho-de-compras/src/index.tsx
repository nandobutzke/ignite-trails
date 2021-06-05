import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model } from 'miragejs';

import reportWebVitals from './reportWebVitals';

createServer({
  models: {
    product: Model,
    stock: Model
  },

  seeds(server) {
    server.db.loadData({
      products: [

      ]
    })
  },

  routes() {
    this.namespace = '';

    this.get('/products', () => {
      return this.schema.all('product')
    })

    this.post('/products', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      
      return schema.create('product', data);
    })

    this.get('/stock', () => {
      return this.schema.all('stock')
    })

    this.post('/stock', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      
      return schema.create('stock', data);
    })
  },


});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
