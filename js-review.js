console.log("Introduction to JavaScript");
FizzBuzz();
countBs("BaBBy");
countBs("Bob");
countChar("Davdd", "d");

function FizzBuzz() {
    var i;
    for(i = 1; i < 101; i++) {
        if(((i % 3) == 0) && ((i % 5)) != 0) {
            console.log("Fizz");
        }

        else if(((i % 5) == 0) && ((i % 3)) != 0) {
            console.log("Buzz");
        }

        else if(((i % 3) == 0) && ((i % 5) == 0)) {
            console.log("FizzBuzz");
        }
        else {
            console.log(i);
        }
    }
}

function countBs(phrase) {
    countChar(phrase, 'B');
}

function countChar(phrase, character) {
    var i;
    var counter = 0;
    for(i = 0; i < phrase.length; i++) {
        if((phrase.charAt(i)) === character) {
            counter++;
        }
    }

    return console.log("In the phrase " + phrase + ", there are " + counter + " " + character + "'s");
}