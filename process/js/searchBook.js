$('#searchBtn').on('click', function () {
    var text = $('#searchText').val()
    searchBook(text)
})

var cheerio = require('cheerio')
var superagent = require('superagent')
var template = require('art-template')

function searchBook(text) {
    superagent.get('http://zhannei.baidu.com/cse/search?s=920895234054625192&q=' + encodeURI(text))
        .end(function (err, sres) {
            if (err) {
                return next(err)
            }
            var $$ = cheerio.load(sres.text)
            // var items = []
            var result = $$('.result-game-item-detail');
            var data = new Object()
            if (result.length == 0) {
                console.log('null')
            } else {
                var titles = []
                result.each(function (idx, element) {
                    var title = $$(element).find('.result-game-item-title-link').attr('title')
                    titles.push(title)
                    console.log(title)
                })
                data.titles = titles
                var html = template(__dirname + '/process/template/list-group.art', data)
                $('.list-group').html(html)
            }
        })
}