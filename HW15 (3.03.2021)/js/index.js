$(function() {
    (function(name) {
        var container = $('#pagination-' + name);
        container.pagination({
            dataSource: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?',
            locator: 'items',
            totalNumber: 50,
            pageSize: 2,
            showPageNumbers: true,
            showPrevious: true,
            showNext: true,
            showNavigator: true,
            showFirstOnEllipsisShow: true,
            showLastOnEllipsisShow: true,
            ajax: {
                beforeSend: function() {
                    container.prev().html('Loading data from flickr.com ...');
                }
            },
            callback: function(response, pagination) {
                window.console && console.log(22, response, pagination);
                var dataHtml = '<ul>';

                $.each(response, function (index, item) {
                    dataHtml += '<li>' + item.title + '</li>';
                });

                dataHtml += '</ul>';

                container.prev().html(dataHtml);
            }
        })
    })('demo2');
});