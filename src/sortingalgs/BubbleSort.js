import * as SortUtil from "../SortUtility"

// Bubble sort algorithm, largest number "bubbles" to the top
async function bubblesort(setOut, nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length-i; j++) {
      if (nums[j] < nums[j-1]) {
        let temp = nums[j]
        nums[j] = nums[j-1]
        nums[j-1] = temp
      }
      await SortUtil.wait()
      setOut(SortUtil.arrToString(nums, ','))
    }
  }
  setOut(SortUtil.arrToString(nums, ','))
}
// Sort handler
export async function handleBubbleSort(setOut, nums) {
  bubblesort(setOut, nums)
}
