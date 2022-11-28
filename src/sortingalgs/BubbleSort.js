import * as SortUtil from "../SortUtility"

async function bubblesort(setOut, nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length-i; j++) {
      if (nums[j] < nums[j-1]) {
        let temp = nums[j]
        nums[j] = nums[j-1]
        nums[j-1] = temp
      }
      await new Promise(r => setTimeout(r, 1000));
      setOut(SortUtil.arrToString(nums, ','))
    }
  }
  setOut(SortUtil.arrToString(nums, ','))
}

export async function handleBubbleSort(setOut, nums) {
  bubblesort(setOut, nums)
}