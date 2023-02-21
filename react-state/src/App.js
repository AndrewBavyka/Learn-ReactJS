import { Component } from 'react';

import './App.css';
// Состояния в компонентах

// Пропсы внутри классовых компонентов
class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+++',
    };
  }

  nextYear = () => {
    // напрямую состояния менять нельзя
    // this.state.years++;
    console.log('+++')
    // this.setState({
    //   // years: ++this.state.years, - так делать не надо
    //   years: this.state.years + 1, //- так норм
    // });
    // Когда state(состояние) не зависит от прдыдущего то в таком случе мы просто передаем обьект
    // Если же наш state будет зависить напрямую от предыдущего состояния (например чтобы счетчик не сбился) то в таком случае передаем call-back функцию которая возвращает новый обьект сосотояния
    // При этом она получает в себя обьект состояния текущего и контекст вызова (this) будет убираться.
    this.setState(state => ({
      years: state.years + 1,
    }))
  }

  render() {
    const { name, surname, link } = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>

        <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
        <a href={link}>My profile</a>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name='Jonh' surname='Smith' link='vk.com' />
      <WhoAmI name='Alex' surname='Bavyka' link='telegram.com' />
    </div>
  );
}

export default App;