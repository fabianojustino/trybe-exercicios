const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


// 1
const formatedBookNames = ( )=>  books.map((book)=>  `${book.name} - ${book.genre} - ${book.author.name}` )
//console.log(formatedBookNames(books));

// 2
const nameAndAge= (listBook)=> {
return  listBook.map((book)=> (
  {
  author: book.author.name ,
  age: (book.releaseYear - book.author.birthYear)
  }
)).sort((a,b)=> a.age - b.age)
}

//console.log(nameAndAge(books));

// 3
/* const fantasyOrScienceFiction = (listBook)=> listBook.filter((book)=> book.genre !=='Terror') */
const fantasyOrScienceFiction = (listBook)=> listBook.filter((book)=> book.genre ==='Ficção Científica' || book.genre === 'Fantasia')
//console.log(fantasyOrScienceFiction(books));

// 4
const oldBooksOrdered= (listBook, yearActual)=> {
return  listBook.filter((book)=> ((yearActual - book.releaseYear)>60)).sort((a , b) => a.releaseYear - b.releaseYear)
}

//console.log(oldBooksOrdered(books, new Date().getFullYear()));


// 5
const fantasyOrScienceFictionAuthors= (listBook)=> {
 return listBook
.filter((book)=> (book.genre==='Ficção Científica' || book.genre === 'Fantasia'))
.map((book) => book.author.name)
.sort();
}
//console.log(fantasyOrScienceFictionAuthors(books));

// 6
const oldBooks= (listBook, currentYear)=> listBook
.filter((book)=> (currentYear - book.releaseYear > 60))
.map((book)=> book.name)
 console.log(oldBooks(books, new Date().getFullYear())); 


const authorWith3DotsOnName= (listbook) => listbook
.filter((book)=> (book.author.name).split('.').length === 4)[0].name


console.log(authorWith3DotsOnName(books));

