
/** Random Quote Section */

var quotes = [
    {
        quote: "I have a quote that will be the quotes of all quotes!",
        source: "Quote Master",
        year: 3005
    },
    {
        quote: "Happy holidays brother",
        source: "Borhter Quealy",
        year: 1998
    },
    {
        quote: "This is a Real Quote",
        source: "Brian Ball",
        citation: "Underground Quote Collector",
        year: 2018
    }
]

function getRandomQuote() {
    let RandomQuote = quotes[ Math.floor(Math.random() * quotes.length)]
    return RandomQuote;
}

// function printQuote() {
//     let actualQuote = getRandomQuote(quotes);
//     $('.quote').text(`${actualQuote.quote}`)
// }

$('button').on('click', function(){
    let actualQuote = getRandomQuote(quotes);

    $('.quote').text(`${actualQuote.quote}`);
    $('.source').text(`${actualQuote.source}`)
    $('.year').text(`${actualQuote.year}`)

    if(!actualQuote.citation){
        $('.citation').hide();
    } else {
        $('.citation').show();
        $('.citation').text(`${actualQuote.citation}`)
    }

    console.log("Button Clicked")
})

/** ================================================== */