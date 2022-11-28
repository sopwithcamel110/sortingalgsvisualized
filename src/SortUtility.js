/**
   * 
   * @param {char} c 
   * @returns if c is a digit character
   */
 export function isDigit(c) {
    return c >= '0' && c <= '9'
  }
  /**
   * Turns a string into its array representation, splitting by delimiter
   * @param {string} s : string to convert into array
   * @param {char} d : delimiter
   */
  export function stringToArr(s, d) {
    let arr = []
    let num = 0
    let trailing = false
    for (let i = 0; i < s.length; i++) {
      if (s[i] === ' ') {
        continue
      }
      else if (isDigit(s[i])) {
        num *= 10
        num += s[i] - '0'
        trailing = true
      }
      else if (s[i] === d && trailing) {
        arr.push(num)
        num = 0
        trailing = false
      }
      else {
        throw "Unexpected character found: " + s[i]
      }
    }
    if (trailing) {
      arr.push(num)
    }
    return arr
  }
  /**
   * Converts array to its string representation
   * @param {int*} arr 
   * @param {char} d 
   * @returns 
   */
  export function arrToString(arr, d) {
    if (arr.length === 0) return ""
    let s = "" + arr[0]
    for (let i = 1; i < arr.length; i++) {
      s += d + arr[i]
    }
    return s
  }
  /**
   * Swaps elements in array arr at indices i and j
   * @param {int*} arr 
   * @param {int} i 
   * @param {int} j 
   */
  export function swapElements(arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }