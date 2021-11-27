$(function(){
    console.log(beteenden)

    var $accordion = $('#accordion')

    $(beteenden).each(function(index, beteende){
        $accordion
            .append('<b>' + beteende.Id + ' ' + beteende.Title + '</b> - ' + beteende.Description + '</br>')
           // .append(  + '</p>')
    })

    // $(beteenden).each(function(index, beteende){
    //     $accordion
    //         .append('<h3>' + beteende.order + ' ' + beteende.title + '</h3>')
    //         .append('<div><p>' + beteende.description + '</p></div>')
    // })

    // $accordion.accordion()
        
    //var temp = JSON.parse(beteenden)
    // $.getJSON("beteenden", function(data){
    //     console.log(data)
    // })
    // .fail(function(){
    //     console.log
    // })
});