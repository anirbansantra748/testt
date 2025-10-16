// Define 'i' before using it
let i = j;

// Fix 'a' is defined but never used issue
function a(j) {
    // Initialize 'i' to a valid value
    let i = j;

    // Fix 'i' is not defined issue
    while (i > 0) {
        // Remove console statement for production
        // console.log(i);
        i--;
    }
}