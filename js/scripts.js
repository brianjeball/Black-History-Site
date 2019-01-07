/** Variable  */
// const { data } = require('../data')
// console.log(data);

/** Random Quote Section */

let quotes = [
    {
        "id": 0,
        "quote": "So I have no problem writing a terrible first draft. I pretty much journal until I get to the point when I say, Okay, now there needs to be a first draft of this…",
        "source": "Barry Jenkins",
        "year": 2018,
        "link": "https://www.imdb.com/name/nm1503575/?ref_=nv_sr_1",
        "image_urls": "images/barry.jpeg"
    },
    {
        "id": 1,
        "quote": "If you're on Twitter, what you're saying is, 'I'm important enough for you to care what I think.'",
        "source": "Donald Glover",
        "year": 2018,
        "citation": "https://www.brainyquote.com/quotes/donald_glover_493556",
        "link": "https://www.imdb.com/name/nm2255973/",
        "image_urls": "images/donald.jpeg"
    },
    {
        "id": 2,
        "quote": "There's something very important about films about black women and girls being made by black women. It's a reflection as opposed to an interpretation.",
        "source": "Ava DuVernay",
        "year": 2018,
        "citation": "https://www.brainyquote.com/quotes/ava_duvernay_770527",
        "link": "https://www.imdb.com/name/nm1148550/?ref_=nv_sr_1",
        "image_urls": "images/ava.jpeg"
    },
    {
        "id": 3,
        "quote": "Being born gay, black, and female is not a revolutionary act. Being proud to be a gay black female is.",
        "source": "Lena Waithe",
        "year": 2018,
        "link": "https://www.imdb.com/name/nm2913119/?ref_=nv_sr_1",
        "image_urls": "images/lena.jpeg"
    },
    {
        "id": 4,
        "quote": "What excites me is just taking some time to breathe in life. The mundane is very exciting.",
        "source": "Viola Davis",
        "year": 2018,
        "citation": "",
        "link": "https://www.imdb.com/name/nm0205626/?ref_=nv_sr_1",
        "image_urls": "images/viola.jpeg"
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

$('#loadQuote').on('click', function(){
    let actualQuote = getRandomQuote(quotes);

    if(!actualQuote.link){
        $('.link').hide();
    } else {
        $('.link').show();
        $('.link a').attr('href', `${actualQuote.link}`)
    }

    $('.quote').text(`${actualQuote.quote}`);
    $('.source').text(`${actualQuote.source}`)
    $('.year').text(`${actualQuote.year}`)
    $('.image').attr('src', `${actualQuote.image_urls}`)

    if(!actualQuote.citation){
        $('.citation').hide();
    } else {
        $('.citation').show();
        $('.citation').text(`${actualQuote.citation}`)
    }



    console.log("Button Clicked")
})

/** ================================================== */