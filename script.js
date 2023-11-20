async function fetchData() {
    try {
        const response = await fetch('https://isro.vercel.app/api/centres');
        const data = await response.json();
        return data.centres;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const searchData = document.getElementById('searchInput');

function displayCentres(centres) {
    const centresContainer = document.getElementById('centresContainer');
    centresContainer.innerHTML = '';

    centres.forEach(centre => {
        const card = document.createElement('div');
        card.classList.add('centre-card');
        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const centerLabel = document.createElement('h2');
        centerLabel.textContent = 'CENTER:';
        const name = document.createElement('p');
        name.textContent = centre.name;

        const cityLabel = document.createElement('h2');
        cityLabel.textContent = 'CITY:';
        const city = document.createElement('p');
        city.textContent = centre.Place;

        const stateLabel = document.createElement('h2');
        stateLabel.textContent = 'STATE:';
        const state = document.createElement('p');
        state.textContent = centre.State;

        cardContent.appendChild(centerLabel);
        cardContent.appendChild(name);
        cardContent.appendChild(cityLabel);
        cardContent.appendChild(city);
        cardContent.appendChild(stateLabel);
        cardContent.appendChild(state);
        card.appendChild(cardContent);
        centresContainer.appendChild(card);
    });
}



document.addEventListener('DOMContentLoaded', async function() {
    const centres = await fetchData();
    displayCentres(centres);
})


document.getElementById('allCentresBtn').addEventListener('click', async () => {
    centresContainer.innerHTML = '';
    const center = searchData.value;
    const centres = await fetchData();
    const centerData = centres.filter(val=>val.name===center)
    displayCentres(centerData);
});

document.getElementById('cityBtn').addEventListener('click',async ()=>{
    centresContainer.innerHTML = '';
    const city = searchData.value;
    const centres = await fetchData();
    const cityData = centres.filter(val=>val.Place===city)
    displayCentres(cityData);
    console.log("City",city,cityData,centres)
})
document.getElementById('stateBtn').addEventListener('click',async ()=>{
    centresContainer.innerHTML = '';
    const state = searchData.value;
    const centres = await fetchData();
    const stateData = centres.filter(val=>val.State===state)
    displayCentres(stateData);
    console.log("City",state,stateData,centres)
})
