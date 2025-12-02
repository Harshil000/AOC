let rangeArr = [
    "1090286-1131879",
    "3259566-3404881",
    "138124-175118",
    "266204727-266361099",
    "16765-24272",
    "7657360692-7657593676",
    "88857504-88926597",
    "6869078-6903096",
    "48444999-48532270",
    "61427792-61580535",
    "71-103",
    "8077-10421",
    "1920-2560",
    "2-17",
    "951-1259",
    "34-50",
    "28994-36978",
    "1309-1822",
    "9393918461-9393960770",
    "89479-120899",
    "834641-988077",
    "5389718924-5389797353",
    "34010076-34214499",
    "5063-7100",
    "607034-753348",
    "19098586-19261191",
    "125085556-125188689",
    "39839-51927",
    "3246-5037",
    "174-260",
    "439715-473176",
    "187287-262190",
    "348-535",
    "58956-78301",
    "4388160-4505757",
    "512092-584994",
    "13388753-13534387"
];

let demoRange = [
    "11-22",
    "95-115",
    "998-1012",
    "1188511880-1188511890",
    "222220-222224",
    "1698522-1698528",
    "446443-446449",
    "38593856-38593862",
    "565653-565659",
    "824824821-824824827",
    "2121212118-2121212124"
]

// --- Day 2: Gift Shop ---
// You get inside and take the elevator to its only other stop: the gift shop. "Thank you for visiting the North Pole!" gleefully exclaims a nearby sign. You aren't sure who is even allowed to visit the North Pole, but you know you can access the lobby through here, and from there you can access the rest of the North Pole base.
// As you make your way through the surprisingly extensive selection, one of the clerks recognizes you and asks for your help.
// As it turns out, one of the younger Elves was playing on a gift shop computer and managed to add a whole bunch of invalid product IDs to their gift shop database! Surely, it would be no trouble for you to identify the invalid product IDs for them, right?
// They've even checked most of the product ID ranges already; they only have a few product ID ranges (your puzzle input) that you'll need to check. For example:
// 11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
// 1698522-1698528,446443-446449,38593856-38593862,565653-565659,
// 824824821-824824827,2121212118-2121212124
// (The ID ranges are wrapped here for legibility; in your input, they appear on a single long line.)

// The ranges are separated by commas (,); each range gives its first ID and last ID separated by a dash (-).
// Since the young Elf was just doing silly patterns, you can find the invalid IDs by looking for any ID which is made only of some sequence of digits repeated twice. So, 55 (5 twice), 6464 (64 twice), and 123123 (123 twice) would all be invalid IDs.
// None of the numbers have leading zeroes; 0101 isn't an ID at all. (101 is a valid ID that you would ignore.)
// Your job is to find all of the invalid IDs that appear in the given ranges. In the above example:

// 11-22 has two invalid IDs, 11 and 22.
// 95-115 has one invalid ID, 99.
// 998-1012 has one invalid ID, 1010.
// 1188511880-1188511890 has one invalid ID, 1188511885.
// 222220-222224 has one invalid ID, 222222.
// 1698522-1698528 contains no invalid IDs.
// 446443-446449 has one invalid ID, 446446.
// 38593856-38593862 has one invalid ID, 38593859.
// The rest of the ranges contain no invalid IDs.
// Adding up all the invalid IDs in this example produces 1227775554.

// What do you get if you add up all of the invalid IDs?

// Your puzzle answer was 31839939622.

//PartOne mistaken Code
// let sum = 0
// for (let i of demoRange) {
//     let indexes = i.split("-");
//     for (let j = parseInt(indexes[0]); j <= parseInt(indexes[1]); j++) {
//         let countobj = {}
//         for (let k of j.toString()) {
//             if (countobj[k]) {
//                 countobj[k]++
//             } else {
//                 countobj[k] = 1
//             }
//         }
//         let flag = 0
//         console.log(countobj)
//         for (let k in countobj) {
//             if (countobj[k] % 2 != 0) {
//                 flag = -1
//                 break
//             }
//         }
//         if (flag == 0) {
//             console.log(j)
//             sum = sum + j
//         }
//         console.log(sum)
//     }
// }


// Part One Correct Code
function PartOne(rangeArr) {
    let sum = 0
    for (let i of rangeArr) {
        let indexes = i.split("-");
        for (let j = parseInt(indexes[0]); j <= parseInt(indexes[1]); j++) {
            if (j.toString().length % 2 != 0) {
                continue
            }
            let firstHalf = j.toString().slice(0, Math.floor(j.toString().length / 2))
            let secondHalf = j.toString().slice(Math.ceil(j.toString().length / 2))
            if (firstHalf == secondHalf) {
                sum += j
            }
        }
    }
    console.log(sum)
}
PartOne(rangeArr)

// --- Part Two ---
// The clerk quickly discovers that there are still invalid IDs in the ranges in your list. Maybe the young Elf was doing other silly patterns as well?
// Now, an ID is invalid if it is made only of some sequence of digits repeated at least twice. So, 12341234 (1234 two times), 123123123 (123 three times), 1212121212 (12 five times), and 1111111 (1 seven times) are all invalid IDs.

// From the same example as before:

// 11-22 still has two invalid IDs, 11 and 22.
// 95-115 now has two invalid IDs, 99 and 111.
// 998-1012 now has two invalid IDs, 999 and 1010.
// 1188511880-1188511890 still has one invalid ID, 1188511885.
// 222220-222224 still has one invalid ID, 222222.
// 1698522-1698528 still contains no invalid IDs.
// 446443-446449 still has one invalid ID, 446446.
// 38593856-38593862 still has one invalid ID, 38593859.
// 565653-565659 now has one invalid ID, 565656.
// 824824821-824824827 now has one invalid ID, 824824824.
// 2121212118-2121212124 now has one invalid ID, 2121212121.
// Adding up all the invalid IDs in this example produces 4174379265.

// What do you get if you add up all of the invalid IDs using these new rules?

// Your puzzle answer was 41662374059.
//Part Two 
function check(numStr) {
    let len = numStr.length;
    for (let subLen = 1; subLen <= Math.floor(len / 2); subLen++) {
        if (len % subLen !== 0) continue;
        let pattern = numStr.slice(0, subLen);
        let repeated = pattern.repeat(len / subLen);
        if (repeated === numStr) return parseInt(numStr);
    }
    return 0;
}

function PartTwo(rangeArr) {
    let sum = 0
    for (let i of rangeArr) {
        let indexes = i.split("-");
        for (let j = parseInt(indexes[0]); j <= parseInt(indexes[1]); j++) {
            let strNum = j.toString()
            let toAdd = check(strNum)
            sum += toAdd
        }
    }
    console.log(sum)
}
PartTwo(rangeArr)