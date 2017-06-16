const btn = document.getElementById('button');

function getText() {
  let t = document.getElementById('text').value;
  return t;
}

function alerting() {
  if (document.getElementById('text').value !== '') alert(getText());
}

function createElement() {
  let newLi = document.createElement('li');
  newLi.innerHTML = getText();
  return document.getElementById('ol').appendChild(newLi);
}

btn.addEventListener('click', alerting);
btn.addEventListener('click', createElement);
