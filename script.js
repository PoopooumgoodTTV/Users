document.getElementById('fetchButton').addEventListener('click', function() {
    const userId = document.getElementById('userId').value;
    const url = `https://kirka.irrvlo.xyz/_next/data/Qj7Evkvz7SgKQYk1Q4HmZ/users/${userId}.json`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.pageProps.error) {
                const userData = data.pageProps.userData;
                const output = `
                    <p>Estimated Time Played: ${userData.estimatedTimePlayed}</p>
                    <p>Kills: ${userData.stats.kills}</p>
                    <p>Headshots: ${userData.stats.headshots}</p>
                    <p>Games: ${userData.stats.games}</p>
                    <p>Wins: ${userData.stats.wins}</p>
                `;
                document.getElementById('output').innerHTML = output;
            } else {
                document.getElementById('output').innerHTML = '<p>Error fetching data.</p>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('output').innerHTML = '<p>Error fetching data.</p>';
        });
});
