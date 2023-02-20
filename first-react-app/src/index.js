import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const text = 'Hello World'

// Элементы не изменяемые. В Реакте чтобы изменить элемент мы его должны перерисовать на странице
// Тоесть на уровне кода мы что либо меняем -> элемент проходит через Virtual DOM -> 
// и только тогда отрисовывается на странице

// const elem = (
//   <div>
//     <h2>Текст: {text}</h2>
//     <button tabIndex="0">Click</button>
//     <input type="text" />

//   </div>
// );
// const elem = React.createElement('h2', {className: 'greetengs'}, 'Hello World!');

// Компоненты всегда должны быть написаны с большой буквы



root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

