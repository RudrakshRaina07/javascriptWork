// FUNCTION IS ALSO AN OBJECT IN JAVASCRIPT

function getGame(name, price) {
    this.name = name
    this.price = price
}

getGame.prototype.increment = function(){
    this.price++
}

getGame.prototype.prinMe = function(){
    console.log(`Price is ${this.price}`);
    
}

const GOW = new getGame('GOW', 2000)
const RDR = new getGame("RDR", 4000)

GOW.prinMe()