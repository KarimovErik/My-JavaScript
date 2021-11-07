const API = 'https://swapi.dev/api/';
const APIPeople = 'https://swapi.dev/api/people/';

const hideLoader = () => {
    const $preloaderBlock = document.querySelector('#preloader');
    $preloaderBlock.classList.add('d-none');
};

const generateInfo = (item) => {
    // delete item.gender; // специально!!! для примера

    const itemCopy = {
        name: 'N/A',
        gender: 'N/A',
        birth_year: 'unknown',
        ...item,
    };

    // const itemCopy = Object.assign(item);

    // birth_year: "19BBY"
    // eye_color: "blue"
    // gender: "male"
    // hair_color: "blond"
    // height: "172"
    // mass: "77"
    // name: "Luke Skywalker"
    // skin_color: "fair"

    return `
        <b>Name: </b> ${itemCopy.name} <br/>
        <b>Gender: </b> ${itemCopy.gender} <br/>
        <b>Birth Year: </b> ${itemCopy.birth_year}
    `;
};

const renderList = (list) => {
    const $listWrapper = document.querySelector('#accordionExample');
    $listWrapper.innerHTML = '';

    list.forEach((item, index) => {
        if (item === null || typeof item !== 'object') {
            return;
        }

        const info = generateInfo(item);
        const content = `
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading_${index}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_${index}" aria-expanded="true" aria-controls="collapse_${index}">
                        ${item.name}
                    </button>
                </h2>
                <div id="collapse_${index}" class="accordion-collapse collapse" aria-labelledby="heading_${index}" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        ${info}
                    </div>
                </div>
            </div>
        `;

        $listWrapper.innerHTML += content;

        // const $a = document.createElement('a');
        // $a.href='#';
        // $a.className = 'list-group-item list-group-item-action';
        // $a.innerText = item.name;
        // $listWrapper.appendChild($a);
    });
};

const getData = () => {
    fetch(APIPeople)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            hideLoader();
            setTimeout(() => {
                renderList(data.results);
            }, 100);
        });
};

getData();
