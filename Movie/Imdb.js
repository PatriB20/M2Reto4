
const fs =require('fs')

class Imdb{
constructor(peliculas)
{
    this.peliculas = peliculas
}
printMovies(){
    this.peliculas.forEach(peliculilla => peliculilla.toPrint())
}

showMovie(){
    this.peliculas.forEach(pelicula => console.log(pelicula))
}
length(){
    return this.peliculas.length
}
escribirEnFicheroJSON(nombreFichero){
    
    fs.writeFileSync("./" + nombreFichero+".JSON",JSON.stringify(this.peliculas));
}
obtenerInstanciaIMDB(nombreFichero)
{
    let lectura = fs.readFileSync("./"+nombreFichero +".JSON")
    let variable = JSON.parse(lectura)
    let imdbresultante= new Imdb(variable.peliculas)
    
  return imdbresultante


}
}
module.exports = {Imdb}


