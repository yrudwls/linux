// 1. add
// 10, 20 --> 30
const sum = (a, b) => {
    return a + b;
};

// 2. abs
// 10, -20 --> 30
const abs = (a, b) => {
    if (a < 0) {
        a *= -1;
    }
    if (b < 0) {
        b *= -1;
    }
    return a + b;
};

exports.abs = abs;
exports.sum = sum;