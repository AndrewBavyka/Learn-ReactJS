import { Component } from 'react';
import './App.css';



// Компоненты
// Как понять по какому принципу необходимо формировать компоненты?
// Если вы можете представить что этот компонент можете переписпользовать где-то в другой части приложения
// или уже существующий компонент стал уже слишком большим - то смело применяем этот приём
// Если внутри компонента начинает появляться какая-то логика, то мы должны его выразить в качестве отдельного компонента


const Header = () => {
  return <h2>Hello World!</h2>
}

// const Field = () => {
//   const holder = 'Enter here';
//   const styledField = {
//     width: '300px',
//   };
//   return <input
//     placeholder={holder}
//     type="text"
//     style={styledField} />
// }

function Btn() {
  const text = 'Log in';
  const logged = true;
  // const res = () => 'Log in';
  // Внутри элементов мы можем помещать другие элементы
  // const p = <p>Log in</p>
  return <button>{logged ? 'Enter' : text}</button>
}

// Важное правило: Для того чтобы классы работали правильно (как задуманно в React) 
// мы должны унаследовать какое то поведение от базового поведения

class Field extends Component {
  // В классах должен быть метод render который можем внутри себя что либо делать и после этого ключевое слово return
  render() {
    const holder = 'Enter here';
    const styledField = {
      width: '300px',
    };
    return <input
      placeholder={holder}
      type="text"
      style={styledField} />
  }

}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  );
}

export { Header };
export default App;
