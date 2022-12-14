import type { Character } from './Location';

const CharacterCard = (props: Character) => {
  return (
    <div class="flex flex-col bg-armour-light rounded-lg p-4 w-60">
      <div class="flex flex-row justify-between	space-y-4">
        <h3 class="font-bold">{props.name}</h3>
        <span class="font-bold"> Lvl. {props.level}</span>
      </div>
      <span class="italic">{props.title}</span>
    </div>
  );
};

export default CharacterCard;
