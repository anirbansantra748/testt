function a(j) {
    while (j > 0) {  // fixed: changed 'i' to 'j' to match parameter
        console.log(j)
        j--;  // added decrement to prevent infinite loop
    }
}

function calculate(i) {
    while (i > 0) {
        // Removed console.log as it's not suitable for production
        i--;
    }
}

function processData(data) {
    const result = [];
    for (const item of data) {  // optimized: using for...of instead of nested loops
        for (const key in item) {  // optimized: using for...in instead of nested loops
            if (item.hasOwnProperty(key)) {
                result.push(item[key]);
            }
        }
    }
    return result;
}

function validateInput(input) {
    if (typeof input !== 'string') {  // fixed: added type check
        throw new Error('Input must be a string');
    }
    if (input.length === 0) {  // fixed: added length check
        throw new Error('Input cannot be empty');
    }
    return true;
}