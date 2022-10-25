import * as C from './styles';
import { Item } from '../../Types/Item'
import { useState } from 'react';

type Props = {
    item: Item
}

export const ListItem = ( { item }: Props ) => {

    const [isDone, setisDone] = useState<boolean>(item.done);

    return (
        <C.Container done={isDone}>
            <input 
                type="checkbox" 
                checked={isDone}
                onChange={e => setisDone(e.target.checked)}
            />
            <label>{item.name}</label>
        </C.Container>
    );
};
