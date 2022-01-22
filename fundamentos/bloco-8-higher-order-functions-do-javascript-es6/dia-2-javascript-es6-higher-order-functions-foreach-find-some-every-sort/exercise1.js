const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const authorBornIn1947 = (array, year) =>
  array.find((write) => write.author.birthYear === year).author.name;

// Adicione o código do exercício aqui:
const writer = authorBornIn1947(books, 1947);
//console.log(writer)

// 2 - Retorne o nome do livro de menor nome.

function smallerName() {
  let small = books[0].name.length;
  let nameBook = books[0].name;

  books.forEach((element) => {
    const sizeElement = element.name.length;
    if (sizeElement < small) {
      small = sizeElement;
      nameBook = element.name;
    }
  });
  return nameBook;
}

//console.log(smallerName());

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

const getNamedBook = (array, qtdeCaracter) =>
  array.find((element) => element.name.length === qtdeCaracter);
const booksWhith26Elements = getNamedBook(books, 26);

//console.log(booksWhith26Elements);

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

books.sort((a, b) => {
  if (a.releaseYear > b.releaseYear) {
    return -1;
  } else if (a.releaseYear < b.releaseYear) {
    return 1;
  } else {
    return 0;
  }
});

/* console.log(books); */

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

const everyoneWasBornOnSecXX = (list, yearInicial, yearFinal) => {
  return list.every((element) => element.author.birthYear >= yearInicial && element.author.birthYear <= yearFinal);  
} 
const checkWhasBorn = everyoneWasBornOnSecXX(books, 1801, 2000);
 console.log(checkWhasBorn); 


// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.


const someBookWasReleaseOnThe80s= (list, decadaInicial, decadaFinal) => list.some((element) =>{
   let year = element.releaseYear;
   year = year.toString();
   const decada = parseInt(year.substring(year.length-2));

   return decada >= decadaInicial && decada <= decadaFinal; 
  
});
/* console.log( someBookWasReleaseOnThe80s(books, 80, 89)) */



// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

const authorUnique = () => {

return  books.every((book)=> !books.some((bookOnly)=>
    (book.author.birthYear === bookOnly.author.birthYear)&&
    (book.author.name !== bookOnly.author.name)
  ))

}



console.log(authorUnique())
