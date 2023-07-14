let inner = document.querySelector(".innercursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
  //   console.log(x, y);

  inner.style.left = `${x}px`;
  inner.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    inner.classList.add("grow");
  });
  link.addEventListener("mouseleave", () => {
    inner.classList.remove("grow");
  });
});
