let health = 200;
let healthElem = document.getElementById("health");
healthElem.innerText = `${health}`;


let items = {
    falcon: {
        name: 'falcon',
        modifier: 2,
        description: 'FALCON PUNCH!'
    },
    ewok: {
        name: 'ewok',
        modifier: 5,
        description: 'IT A FUZZY MIDGET!'
    },
    hyperDrive: {
        name: 'hyperDrive',
        modifier: 3,
        description: 'TOO FAST BRAH'
    },
    default: {
        name: 'default',
        modifier: 1,
        description: 'default'
    }
}

// let activeItem = items.default

let activeItems = [];

function attack(damage) {

    for (let i = 0; i < activeItems.length; i++) {
        damage += activeItems[i].modifier;
        console.log(`i = ${i}  adding modifer${activeItems[i].name} setting damage to:${damage}`);
        activeItems.pop
    }

    health = health - damage;
    healthElem.innerHTML = `<p style='color:green'>${health}</p>`;

    if (health <= 190) {
        healthElem.innerHTML = `<p style='color:green'>${health}</p>`;
    }
    if (health <= 100) {
        healthElem.innerHTML = `<p style='color:yellow'>${health}</p>`;
    }
    if (health <= 50) {
        healthElem.innerHTML = `<p style='color:red'>${health}</p>`;
    }
    activeItems = [];
}

// function setActiveItem(modiferName) {
//     activeItem = items[modiferName];
//     console.log(`Setting item to: ${activeItem.description}`);
// }

function addActiveItem(name) {

    activeItems.push(items[name]);
}