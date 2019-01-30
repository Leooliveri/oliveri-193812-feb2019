function list(x,y) {
    if (x<y) {
        for (i=x;i<=y;i++) {
            console.log(i);
        }
    }
    else {
        return -1;
    }
}

module.exports = list;