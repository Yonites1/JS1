const Data = `[ 
    {
        "Title": "Rich Dad, Poor Dad",
        "Author": "Rober Kiyosaki",
        "PublishedYear": 1997,
        "Price": 29.99
    },
    
    {
        "Title": "Tuesday with Morrie",
        "Author": "Mitch Albom",
        "PublishedYear": 2007,
        "Price": 40
    },
    
    {
        "Title": "Inside the Hotel Rwanda",
        "Author": "Eduard Kayihura",
        "PublishedYear": 2014,
        "Price": 15
},

{
        "Title": "Them",
        "Author": "Nathan McCall",
        "PublishedYear": 2008,
        "Price": 10
}
]`

const parsedBooks = JSON.parse(Data);
console.log("ParsedBooks", parsedBooks);

const priceSum = parsedBooks.reduce((total, book)=>total+book.Price, 0);
console.log("priceSum", priceSum);

const filteredBooks = parsedBooks.filter((book)=>book.PublishedYear<2000);
console.log("filteredBooks", filteredBooks);

const sortedbooks = parsedBooks.sort((book1, book2)=>book1.PublishedYear - book2.PublishedYear);
console.log("sortedbooks", sortedbooks);


