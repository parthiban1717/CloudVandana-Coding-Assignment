function reverseWords(sentence) {
    let words = sentence.split(" ");
    let reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });
    return reversedWords.join(' ');
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
