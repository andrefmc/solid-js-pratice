import { createSignal, For, Show } from 'solid-js';
import AddCharacter from './AddCharacter';
import CharacterCard from './CharacterCard';

interface LocationProps {
  name: string;
}

export type Character = {
  name: string;
  title: string;
  level: number;
};

const initialCharacters: Character[] = [
  { name: 'Bob', title: 'Lord Mage of Lazy', level: 1 },
  { name: 'Cuddles', title: "Cerberus's Three Headed Cat", level: 1 },
];

const Location = (props: LocationProps) => {
  const [characters, setCharacters] = createSignal(initialCharacters);
  const [addCharacterIsOpen, setAddCharacterIsOpen] = createSignal(false);

  const totalCharacters = () => characters().length;

  return (
    <div class="p-6 max-w-4xl mx-auto bg-soldier-grey rounded-xl flex items-start flex-col space-y-4">
      <div class="flex flex-row justify-between w-full ">
        <h1 class="font-bold text-lg">{props.name}</h1>
        <Show
          when={addCharacterIsOpen()}
          fallback={
            <button class="font-bold text-xl" onClick={() => setAddCharacterIsOpen(!addCharacterIsOpen())}>
              {' '}
              +{' '}
            </button>
          }
        >
          <AddCharacter setCharacters={setCharacters} />
        </Show>
      </div>
      <div class="flex flex-row gap-6 flex-wrap">
        <For each={characters()}>
          {character => {
            return <CharacterCard {...character} />;
          }}
        </For>
      </div>
      <span>Character's in location: {totalCharacters}</span>
    </div>
  );
};

export default Location;
