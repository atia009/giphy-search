import Img from "./image";

const Form = (() => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const search = document.createElement("button");

  // cache DOM
  document.body.appendChild(form);

  // functions
  function startForm() {
    form.append(input, search);
  }

  function startInput() {
    input.setAttribute("type", "text");
    input.placeholder = "Search new gif";
  }

  function startSearch() {
    search.setAttribute("type", "button");
    search.textContent = "Search";
  }

  function getInputValue() {
    return input.value;
  }

  function setInputValue(value) {
    input.value = value;
  }

  function startSearchEvent() {
    Img.setImg(getInputValue());
    setInputValue("");
  }

  startInput();
  startSearch();
  startForm();

  // bind events
  search.addEventListener("click", startSearchEvent);

  // public methods
  return { getInputValue, setInputValue };
})();

export default Form;
