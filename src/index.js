
document.addEventListener("DOMContentLoaded", main);

let form;
let formTextInput;
let taskList;

function main()
{
  form = document.querySelector('form');
  formTextInput = document.querySelector('input');
  taskList = document.querySelector('#tasks');
  form.addEventListener('submit', OnSubmit);
}

function OnSubmit(event)
{
  event.preventDefault();

  let finalString = VerifyString(formTextInput.value);
  if(finalString !== undefined)
  {
    AddStringToList(finalString);
    formTextInput.value = "";
  }
  else
  {
    console.log("Invalid String! Cannot add invalid string to list.")
  }
}

function AddStringToList(string)
{
  console.log(`Added "${string}"`)
  let li = document.createElement("li");

  li.textContent = string;

  taskList.appendChild(li);
}

function VerifyString(string)
{
  if(!string) //If we get an empty string
  {
    return;
  }

  return string;
}