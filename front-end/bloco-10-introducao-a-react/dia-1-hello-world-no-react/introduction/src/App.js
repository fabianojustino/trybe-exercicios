import React from 'react';
import './App.css';

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

class App extends React.Component {
  render () {
    return <ul>{tarefas.map(tarefa => Task(tarefa))}</ul>
  }
}

export default App;
