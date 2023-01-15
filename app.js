const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit redit.com/r/${subreddits[i]}`)
// }

for (let sub of subreddits) {
    // console.log(sub)
    console.log(`Visit redit.com/r/${sub}`)
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student)
    }
}

for (let char of "Hello World") {
    console.log(char)
}

