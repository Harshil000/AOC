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
// PartOne(rangeArr)

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