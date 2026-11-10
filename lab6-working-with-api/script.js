// displaying today's date

document.getElementById('today').textContent = 
    new Date().toLocaleDateString('en-CA', {
        weekday: 'long',  // ex; Monday
        year: 'numeric',  // 2026
        month: 'long',    // November
        day: 'numeric'    // 09
        });


// ----------------------------------------------------------------------------------------------


// getting nba data from api

const url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard';

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
        const games = data.events || [];  // empty array as a fallback if no games are found

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

            // current status (info) of the game --> live or not, what quarter, the time, description, details, etc.
            const status = competition.status || game.status;  // if nothing found in competition, game.status is fallback

            // state of the game --> pregame, live, postgame
            const state = status.type.state;

            // location of the game
            const arena = competition.venue.fullName;
            const city = competition.venue.address.city;
            const stateLocation = competition.venue.address.state;

            const isLive = state === 'in';
            const isFinal = state === 'post';

            let statusText = 'Upcoming';
            let statusClass = '';

            // check the game's status and update text and class accordingly
            if (isLive) {
                statusText = '● LIVE';
                statusClass = 'live';
            }

            if (isFinal) {
                statusText = 'Final';
                statusClass = 'final';
            }

            // get scores
            const homeScore = home.score ?? '-';  // if home.score is null/undefined, display dash
            const awayScore = away.score ?? '-';  // if away.score is null/undefined, display dash

            // determine winner
            const homeWin = isFinal && (Number(homeScore) > Number(awayScore));  // if the game is done and home scored more than away, homeWin is true
            const awayWin = isFinal && (Number(awayScore) > Number(homeScore));  // same thing for away

            // get game time/clock
            let gameTime = status.type.shortDetail;

            // if the game hasn't started yet
            if (!isLive && !isFinal) {
                gameTime = new Date(game.date).toLocaleTimeString('en-CA', {hour: 'numeric', minute: '2-digit'});
            }

            // create game card
            const card = document.createElement('div');
            card.className = 'game-card';
            
            card.innerHTML = `
                <div class='game-status ${statusClass}'>
                    ${statusText}
                    <span class='location'>
                        ${arena} (${city}, ${stateLocation})
                    </span>
                </div>

                <div class='team'>
                    <span class='team-name ${awayWin ? 'winner' : ''}'>
                        ${away.team.displayName}
                    </span>
                    <span class='score'>${awayScore}</span>
                </div>

                <div class='team'>
                    <span class='team-name ${homeWin ? 'winner' : ''}'>
                        ${home.team.displayName}
                    </span>
                    <span class='score'>${homeScore}</span>
                </div>

                <div class='game-time'>
                    ${isLive ? 'Game clock: ' : ''}
                    ${gameTime || ''}
                </div>
            `;

            // add the card just created to the games div
            gamesContainer.appendChild(card);
        });

        // display last updated time
        lastUpdated.textContent = 'Last updated: ' + new Date().toLocaleTimeString();
    }

    catch (error) {
        console.error('Error retrieving game data:', error);
    }
}

// load games upon website launch
getData();

// refresh every 15 seconds
setInterval(getData, 15000);

// refresh button
document.getElementById('refresh').addEventListener('click', getData);