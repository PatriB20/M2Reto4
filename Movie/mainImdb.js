const fs =require('fs');

class Movie{
    constructor(title,releaseYear,nacionality,genre,actors,director,writer,languaje,plataform,mainCharacterName,producer,distributor,imagen){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.actors =actors;
        this.director = director;
        this.writer = writer;
        this.language = languaje;
        this.plataform = plataform;
        this.mainCharacterName = mainCharacterName;
        this.producer = producer;
        this.distributor = distributor;
        this.imagen=imagen
}
        toPrint(){
            console.log( "\n" + "Título: " + this.title + "\n" +
            "Año: " + this.releaseYear + "\n"+
            "Actores: " + this.actors + "\n"+
            "País: " + this.nacionality + "\n" +
            "Dirigida por: " + this.director + "\n" +
            "Escrita por: " + this.writer + "\n" +
            "Idioma: " + this.language + "\n" +
            "Plataforma: " + this.plataform + "\n" +
            "Es del Universo Marvel: " + this.IsMCUasString() + "\n" +
            "Personaje principal: " + this.mainCharacterName + "\n" + 
            "Producida por: " + this.producer + "\n" +
            "Distribuída por: " + this.distributor + "\n" +
            "Género: " + this.genre);
        }
}
class Imdb{
    constructor(peliculas)
    {
        this.peliculas = peliculas
    }
    printMovies()
    {
        this.peliculas.forEach(peliculilla => peliculilla.toPrint())
    }
    
    showMovie()
    {
        this.peliculas.forEach(pelicula => console.log(pelicula))
    }
    length()
    {
        return this.peliculas.length
    }
    escribirEnFicheroJSON(nombreFichero)
    {
        
        fs.writeFileSync(nombreFichero,JSON.stringify(this.peliculas));
    }
    obtenerInstanciaIMDB(nombreFichero)
    {
        let lectura = fs.readFileSync(nombreFichero)
        let variable = JSON.parse(lectura)
        let imdbresultante= new Imdb(variable.peliculas)
      return imdbresultante
    }
    }

let movie1= new Movie ("The wolf of Wall Street",2013,"U.S","comedy",(["Leonardo DiCaprio"," Margot Robie"])
,"Martin Scorsese","Terence Winter","English","Netflix",false,"Jordan Belfort","Leonardo DiCaprio","Leonardo DiCaprio",
"Universal Pictures","./lobo.jpg")



let movie2=new Movie ("Spider-Man: Homecoming",2017,"U.S","sciencie fiction",(["Tom Holland"," Michael Keaton"," Zendaya"]),
"Jon Whas","Jonathan Goldstein","English","Netflix",true,"Peter Parker","Kevin Feige","	Sony Pictures Releasing2","./spiderman.jpg")


let movie3 = new Movie("The Big Short",2015,"U.S","biography",(["Christian Bale"," Brad Pitt"]),"Adam Mckay"
,"Adam Mckay","English","Netflix",false,"Michael Burry","Dede Gardner","Paramount Pictures","./bigShort.jpg")

let imdb1 = new Imdb ([movie1,movie2,movie3])






console.log(imdb1.escribirEnFicheroJSON("./abcd.json"))






