const claypot = (from, to) => {
    for(let i=from; i<to; i++) {
        if(i%3===0 && i%5===0) {
            console.log('Claypot');
        } else if (i%3===0) {
            console.log('Clay');
        } else if(i%5===0) {
            console.log('pot');
        } else {
            console.log(i);
        }
    }
}