import * as fs from 'fs';

function getValueChallenge1(file: string): void {
    const data = fs.readFileSync(file, 'utf8');
    const regex = /mul\(\d+,\d+\)/g;
    let sum = 0;

    const matches = data.match(regex);

    if (matches) {
        for (let i = 0; i < matches.length; i++) {
            const n1 = parseInt(matches[i].split('(')[1].split(',')[0]);
            const n2 = parseInt(matches[i].split(',')[1].split(')')[0]);
            sum += n1 * n2;
        }
    }

    console.log(sum);
}

getValueChallenge1('values.txt')

function getValueChallenge2(file: string): void {
    const data = fs.readFileSync(file, 'utf8');
    const regex = /do\(\)|don't\(\)|mul\(\d+,\d+\)/g;
    let sum = 0;
    let enabled = true;

    const matches = data.match(regex);

    if(matches){
        for (let i = 0; i < matches.length; i++) {
            if(matches[i] === "do()"){
                enabled = true;
            } else if(matches[i] === "don't()"){
                enabled = false;
            } else {
                if(enabled){
                    const n1 = parseInt(matches[i].split('(')[1].split(',')[0]);
                    const n2 = parseInt(matches[i].split(',')[1].split(')')[0]);
                    sum += n1 * n2;
                }
            }
        }
    }

    console.log(sum);
}

getValueChallenge2('values.txt')