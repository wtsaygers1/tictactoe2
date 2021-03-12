const app = document.getElementById("app");

const players = [];

class Tile {
    // the arguments of the constructor are what will be customized when a 
    // new object is created from this class
    constructor(id, tileText) {
        this.id = id;
        this.tileText = tileText;
        this.clicked = false;
    }
}

class Grid {
    constructor() {
        this.tileArray = [];
        this.symbol = "";
        this.moves = 0;
        // revisit this b/c will probably need more in this constructor
    }
    renderGrid() {
        this.header();
        this.players();
    }
    // boiler plate for html elements (is this a helper function or method???)
    generateHTML(type, classes, parent = app, text = "", id = "") {
        const element = document.createElement(type);
        element.classList = (classes);
        element.innerText = (text);
        element.id = (id);
        parent.appendChild(element);
        return element;
    }
    header() {
        let container = this.generateHTML("div", "container", app, "", "contain");
        let row = this.generateHTML("div", "row", container);
        this.generateHTML("h1", "header text-center", row, "TicTacToe");
    }
    players() {
        // container is undefined, creates a new container, or this row is just 
        // a child of app (the current case)
        // how can I make this row a child of the container??
        let row = this.generateHTML("div", "row", app);
        let col = this.generateHTML("div", "col-6", row);
        this.generateHTML("div", "player text-center top-0 start-0", col, "PlayerX");
        col = this.generateHTML("div", "col-6", row);
        this.generateHTML("div", "player text-center top-0 start-0", col, "PlayerO");
    }
}

// the init function is declared in the global because it initializes the page once
function init() {
    let grid = new Grid()
    grid.renderGrid();
}
// the init function needs to be called to load the page but WILL NEED to be called
// each time the game is restarted to re-initalizes the original state
init();