$('#indexSearchBtn').on('click', function () {
    if ($('.search-panel').is(':hidden')) {
        $('.default-hide').each(function () {
            $(this).hide()
        })
        $('.search-panel').show()
    } else {
        $('.search-panel').hide()
    }
})

$('#indexListBtn').on('click', function () {
    if ($('.index-panel').is(':hidden')) {
        $('.default-hide').each(function () {
            $(this).hide()
        })
        $('.index-panel').show()
    } else {
        $('.index-panel').hide()
    }
});