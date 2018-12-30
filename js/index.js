// your code here
function getRepositories() {
  const username = document.getElementBYID('username').value;
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories);
  req.open('GET', 'https://api.github.com/users/' + name + '/repos');
  req.send();
}
