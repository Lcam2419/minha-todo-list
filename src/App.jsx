import './App.css';
import { useState } from 'react';

function App() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    if (tarefa.trim() === "") {
      return;
    }

    setTarefas([
      ...tarefas,
      {
        texto: tarefa,
        concluida: false
      }
    ]);

    setTarefa("");
  }

  function excluirTarefa(index) {
    const novasTarefas = tarefas.filter((_, i) => i !== index);

    setTarefas(novasTarefas);
  }

  function concluirTarefa(index) {
    const novasTarefas = tarefas.map((tarefa, i) => {
      if (i === index) {
        return {
          ...tarefa,
          concluida: !tarefa.concluida
        };
      }

      return tarefa;
    });

    setTarefas(novasTarefas);
  }

  return (
    <div className="App">
      <h1>Minha lista de tarefas 📋</h1>

      <input
        type="text"
        placeholder="Digite sua tarefa"
        value={tarefa}
        onChange={(evento) => setTarefa(evento.target.value)}
      />

      <button onClick={adicionarTarefa}>
        Adicionar
      </button>

      <h2>Tarefas</h2>

   <ul>
  {tarefas.map((tarefa, index) => (
    <li
      key={index}
      style={{
        textDecoration: tarefa.concluida ? "line-through" : "none"
      }}
    >
      {tarefa.texto}

      <button onClick={() => concluirTarefa(index)}>
        Concluir
      </button>

      <button onClick={() => excluirTarefa(index)}>
        Excluir
      </button>
    </li>
  ))}
</ul>
    </div>
  );
}

export default App;




