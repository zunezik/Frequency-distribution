function calcWords() {
    let text = document.getElementById("text").value;
    let wordsArray =  text.split(" ");
    let wordCountMap = new Map();

    for (let i = 0; i < wordsArray.length; i++) {
         checkMap(wordsArray[i], wordCountMap);
    }

    let output = "";
    for (let [key, value] of wordCountMap) {
        output +=  key + " = " + value + ";<br>";
    }

    let result = document.getElementById("result");
    result.innerHTML = output;
}

function checkMap(word, wordCountMap) {
    if (!wordCountMap.has(word)) {
        wordCountMap.set(word, 1);
    } else {
        let int = wordCountMap.get(word);
        wordCountMap.set(word, ++int);
    }
}