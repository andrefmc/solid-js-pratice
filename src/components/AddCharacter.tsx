import { createSignal, JSX, Setter } from 'solid-js';
import type { Character } from './Location';

interface AddCharacterProps {
  setCharacters: Setter<Character[]>;
}

const emptyCharacter: Character = { name: '', title: '', level: 0 };

const AddCharacter = (props: AddCharacterProps) => {
  const [newCharacter, setNewCharacter] = createSignal(emptyCharacter);

  const addCharacter: JSX.EventHandler<HTMLButtonElement, MouseEvent> = event => {
    event.preventDefault();
    props.setCharacters(characters => [...characters, newCharacter()]);
    setNewCharacter(emptyCharacter);
  };

  return (
    <form>
      <div>
        <label for="name">Name</label>
        <input
          id="name"
          value={newCharacter().name}
          onInput={e => {
            setNewCharacter({ ...newCharacter(), name: e.currentTarget.value });
          }}
        />
      </div>
      <div>
        <label for="title">Title</label>
        <input
          id="title"
          value={newCharacter().title}
          onInput={e => {
            setNewCharacter({ ...newCharacter(), title: e.currentTarget.value });
          }}
        />
      </div>
      <div>
        <label for="level">Level</label>
        <input
          id="level"
          type="number"
          value={newCharacter().level}
          onInput={e => {
            setNewCharacter({ ...newCharacter(), level: e.currentTarget.valueAsNumber });
          }}
        />
      </div>
      <button type="submit" onClick={addCharacter}>
        Add Character
      </button>
    </form>
  );
};

export default AddCharacter;
