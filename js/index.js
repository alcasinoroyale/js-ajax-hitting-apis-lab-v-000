// your code here
function getRepositories() {
  const username = document.getElementBYID('username').value;
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories);
  req.open('GET', 'https://api.github.com/users/' + name + '/repos');
  req.send();
}

function displayRepositories() {
  const repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos.map(
    r =>
    '<li>' +
    r.name +
    '<br> https://github.com/'+ r.owner.login + '/' + r.name +
		'<br><a href="#" data-username="'+ r.owner.login +
    '"data-repository="' + r.name +
    '"onclick="getCommits(this)">GetCommits</a>' +
		'<br><a href="#" data-username="'+ r.owner.login +
    '"data-repository="' + r.name +'"onclick="getBranches(this)">GetBranches</a></li>'
		)
    .join('')}</ul>`;
	document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el) {
  const owner = el.dataset.username;
  const repo = el.dataset.repository;

}





  )}`
}
