module.exports = function reverse (n) {

        let plus = Math.abs(n);
        let str = String(plus).split("").reverse().join(""); 
        return Number(str);
    
}

