class App {
    constructor(){
        this.moves = "";
        this.render();
        //modal for stretch
    }

    render(){
        let app = document.getElementById("myApp");
        this.buildHeader(app);
        this.players(app);
    }

    generateHTML(type, classes, parent, text = "", id) {
        const element = document.createElement(type);
        element.className = (classes);
        element.innerText = (text);
        element.id = id;
        parent.appendChild(element);
        return element;
    }

    buildHeader(myApp) {
        let container = this.generateHTML("div", "container", myApp);
        // this row is specific to this header
        let row = this.generateHTML("div", "row", container);
        this.generateHTML("h1", "header text-center", row, "TicTacToe");
    }

    players(myApp) {
        let container = this.generateHTML("div", "container", myApp);
        // this row is specific to the players
        let row = this.generateHTML("div", "row", container);
        // this column is specific to the row that has players
        let col = this.generateHTML("div", "col-6", row);
        this.generateHTML("div", "player text-center top-0 start-0", col, "PlayerX");
        // just call the row already created
        col = this.generateHTML("div", "col-6", row);
        this.generateHTML("div", "player text-center top-0 end-0", col, "PlayerO");
    }

}

class Grid {
    constructor(){
        this.grid = [];
    }
}

class Tile {
    constructor(){
        this.tile = "";
    }
}

let a = new App();
console.log(a);
