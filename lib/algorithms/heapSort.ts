import { AnimationArrayType } from "../types";

// Function to heapify a subtree rooted at index i
function heapify(
  array: number[],
  n: number,
  i: number,
  animations: AnimationArrayType,
) {
  let largest = i; // Initialize largest as root
  const left = 2 * i + 1; // Left child
  const right = 2 * i + 2; // Right child

  // Check if left child exists and is greater than root
  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  // Check if right child exists and is greater than root
  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  // If largest is not root, swap with root and heapify the affected subtree
  if (largest !== i) {
    animations.push([[i, largest], false]); // Mark elements being swapped
    [array[i], array[largest]] = [array[largest], array[i]];
    animations.push([[i, array[i]], true]);
    animations.push([[largest, array[largest]], true]);
    heapify(array, n, largest, animations);
  }
}

// Function to build a max heap
function buildMaxHeap(array: number[], animations: AnimationArrayType) {
  const n = array.length;

  // Build a max heap by heapifying all non-leaf nodes
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i, animations);
  }
}

// Main heap sort function
function runHeapSort(array: number[], animations: AnimationArrayType) {
  const n = array.length;

  // Build max heap
  buildMaxHeap(array, animations);

  // Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    animations.push([[0, i], false]); // Mark elements being swapped
    [array[0], array[i]] = [array[i], array[0]];
    animations.push([[0, array[0]], true]);
    animations.push([[i, array[i]], true]);
    heapify(array, i, 0, animations);
  }
}

export function generateHeapSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void,
) {
  if (isSorting) return;
  if (array.length <= 1) return [];

  const animations: AnimationArrayType = [];
  const auxiliaryArray = array.slice();
  runHeapSort(auxiliaryArray, animations);
  runAnimation(animations);
}
