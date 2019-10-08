function calcFrequency() {
    let words = getText();
    let wordCount = calcWords(words);
    showResult(wordCount);
}

function getText() {
    let text = document.getElementById("text").value;
    let words =  text.split(" ");

    return words;
}

function calcWords(words) {
    let wordCount = words.reduce(incrementMap, new Map());

    return wordCount;
}

function incrementMap(map, key) {
    if (!map.has(key)) {
        map.set(key, 1);
    } else {
        let int = map.get(key);
        map.set(key, ++int);
    }

    return map;
}

function showResult(wordCount) {
    let output = "";
    for (let [key, value] of wordCount) {
        output +=  key + " = " + value + ";<br>";
    }

    let result = document.getElementById("result");
    result.innerHTML = output;
}