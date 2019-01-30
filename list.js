function list(x,y) {
    if (x<y) {
        while(x<=y) {
            return console.log(x);
            x=x+1;
        }
    }
    else {
        return -1;
    }
}

module.exports = list;