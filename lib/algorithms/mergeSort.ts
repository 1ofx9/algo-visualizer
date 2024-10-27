import type { AnimationArrayType } from "../types";

let mergemiddle: number;

function merge(
  array: number[],
  begin: number,
  mergemiddle: number,
  finish: number,
  animations: AnimationArrayType,
) {
  const left = array.slice(begin, mergemiddle);
  const right = array.slice(mergemiddle, finish);

  let i = 0;
  let j = 0;
  let k = begin;
  while (i < left.length && j < right.length) {
    animations.push([[begin + i, mergemiddle + j], false]);
    if (left[i] <= right[j]) {
      animations.push([[k, left[i]], true]);
      array[k] = left[i];
      i += 1;
    } else {
      animations.push([[k, right[j]], true]);
      array[k] = right[j];
      j += 1;
    }
    k++;
  }
  while (i < left.length) {
    animations.push([[begin + i], false]);
    animations.push([[k, left[i]], true]);
    array[k] = left[i];
    i += 1;
    k += 1;
  }
  while (j < right.length) {
    animations.push([[mergemiddle + j], false]);
    animations.push([[k, right[j]], true]);
    array[k] = right[j];
    j += 1;
    k += 1;
  }
}

function runMergeSort(array: number[]) {
  const animations: AnimationArrayType = [];
  for (let k = 1; k < array.length; k = 2 * k) {
    for (let i = 0; i < array.length; i += 2 * k) {
      const begin = i;
      mergemiddle = i + k;
      const finish = Math.min(i + 2 * k, array.length);
      merge(array, begin, mergemiddle, finish, animations);
    }
  }
  return { animations, mergemiddle };
}

export { mergemiddle };

export function generateMergeSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void,
) {
  if (isSorting) return;
  if (array.length <= 1) return [];

  const auxiliaryArray = array.slice();
  const { animations } = runMergeSort(auxiliaryArray);
  runAnimation(animations);
}
