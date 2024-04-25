fetch('https://api.github.com/repos/Eventual-Inc/Daft')
.then(response => response.json())
.then(data => {
    const stargazersCount = data.stargazers_count;
    document.getElementById('stargazers-count').innerHTML = `${stargazersCount}`;
})
.catch(error => {
    console.error('Error fetching data:', error);
    document.getElementById('stargazers-count').innerHTML = '----';
});