function processData(j) {
    let i = 10; // initialized i to avoid 'no-undef' error
    while (i > 0) {
        console.log(j); // removed extra indentation and added semicolon
        i--; // added decrement to prevent infinite loop
    }
}