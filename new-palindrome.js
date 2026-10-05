let str = "Hello Ma’am, my name is Ankit. I’m new here, and Bob referred me. I belong to the TT family. Nice to meet you!";

let words = str.split(" ");

let smallest_palindrome = "";

for (let word of words) {

    let reverse = word.split("").reverse().join("");

    if (word.toLowerCase() === reverse.toLowerCase()) {

        if (smallest_palindrome === "" || word.length < smallest_palindrome.length) {
            smallest_palindrome = word;
        }
    }
}

console.log(smallest_palindrome);
