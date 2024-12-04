import * as fs from 'fs';

function getXmasOccurrences(file: string): void {
    const data = fs.readFileSync(file, 'utf8');
    const grid = data.trim().split('\n').map(line => line.split(''));
    const word = 'XMAS';
    const directions = [
        [0, 1], [0, -1], [1, 0], [-1, 0], // Horizontal and Vertical
        [1, 1], [1, -1], [-1, 1], [-1, -1] // Diagonals
    ];
    let occurrences = 0;

    function searchWord(x: number, y: number, dx: number, dy: number): boolean {
        for (let i = 0; i < word.length; i++) {
            const nx = x + i * dx;
            const ny = y + i * dy;
            if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length || grid[nx][ny] !== word[i]) {
                return false;
            }
        }
        return true;
    }

    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[0].length; y++) {
            for (const [dx, dy] of directions) {
                if (searchWord(x, y, dx, dy)) {
                    occurrences++;
                }
            }
        }
    }

    console.log(occurrences)
}

getXmasOccurrences('values.txt')
