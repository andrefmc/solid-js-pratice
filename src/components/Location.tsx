import { createSignal, For } from "solid-js";
import AddCharacter from "./AddCharacter";
import CharacterCard from "./CharacterCard";

interface LocationProps {
  name: string;
}

export type Character = {
  name: string;
  title: string;
  level: number;
};

const initialCharacters: Character[] = [
  { name: "Bob", title: "Lord Mage of Lazy", level: 1 },
  { name: "Cuddles", title: "Cerberus's Three Headed Cat", level: 1 },
];

const Location = (props: LocationProps) => {
  const [characters, setCharacters] = createSignal(initialCharacters);

  return (
    <div class="p-6 max-w-4xl mx-auto bg-soldier-grey rounded-xl flex items-start flex-col space-y-4">
      <div>
        <h1 class="font-bold text-lg">{props.name}</h1>
        <AddCharacter />
      </div>
      <div class="flex flex-row space-x-6">
        <For each={characters()}>
          {(character) => {
            return <CharacterCard {...character} />;
          }}
        </For>
      </div>
    </div>
  );
};

export default Location;
