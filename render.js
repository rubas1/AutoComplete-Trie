const renderList = function(words){
    $('.result').empty()
    const source = $("#suggest-template").html()
    const template = Handlebars.compile(source)
    const newHTML = template({resArr: words})
    $('.result').append(newHTML)
}

const noSuggestion = function(word){
    $('.result').empty()
    $('.result').append("<p>" + word + "</p>")
}