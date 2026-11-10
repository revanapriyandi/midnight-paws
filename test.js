import assert from "node:assert/strict";
import { scenes, startScene } from "./story.js";

for (const [id, scene] of Object.entries(scenes)) {
  for (const choice of scene.choices ?? []) {
    assert.ok(scenes[choice.next], `${id} points to missing scene ${choice.next}`);
  }
}

const reachable = new Set([startScene]);
const pending = [startScene];
while (pending.length) {
  const id = pending.pop();
  for (const choice of scenes[id].choices ?? []) {
    if (!reachable.has(choice.next)) {
      reachable.add(choice.next);
      pending.push(choice.next);
    }
  }
}

assert.deepEqual(
  [...reachable].sort(),
  Object.keys(scenes).sort(),
  "every scene must be reachable from the start"
);

const endings = new Set(Object.values(scenes).map((scene) => scene.ending).filter(Boolean));
assert.deepEqual(endings, new Set(["good", "bad", "secret"]));
console.log("Story graph is valid.");
