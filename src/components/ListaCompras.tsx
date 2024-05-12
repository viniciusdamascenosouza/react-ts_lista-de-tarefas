import { useEffect, useState } from "react";
import styled from "styled-components";

// Styled-components

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  padding-left: 10px;
  font-size: 1.7em;
  color: #f27321;
  background-color: #fff;
`;

const Main = styled.body`
  display: flex;
  justify-content: center;
  background-image: url("/public/background_inter.png");
  background-color: #ff9c00;
  /* background-repeat: no-repeat; */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  max-width: 100%;
  padding: 2em;
`;

const Input = styled.input`
  color: #000000;
  padding: 1em 3em;
  background-color: #eeeeee;
  border-radius: 8px;
  border: none;
`;

const List = styled.ul`
  display: flex;
  text-align: ce;
  flex-wrap: wrap;
  gap: 1.5em 1em;
`;

const ButtonOne = styled.button`
  border: none;
  padding: 1em 3em;
  font-size: 1em;
  font-weight: 600;
  border-radius: 8px;
  background-color: #ff9c00;
  border: 1px solid #eee;
  color: #fff;

  &:hover {
    color: #ff9c00;
    border: 1px solid #ff9c00;
    background-color: #eee;
  }
`;

const Task = styled.li`
    list-style: none;
    color: white;

    display: flex;
    align-items: center;
    column-gap: .3em;
`;

const ButtonTwo = styled(ButtonOne)`
    padding: .5em 1.5em;
`

const ListaCompras = () => {
  const [tarefas, setTarefas] = useState<string[]>([]);
  const [novaTarefa, setNovaTarefa] = useState<string>("");

  const adicionarTarefa = () => {
    if (novaTarefa !== "") {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa("");
    }
  };

  const removerTarefa = (index: number) => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  };

  useEffect(() => {
    document.title = `Tarefas totais: ${tarefas.length}`;
  }, [tarefas]);

  return (
    <Container>
      <Title>ToDoHub</Title>
      <Main>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            adicionarTarefa();
          }}
        >
          <Input
            placeholder="Digite aqui sua nova tarefa"
            type="text"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
          />

          <ButtonOne type="submit">Adicionar tarefa</ButtonOne>
        </Form>

        <List>
          {tarefas.map((tarefa, index) => (
            <Task key={index}>
              {tarefa}
              <ButtonTwo onClick={() => removerTarefa(index)}>Remover</ButtonTwo>
            </Task>
          ))}
        </List>
      </Main>
    </Container>
  );
};

export default ListaCompras;
