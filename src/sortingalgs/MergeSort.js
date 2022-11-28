import * as SortUtil from "../SortUtility"
function merge(a, b) {
  let newArr = []
  let aIdx = 0
  let bIdx = 0
  while (aIdx < a.length && bIdx < b.length) {
    if (a[aIdx] < b[bIdx]) {
      newArr.push(a[aIdx])
      aIdx++
    }
    else {
      newArr.push(b[bIdx])
      bIdx++
    }
  }
  while (aIdx < a.length) {
    newArr.push(a[aIdx])
    aIdx++
  }
  while (bIdx < b.length) {
    newArr.push(b[bIdx])
    bIdx++
  }
  return newArr
}

async function mergesort(setOut, arr, lo, hi) {
  if (lo >= hi) {
    return [arr[lo]]
  }
  let mid = Math.floor((lo + hi)/2)
  let a = await mergesort(setOut, arr, lo, mid)
  let b = await mergesort(setOut, arr, mid+1, hi)
  let merged = merge(a,b)
  setOut(SortUtil.arrToString(merged, ","))
  await new Promise(r => setTimeout(r, 1000));
  return merged
}

export async function handleMergeSort(setOut, arr) {
  return mergesort(setOut, arr, 0, arr.length-1)
}