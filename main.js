import './style.css'
import * as tasks from './tasks';

const show = (func, params) => {
  return `${params} ==> <b>${func(params)}</b>`;
}

document.querySelector('#app').innerHTML = `
<h1>JavaScript Function Practice</h1>

<h2>Task 7</h2>
<p>${show(tasks.task7_numbersDivisibleBy3, [1,2,3,4,5,6,7,8,9])}</p>
<p>${show(tasks.task7_numbersDivisibleBy3, [2,4,8])}</p>
<p>${show(tasks.task7_numbersDivisibleBy3, [9])}</p>

<h2>Task 8</h2>
<p>${show(tasks.task8_onlyLongWords, "Welcome to Wikipedia the free encyclopedia that anyone can edit")}</p>
<p>${show(tasks.task8_onlyLongWords, "The cat is on the table")}</p>
<p>${show(tasks.task8_onlyLongWords, "not many long ones here")}</p>

<h2>Task 8 - with regex</h2>
<p>${show(tasks.task8_onlyLongWords2, "Welcome to Wikipedia the free encyclopedia that anyone can edit")}</p>
<p>${show(tasks.task8_onlyLongWords2, "The cat is on the table")}</p>
<p>${show(tasks.task8_onlyLongWords2, "not many long ones here")}</p>
`
