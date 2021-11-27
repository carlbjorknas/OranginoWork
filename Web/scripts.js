$(function () {

    $(behaviorCards).each(function (index, card) {
        var cardHtml = `
            <div class="card ${card.InCollectionOfIntroCards ? 'InCollectionOfIntroCards' : ''}">
                <div class="cardFrame">
                    <div class="cardTitle">
                        ${card.Title}
                    </div>
                    <div class="cardDescription">
                        ${card.Description}
                    </div>
                    <div class="cardId">
                        (${card.Id})
                    </div>
                </div>
            </div>`;

        $('body').append(cardHtml);
    })


    //console.log(beteenden)

    //var $accordion = $('#accordion')

    //$(beteenden).each(function(index, beteende){
    //    $accordion
    //        .append('<b>' + beteende.Id + ' ' + beteende.Title + '</b> - ' + beteende.Description + '</br>')
    //       // .append(  + '</p>')
    //})

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