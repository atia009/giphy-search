const Img = (() => {
  const img = document.createElement("img");

  // cache DOM
  document.body.appendChild(img);

  // functions
  function setImg(query = "dog") {
    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=z4Q6aWFpoFeVBHp9mnmPPOmpENLtL8rG&s=${query}`,
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((data) => {
        img.src = data.data.images.original.url;
      });
  }
  setImg();

  // public methods
  return { setImg };
})();

export default Img;
