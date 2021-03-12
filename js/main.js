const app = document.getElementById("app");

const players = [];

class Tile {
    // the arguments of the constructor are what will be customized when a 
    // new object is created from this class
    constructor(id) {
        this.id = id;
        // this.tileText = tileText;
        this.clicked = false;
        this.HTML = "";
        this.symbol = "";
    }
    // this is linked with the clickTile in Grid class
    changeMoves(gridSymbol) {
        this.symbol = gridSymbol;
        this.HTML.innerHTML = this.symbol
        console.log();
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
        this.gameView();
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
    gameView() {
        const container = this.generateHTML("div", "container", app, "", "mainContain");
        const rowTit = this.generateHTML("div", "row", container);
        const title = this.generateHTML("h1", "header text-center", rowTit, "TicTacToe", "title");
        const players = this.generateHTML("div", "row", container, "", "pRow");
        const plX = this.generateHTML("div", "col-6 text-center", players, "PlayerX", "X");
        const plO = this.generateHTML("div", "col-6 text-center", players, "PlayerO", "O");
        const gameArea = this.generateHTML("div", "row", container, "", "gameGrid");
        for (let index = 0; index < 9; index++) {
            const playSpaces = this.generateHTML("div", "col-4 border text-center", gameArea, "-", index);
            let uniqueTiles = new Tile(index);
            // the individual tiles
            console.log(uniqueTiles);
            // HTML info
            // console.log(playSpaces.id);
            playSpaces.addEventListener("click", e => this.clickTile(index));
            console.log(this);
            uniqueTiles.HTML = playSpaces;
            this.tileArray.push(uniqueTiles);
            // console.log(this.tileArray);
        }
        const restartBtn = this.generateHTML("button", "row position-relative top-0 start-50", container, "Restart", "restart");
    }

    clickTile(index) {
        if (this.tileArray[index].clicked === false) {
            this.tileArray[index].clicked = true
            if (this.moves % 2 === 0) {
                this.symbol = "X"
            } else {
                this.symbol = "O"
            }
            // console.log(this.symbol)
            // this is linked with changeMoves in Tile class
            this.tileArray[index].changeMoves(this.symbol);
            // console.log("whatever", obj)
            // console.log(this.tileArray)
            this.moves++;
            // console.log(this.moves);
            console.log(this.tileArray[index].clicked);
            console.log(this);
        }
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