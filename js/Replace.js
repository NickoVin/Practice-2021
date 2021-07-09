function alphabetPosition(text) {
  text = text.replace(/[^a-z]/gi, "");
  text = text.replace(/[a-z]/gi, c => (c.toUpperCase().charCodeAt(0) + 1) - 65 + " ");
  return text.trim();
}

let ReplaceDiv = document.getElementById("Replace");
ReplaceDiv.innerHTML += alphabetPosition("The sunset sets at twelve o' clock.") + '<br>';
ReplaceDiv.innerHTML += alphabetPosition("The narwhal bacons at midnight.");