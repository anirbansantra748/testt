function processItem(j) { // renamed from 'a' to be more descriptive
    let i = 5; // defined 'i' to prevent reference error
    while (i > 0) {
        // removed console.log as it shouldn't be in production
        i--; // added decrement to prevent infinite loop
    }
}