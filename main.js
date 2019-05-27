//變數管理
const roman_input = document.getElementById('roman-input')
const number_input = document.getElementById('number-input')
const copy_btn = document.getElementById('copy')
const clear_btn = document.getElementById('clear')
const roman_numeral = {
  'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1
}
// 事件管理
roman_input.addEventListener('input', display)
number_input.addEventListener('input', display)
copy_btn.addEventListener("click", copy)
clear_btn.addEventListener('click', clear)


// 功能管理
function display(e) {
  e.target.id === 'roman-input' ? number_input.value = roman_to_number(this.value) : roman_input.value = number_to_roman(this.value)
}

function roman_to_number(roman) {
  let number = 0
  roman = roman.toUpperCase()
  for (let item in roman_numeral) {
    let regrex = new RegExp(`${item}`)
    while (roman != '' && roman.slice(0, item.length) === item) {
      roman = roman.replace(regrex, '')
      number += roman_numeral[item]
    }
  }
  return number
}

function copy() {
  number_input.select();
  document.execCommand("copy");
}

function clear() {
  roman_input.value = '';
  number_input.value = '';
}

function number_to_roman(number) {
  let result = ''
  for (let i in roman_numeral) {
    while (number >= roman_numeral[i]) {
      number -= roman_numeral[i]
      result += i
    }
  }
  return result
}