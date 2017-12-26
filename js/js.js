$('#search').keyup(function() {
    var searchField = $('#search').val();
    var myExp = new RegExp(searchField, "i");
    console.log(myExp !=-1);
    $.getJSON('phones.json', function(data) {
        var output = '<ul class="searchresults">';
        $.each(data, function(key, value){
            if ((value.name.search(myExp) != -1) || (value.snippet.search(myExp) != -1)) {
                output += '<li>';
                output += '<h2>'+ value.name +'</h2>';
                output += '<div class="content">';
                output +='<img src="img/' + value.imageUrl + '"alt="'+value.name+'" + >';
               
                output += '<p>'+ value.snippet +'</p>';
                output += '<button class="btn_buy">Buy</button>';
                output += '</div>';
                
                output += '</li>';
            }
        });
        output += '</ul>';
        $('#update').html(output);
    });
});
var inp = document.getElementById('search');
var area = document.querySelector('.searcharea');
inp.onfocus = function(){
    area.style.transition = 'all 0.5s ease-out';
    area.style.backgroundColor = 'rgba(111, 143, 183, 1.0)';
}
inp.onblur = function(){
    area.style.backgroundColor = '';
}