const pressed = [];
const secretCode = "banana";

window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join("").includes(secretCode)) {
    console.log("%c DIING ", "color: red");
    cornify_add();
  }
});
