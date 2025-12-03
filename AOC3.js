let voltageValues = []

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('AOC3.txt'),
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    voltageValues.push(line);
});

rl.on('close', () => {
    function partOne() {
        let sum = 0;
        let checkData = [987654321111111, 811111111111119, 234234234234278, 818181911112111]
        voltageValues.forEach((line) => {
            const LineStr = line.toString().trim();
            let maxVoltage = 0
            for (let i = 0; i < LineStr.length; i++) {
                let tempMaxVoltage = maxVoltage
                for (let j = i + 1; j < LineStr.length; j++) {
                    if (parseInt(LineStr[i] + LineStr[j]) > tempMaxVoltage) {
                        tempMaxVoltage = parseInt(LineStr[i] + LineStr[j]);
                    }
                }
                if (tempMaxVoltage > maxVoltage) {
                    maxVoltage = tempMaxVoltage;
                }
            }
            sum += maxVoltage;
        });
        console.log(sum);
    }
    // partOne();

    function partTwo() {
        function maxJoltage(numStr, k = 12) {
            let stack = [];
            let toRemove = numStr.length - k;
            for (let digit of numStr) {
                while (
                    stack.length &&
                    toRemove > 0 &&
                    stack[stack.length - 1] < digit
                ) {
                    stack.pop();
                    toRemove--;
                }
                stack.push(digit);
            }
            return Number(stack.slice(0, k).join(''));
        }
        let total = voltageValues.reduce((sum, num) => sum + maxJoltage(num, 12), 0);
        console.log(total);
    }
    partTwo();
});