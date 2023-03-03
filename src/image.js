const Img = (() => {
  const img = document.createElement("img");

  // cache DOM
  document.body.appendChild(img);

  // functions
  async function setImg(query) {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=z4Q6aWFpoFeVBHp9mnmPPOmpENLtL8rG&s=${query}`,
        { mode: "cors" }
      );
      const data = await response.json();
      img.src = data.data.images.original.url;
    } catch (error) {
      img.src =
        "https://media0.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif?cid=8b15c4243v1zf9cy7retvj9vlef329cmxcvl6e9aulkql30e&rid=giphy.gif&ct=g";
    }
  }

  // public methods
  return { setImg };
})();

export default Img;
