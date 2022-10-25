import * as C from './styles';
import { useState, KeyboardEvent } from 'react';

type Props = {
    onEnter: (taskName: string) => void
};

export const AddItem = ( { onEnter }: Props ) => {

    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText != '') {
            onEnter(inputText);
            setInputText('');
        };
    };

    const addTask = () => {
        if(inputText != '') {
            onEnter(inputText);
            setInputText('');
        };
    };

    return (
        <C.Container>
            <div className='image' onClick={addTask}>+</div>
            <input 
                type="text"
                placeholder='Digite aqui sua tarefa'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    );
};