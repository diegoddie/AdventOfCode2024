import * as fs from 'fs';

function getValue(file: string): void {
    const data = fs.readFileSync(file, 'utf8');
    
    const leftList: number[] = []
    const rightList: number[] = []

    data.split('\n').forEach((line) => {
        const [left, right] = line.split('   ')
        leftList.push(Number(left))
        rightList.push(Number(right))
    })

    // CHALLENGE 1

    leftList.sort()
    rightList.sort()

    let totalDistance = 0

    for (let i = 0; i < leftList.length; i++) {
        totalDistance += Math.abs(leftList[i] - rightList[i])
    }

    console.log(totalDistance) 

    // CHALLENGE 2

    let similarityScore = 0

    for (let i = 0; i < leftList.length; i++) {
        const repetitions = rightList.filter((value) => value === leftList[i]).length
        similarityScore += leftList[i] * repetitions
    }

    console.log(similarityScore)
}

getValue('values.txt')