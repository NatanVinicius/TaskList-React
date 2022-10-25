import * as C from './App.styles';
import { useState } from 'react';
import { Item } from './Types/Item'
import { ListItem } from './Components/ListItem';
import { AddItem } from './Components/AddItem';

function App () {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  };

  return (
    <div>
        <C.Container>
          <C.Area>
            <C.HeaderTitle>Lista de Tarefas</C.HeaderTitle>

            <AddItem onEnter={handleAddTask} />

            {list.map((item, index) => (
              <ListItem key={index} item={item} />
            ))}
          </C.Area>
        </C.Container>
    </div>
  )
};

export default App;