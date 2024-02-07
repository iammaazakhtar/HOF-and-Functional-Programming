// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.

// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.

let books = [
  {
    title: "The Boy Who Wrote a Constitution",
    author: "Rajesh Talwar",
    publicationYears: 2014,
  },
  {
    title: "Monsoon",
    author: "Sahitya Akademi",
    publicationYears: 2003,
  },
  {
    title: "Atal Bihari Vajpayee",
    author: "Sagarika Ghose",
    publicationYears: 2006,
  },
  {
    title: "Mamata: Beyond 2021",
    author: "Jayanta Ghosal",
    publicationYears: 2018,
  },
  {
    title: "The Legend of Birsa Munda",
    author: "Tuhin A Sinha and Ankita Verma",
    publicationYears: 2003,
  },
  {
    title: "Suparipalana",
    author: "Dr. Shailendra Joshi",
    publicationYears: 2004,
  },
  {
    title: "Sach Kahun Toh",
    author: "Neena Gupta",
    publicationYears: 2020,
  },
];

filterAndCapitalizeBooks = books
  .filter((book) => book["publicationYears"] >= 2010)
  .map((book) => ({
    title: book.title,
    author: book.author.toUpperCase(),
    publication_year: book.publicationYears,
  }));

console.log(filterAndCapitalizeBooks);
