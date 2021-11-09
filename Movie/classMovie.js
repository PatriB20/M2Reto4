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
let movie1= new movie ("The wolf of Wall Street",2013,"U.S","comedy",(["Leonardo DiCaprio"," Margot Robie"])
,"Martin Scorsese","Terence Winter","English","Netflix",false,"Jordan Belfort","Leonardo DiCaprio","Leonardo DiCaprio",
"Universal Pictures")



let movie2=new movie ("Spider-Man: Homecoming",2017,"U.S","sciencie fiction",(["Tom Holland"," Michael Keaton"," Zendaya"]),
"Jon Whas","Jonathan Goldstein","English","Netflix",true,"Peter Parker","Kevin Feige","	Sony Pictures Releasing2")


let movie3 = new movie("The Big Short",2015,"U.S","biography",(["Christian Bale"," Brad Pitt"]),"Adam Mckay"
,"Adam Mckay","English","Netflix",false,"Michael Burry","Dede Gardner","Paramount Pictures")
module.exports = {Movie}