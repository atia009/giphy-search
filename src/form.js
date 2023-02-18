import Img from "./image";

const Form = (() => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const search = document.createElement("button");
  const refresh = document.createElement("button");
  let currentQuery = "dog";

  // cache DOM
  document.body.appendChild(form);

  // functions
  function startForm() {
    form.append(input, search, refresh);
  }

  function startInput() {
    input.setAttribute("type", "text");
    input.placeholder = "Search new gif";
  }

  function startSearch() {
    search.setAttribute("type", "button");
    search.textContent = "Search";
  }

  function startRefresh() {
    refresh.setAttribute("type", "button");
    refresh.textContent = "Refresh";
  }

  function getInputValue() {
    return input.value;
  }

  function setInputValue(value) {
    input.value = value;
  }

  function getCurrentQuery() {
    return currentQuery;
  }

  function setCurrentQuery(value) {
    currentQuery = value;
  }

  function startSearchEvent() {
    Img.setImg(getInputValue());
    setCurrentQuery(getInputValue());
    setInputValue("");
  }

  function startRefreshEvent() {
    Img.setImg(currentQuery);
    setInputValue("");
  }

  // function calls
  Img.setImg(currentQuery);
  startInput();
  startSearch();
  startRefresh();
  startForm();

  // bind events
  search.addEventListener("click", startSearchEvent);
  refresh.addEventListener("click", startRefreshEvent);

  // public methods
  return { getCurrentQuery, setCurrentQuery };
})();

export default Form;
