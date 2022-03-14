async function onFilterClick(event) {
    if (event.target.closest('#filterBtn')) {
        const data = await getData();
        document.querySelector('.active').classList.remove('active');
        event.target.closest('#filterBtn').classList.add('active');
        for (let i = 0; i < document.querySelectorAll('.card__current-hours').length; i++) {
            document.querySelectorAll('.card__current-hours')[i].innerHTML = data[i]
                .timeframes[event.target.closest('#filterBtn').textContent.toLowerCase()]
                .current + `hrs`;

            document.querySelectorAll('.card__previous-hours')[i].innerHTML = 'Previous - ' + data[i]
                .timeframes[event.target.closest('#filterBtn').textContent.toLowerCase()]
                .previous + `hrs`;


        }
    }
}

async function getData() {
    const response = await fetch('./data.json')
    const data = await response.json();
    return data;
}

document.querySelector('#filters').addEventListener('click', onFilterClick);