import * as SortUtil from "../SortUtility"

async function partition(setOut, nums, lo, hi) {
    let pivot = nums[hi]
    let left = lo 
    let right = hi - 1

    while (left <= right) {
        while (nums[left] < pivot) {
            left++;
        }
        while (nums[right] > pivot) {
            right--;
        }
        if (left <= right) {
            SortUtil.swapElements(nums, left, right);
            left++;
            right--;
        }
    }
    SortUtil.swapElements(nums, left, hi)
    await setOut(SortUtil.arrToString(nums, ","))
    await new Promise(r => setTimeout(r, 1000));
    return left;
}

export async function quicksort(setOut, nums, lo, hi) {
  if (lo < hi) {
    let pi = await partition(setOut, nums, lo, hi)
    await quicksort(setOut, nums, lo, pi-1)
    await quicksort(setOut, nums, pi+1, hi)
  }
}

export async function handleQuickSort(setOut, nums) {
  await quicksort(setOut, nums, 0, nums.length - 1)
}