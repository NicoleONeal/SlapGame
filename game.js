let health = 200;
let healthElem = document.getElementById("health");
healthElem.innerText = `${health}`;
$('#gameRules').modal('show')



let items = {
    falcon: {
        name: 'falcon',
        modifier: 5,
        description: 'Don/t get cocky kid!'
    },
    ewok: {
        name: 'ewok',
        modifier: 3,
        description: 'Ewoks snuck on board!'
    },
    hyperDrive: {
        name: 'hyperDrive',
        modifier: 2,
        description: 'Evasie mannuvers!'
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
    healthElem.innerHTML = `<span style='color:green'>${health}</span>`;

    if (health <= 190) {
        healthElem.innerHTML = `<span style='color:green'>${health}</span>`;
    }
    if (health <= 100) {
        healthElem.innerHTML = `<span style='color:yellow'>${health}</span>`;
    }
    if (health <= 50) {
        healthElem.innerHTML = `<span style='color:red'>${health}</span>`;
    }
    if (health <= 0) {
        health = 0;
        healthElem.innerHTML = `<span style='color:red'>${health}</span>`;
        setTimeout(function () {
            alert("You have defeated the Dark Side!");
        }, 250);


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