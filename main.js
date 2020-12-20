let tree = new AutoCompleteTrie("root")

$('#input').keyup(function(){
    let word = $("#input").val()
    console.log(word)
    let res = tree.predictWord(word)
    if(res === "no autocompleted available"){
        noSuggestion(res)
    }
    else{
        renderList(res)
    }
})

let search = function(){
    $('.result').empty()
    let word = $("#input").val()
    tree.addWord(word)
}