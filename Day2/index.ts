import * as fs from 'fs';

function isTheListSortedAndValid(list: number[], useProblemDampener: boolean = false): boolean {
    // Funzione di verifica base per una sequenza
    const isValidSequence = (sequence: number[]): boolean => {
        let isAscending = true;
        let isDescending = true;

        for (let i = 0; i < sequence.length - 1; i++) {
            const diff = sequence[i + 1] - sequence[i];

            // Controllo differenza tra 1 e 3
            if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
                return false;
            }

            if (diff > 0) isDescending = false;
            if (diff < 0) isAscending = false;
        }

        return isAscending || isDescending;
    };

    // Verifica senza Problem Dampener
    if (!useProblemDampener) {
        return isValidSequence(list);
    }

    // Con Problem Dampener: prova a rimuovere ogni elemento
    for (let removeIndex = 0; removeIndex < list.length; removeIndex++) {
        const modifiedList = list.filter((_, index) => index !== removeIndex);
        
        if (isValidSequence(modifiedList)) {
            return true;
        }
    }

    return false;
}

function getValue(file: string): void {
    const data = fs.readFileSync(file, 'utf8');
    const lists: number[][] = []
    let validReports = 0
    
    data.split('\n').forEach((line) => {
        const list = line.trim().split(' ').map(Number)
        lists.push(list)
    })

    for (let i = 0; i < lists.length; i++) {
        const list = lists[i]
        if (isTheListSortedAndValid(list, true)) {
            validReports++
        }
    }

    console.log(validReports)
}

getValue('values.txt')
