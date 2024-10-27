import type { AnimationArrayType } from "../types";

function partition(
  array: number[],
  begin: number,
  finish: number,
  animations: AnimationArrayType,
  setPivotIndex: (index: number | null) => void,
) {
  const pivot = array[begin];
  setPivotIndex(begin);
  animations.push([[begin], false, true]); // Mark initial pivot

  let i = begin + 1;
  let j = finish;

  while (i <= j) {
    while (i <= finish && array[i] < pivot) {
      animations.push([[i], false]);
      i++;
    }
    while (j > begin && array[j] >= pivot) {
      animations.push([[j], false]);
      j--;
    }
    if (i < j) {
      animations.push([[i, array[j]], true]);
      animations.push([[j, array[i]], true]);
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  animations.push([[begin, array[j]], true]);
  animations.push([[j, array[begin]], true]);
  [array[begin], array[j]] = [array[j], array[begin]];
  setPivotIndex(j);
  animations.push([[j], false, true]); // Mark new pivot position
  return j;
}

function runQuickSort(
  array: number[],
  begin: number,
  finish: number,
  animations: AnimationArrayType,
  setPivotIndex: (index: number | null) => void,
) {
  if (begin < finish) {
    const partitionIndex = partition(
      array,
      begin,
      finish,
      animations,
      setPivotIndex,
    );
    runQuickSort(array, begin, partitionIndex - 1, animations, setPivotIndex);
    runQuickSort(array, partitionIndex + 1, finish, animations, setPivotIndex);
  }
}

export function generateQuickSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void,
  setPivotIndex: (index: number | null) => void,
) {
  if (isSorting) return;
  if (array.length <= 1) return array;

  const animations: AnimationArrayType = [];
  const auxiliaryArray = array.slice();
  runQuickSort(auxiliaryArray, 0, array.length - 1, animations, setPivotIndex);
  runAnimation(animations);
}
