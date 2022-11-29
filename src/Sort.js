import React, { useRef, useState } from 'react'
import * as SortUtil from "./SortUtility"
import * as BS from "./sortingalgs/BubbleSort"
import * as MS from "./sortingalgs/MergeSort"
import * as QS from "./sortingalgs/QuickSort"

export default function Sort() {
  const inputRef = useRef()
  const [ output, setOutput ] = useState("Your array here...")

  function handleInputChange(e) {
    try {
      setOutput(SortUtil.arrToString(SortUtil.stringToArr(inputRef.current.value, ','), ','))
    }
    catch(e) {
      setOutput(e)
    }
  }
  
  async function handleSortClick(e) {
    let text = output
    let nums = SortUtil.stringToArr(text, ",")
  
    let selection = document.querySelector('input[name="sortingalg"]:checked').id
  
    switch(selection) {
      case "mergesort":
        await MS.handleMergeSort(setOutput, nums)
        break
      case "quicksort":
        await QS.handleQuickSort(setOutput, nums)
        break
      case "bubblesort":
        await BS.handleBubbleSort(setOutput, nums)
        break
      default:
    }
  }

  return (
    <>
    <h3>Enter some comma-separated numbers below:</h3>
    <input ref={inputRef} type="text" id="sortInput" onChange={handleInputChange}/>
    <h3>Now select a sorting algorithm:</h3>
    <form>
      <label><input type="radio" id="mergesort" name="sortingalg" value="Merge Sort"/>Merge Sort</label>
      <label><input type="radio" id="quicksort" name="sortingalg" value="Quick Sort"/>Quick Sort</label>
      <label><input type="radio" id="bubblesort" name="sortingalg" value="Bubble Sort"/>Bubble Sort</label>
    </form>
    <input type="button" id="sortButton" onClick={handleSortClick} value="Sort"/>
    <hr/>
    {output}
    </>
  )
}
