import React from 'react';
import './App.css';

class App extends React.Component {
  render () {
    return <ul>{tarefas.map(tarefa => Task(tarefa))}</ul>
  }
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

export default App;
