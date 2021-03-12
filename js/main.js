const app = document.getElementById("app");

const players = [];

class Tile {
    constructor(id, tileText) {
        this.id = id;
        this.tileText = tileText;
        this.clicked = false;
    }
}