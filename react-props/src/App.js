import './App.css';

// Пример указания пропсов
// props - это обьект со всеми парметрами которые мы в него передадим
// !Если мы даже не создаем props он все равно будет существовать у компонента

// function WhoAmI(props) {
//   return (
//     <div>
//       <h1>My name is {props.name}, surname - {props.surname}</h1>
//       <a href={props.link}>My profile</a>
//     </div>
//   )
// }

// ДРУГОЙ СОВРЕМЕННЫЙ СИНТАКСИС

// ВАЖНАЯ ДЕТАЛЬ ПРО ПРОПСЫ
// Значение атрибутов которые мы передаем НЕ ИЗМЕНЯЕМЫЕ и идут только на чтение
// Чтобы динамически изменить значение props мы должны полностью перерисовать компонент
// ВАЖНОЕ ПРАВИЛО РЕАКТА !Компонент ни в коем случае не изменял свои пропсы!

function WhoAmI({ name, surname, link }) {
  return (
    <div>
      <h1>My name is {name()}, surname - {surname}</h1>
      <a href={link}>My profile</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <WhoAmI name={() => { return 'Jonh' }} surname='Smith' link='vk.com' />
      <WhoAmI name={() => { return 'Alex' }} surname='Bavyka' link='telegram.com' />
    </div>
  );
}

// Как называть пропсы?
// Есть правило что пропсы в первую очередь нужно называть так чтобы они имели смысл с точки зрения самого комнента в котором они находятся 
// Во вторую очередь уже тех компонентов которые его рендерят

export default App;