// `nodes` contain any nodes you add from the graph (dependencies)
// `root` is a reference to this program's root node
// `state` is an object that persists across program updates. Store data here.
import { nodes, root, state } from 'membrane';

export async function sum({ args: { a, b } }) {
  return a + b;
}

export async function multiply({ args: { a, b } }) {
  return a * b;
}

export async function subtract({ args: { a, b } }) {
  return a - b;
}

export async function divide({ args: { a, b } }) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

export async function sqrt({ args: { a } }) {
  if (a < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(a);
}