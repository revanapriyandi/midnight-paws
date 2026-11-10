import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { scenes, startScene } from "./story.js";

const readline = createInterface({ input, output });
let current = startScene;

console.log("MIDNIGHT PAWS");
console.log("A lost cat is trying to find its way home.\n");

try {
  while (!scenes[current].ending) {
    const scene = scenes[current];
    console.log(`\n${scene.text}`);
    scene.choices.forEach((choice, index) => {
      console.log(`${index + 1}. ${choice.text}`);
    });

    let answer;
    do {
      answer = await readline.question("> ");
      if (!/^[1-9]\d*$/.test(answer) || !scene.choices[Number(answer) - 1]) {
        console.log("Choose one of the numbered paths.");
      }
    } while (!scene.choices[Number(answer) - 1]);

    current = scene.choices[Number(answer) - 1].next;
  }

  const ending = scenes[current];
  console.log(`\n${ending.text}`);
  console.log(`\nEnding: ${ending.ending.toUpperCase()}`);
} finally {
  readline.close();
}
