import { createSignal, JSX, Setter } from 'solid-js';
import type { Character } from './Location';

interface AddCharacterProps {
  setCharacters: Setter<Character[]>;
}

const emptyCharacter: Character = { name: '', title: '', level: 1 };

const AddCharacter = (props: AddCharacterProps) => {
  const [newCharacter, setNewCharacter] = createSignal(emptyCharacter);

  const addCharacter: JSX.EventHandler<HTMLButtonElement, MouseEvent> = event => {
    event.preventDefault();
    props.setCharacters(characters => [...characters, newCharacter()]);
    setNewCharacter(emptyCharacter);
  };

  return (
    <form class="flex flex-col gap-4">
      <div class="flex flex-row justify-between w-60 gap-2">
        <label for="name">Name</label>
        <input
          id="name"
          value={newCharacter().name}
          placeholder="Jon Doe"
          onInput={e => {
            setNewCharacter({ ...newCharacter(), name: e.currentTarget.value });
          }}
        />
      </div>
      <div class="flex flex-row justify-between w-60 gap-2">
        <label for="title">Title</label>
        <input
          id="title"
          value={newCharacter().title}
          placeholder="The Master of Unkown"
          onInput={e => {
            setNewCharacter({ ...newCharacter(), title: e.currentTarget.value });
          }}
        />
      </div>
      <div class="flex flex-row justify-between w-60 gap-2">
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
