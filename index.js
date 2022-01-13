// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
  cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
}

function appendCat(name) {
  let moreCats = [...cats, name];
  return moreCats;
}

function prependCat(name) {
  let moreCats = [name, ...cats];
  return moreCats;
}

function removeFirstCat(name) {
  let lessCats = cats.slice(1);
  return lessCats;
}

function removeLastCat(name) {
  let lessCats = cats.slice(0, cats.length - 1);
  return lessCats;
}
