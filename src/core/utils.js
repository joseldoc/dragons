export function addDragons(main, dragons) {
    const ulElt = createList(dragons);
    main.appendChild(addCount(dragons))
    main.appendChild(ulElt)
}

let createList = (dragons) => {
    const ulElement = document.createElement("ul");

    for (const data of dragons.names) {
        const list = document.createElement('li');

        list.appendChild(document.createTextNode(`${data.name}`));
        ulElement.appendChild(list);
    }

    return ulElement;
};

let addCount = (dragons) => {
    const displayCount = document.createElement('p');
    displayCount.appendChild(document.createTextNode(`${dragons.count}`));

    return displayCount;
}
