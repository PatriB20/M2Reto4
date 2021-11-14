class Movie{
    constructor(title,releaseYear,genre,languaje,plataform,mainCharacter,imagen){
        this.title = title;
        this.releaseYear = releaseYear;
        this.genre = genre;
        this.language = languaje;
        this.plataform = plataform;
        this.mainCharacterName = mainCharacter;
        this.imagen=imagen
}
      
}


let movie1= new Movie ("The wolf of Wall Street",
                    2013,
                    "comedy",
                    "English",
                    "Netflix",
                    "Jordan Belfort",
                    "./lobo.jpg")



let movie2=new Movie ("Spider-Man: Homecoming",
                        2017,
                        "sciencie fiction",
                        "English",
                        "Netflix",
                        "Peter Parker",
                        "./spiderman.jpg")


let movie3 = new Movie("The Big Short",
                    2015,
                    "biography",
                    "English",
                    "Netflix",
                    "Michael Burry",
                    "./bigShort.jpg")

let peliculas = []



function añadirPelicula(){
        let newMovie = new Movie (
            document.getElementById("title").value,
            document.getElementById("releaseYear").value,
            document.getElementById("genre").value,
            document.getElementById("languaje").value,
            document.getElementById("plataform").value,
            document.getElementById("character").value,
            document.getElementById("imagen").value
        )
    peliculas.push(newMovie)
    console.log(peliculas)
}

function pintarPeliculas()
{
for (let i=0;i<peliculas.length;i++)
document.getElementById("todoPeliculas").innerHTML += ` <div class="card" style="width: 18rem;">
                                                             <img src="${peliculas[i].imagen}" class="card-img-top" alt="...">
                                                             <div class="card-body">
                                                                <h5 class="card-title">${peliculas[i].title}</h5>
                                                                <p class="card-text">Año de estreno: ${peliculas[i].releaseYear}</p>
                                                                <p class="card-text">Genero: ${peliculas[i].genre}</p>
                                                                <p class="card-text">Idioma: ${peliculas[i].language}</p>
                                                                <p class="card-text">Plataforma: ${peliculas[i].plataform}</p>
                                                                <p class="card-text">Personaje principal: ${peliculas[i].mainCharacter}</p>
                                                           </div>
                                                         </div>

                      `                                  
}