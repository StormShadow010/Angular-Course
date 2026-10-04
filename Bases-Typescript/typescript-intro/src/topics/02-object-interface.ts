const skills: string[] = ["Bash", "Counter", "Healing", "Invisibility"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string; // Optional property
}

const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ["Bash", "Counter"],
};

console.log(strider);

export {};
