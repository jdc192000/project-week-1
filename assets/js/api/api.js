


(function($){
      $(document).ready(function(){
        $('#etsy-search').bind('submit', function() {
            api_key = "jj5oax0obbtrln9wp4rgwgmp";
            terms = $('#etsy-terms').val();
            etsyURL = "https://openapi.etsy.com/v2/listings/active.js?keywords="+
                terms+"&limit=12&includes=Images:1&api_key="+jj5oax0obbtrln9wp4rgwgmp;

            $('#etsy-images').empty();
            $('<p>').text('Searching for '+terms).appendTo('#etsy-images');

            $.ajax({
                url: "https://openapi.etsy.com/v2/listings/active?api_key=jj5oax0obbtrln9wp4rgwgmp"
                dataType: 'jsonp',
                success: function(data) {
                    if (data.ok) {
                        $('#etsy-images').empty();
                        if (data.count > 0) {
                            $.each(data.results, function(i,item) {
                                $("<img/>").attr("src", item.Images[0].url_75x75).appendTo("#etsy-images").wrap(
                                    "<a href='" + item.url + "'></a>"
                                );
                                if (i%4 == 3) {
                                    $('<br/>').appendTo('#etsy-images');
                                }
                            });
                        } else {
                            $('<p>No results.</p>').appendTo('#etsy-images');
                        }
                    } else {
                        $('#etsy-images').empty();
                        alert(data.error);
                    }
                }
            });

            return false;
        })
    });

})(jQuery);



    <form id="etsy-search">
        <input id="etsy-terms" size="32">
        <button>Search!</button>
    </form>

    <div id="etsy-images"></div>

