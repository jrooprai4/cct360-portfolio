// displaying today's date

document.getElementById('today').textContent = 
    new Date().toLocaleDateString('en-US', {
        weekday: 'long',  // ex; Monday
        year: 'numeric',  // 2026
        month: 'long',    // November
        day: 'numeric'    // 09
        });


// ----------------------------------------------------------------------------------------------


// getting nba data from api

const url = 'http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard';

async function getData() {
    const gamesContainer = document.getElementById('games');
    const lastUpdated = document.getElementById('last-updated');

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Could not retrieve game data :(');
        }

        // convert response to json
        const data = await response.json();

        // get list of games
        const games = data.events || [];  // empty array as a fall back if no games are found

        // clear games container before adding new games
        gamesContainer.innerHTML = '';

        // if there are no games
        if (games.length == 0) {
            gamesContainer.innerHTML = '<p>No NBA games scheduled today :(</p>';
        }

        // loop through each game and display data
        games.forEach(game => {
            // stores the competition object for a game
            const competition = game.competitions[0];

            // home team
            const home = competition.competitors.find(team => team.homeAway === 'home');

            // away team
            const away = competition.competitors.find(team => team.homeAway === 'away');

            // status
        });
    }

    catch (error) {
        console.error('Error:', error);
    }
}