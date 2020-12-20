class AutoCompleteTrie{
    constructor(value){
        this.letter = value
        this.children = new Array(26).fill(null)
        this.endOfWord = false
    }

    addWord(word){
        let node = this
        for(let i=0; i < word.length; i++){
            if(node.children[word[i].charCodeAt() - 97] === null){
                node.children[word[i].charCodeAt() - 97] = new AutoCompleteTrie(word[i].toLowerCase())
            }
            node = node.children[word[i].charCodeAt() - 97]
            if(i === word.length - 1){
                node.endOfWord = true
            }
        }
    }

    findWord(word){
        let node = this
        for(let i=0; i < word.length; i++){
            if(node.children[word[i].charCodeAt() - 97] === null){
                return false
            }
            node = node.children[word[i].charCodeAt() - 97]
        }
        return true
    }

    getRemainingTree(node, word){
        for(let i=0; i < word.length; i++){
            if(node.children[word[i].charCodeAt() - 97] === null){
                return "no autocompleted available"
            }
            node = node.children[word[i].charCodeAt() - 97]
        }
        return node
    }

    allWordsHelper(node, word, resArr){
        for(let i=0; i < 26; i++){
            if(node.children[i] != null){
                if(node.children[i].endOfWord === true){
                    resArr.push(word + node.children[i].letter)
                }
            this.allWordsHelper(node.children[i], word + node.children[i].letter, resArr)
            }
        }
        return resArr
    }

    predictWord(word){
        let resArr = []
        let node = this.getRemainingTree(this, word)
        if(node === "no autocompleted available"){
            return "no autocompleted available"
        }
        else{   
            if(node.endOfWord){
            resArr.push(word)
        }
        resArr = this.allWordsHelper(node, word, resArr)
        return resArr}
    }
}
