class Professional {

    constructor(name,age,gnre,nacionality,profession,imagen)
    {
        this.name=name;
        this.age=age;
        this.gnre=gnre;
        this.nacionality=nacionality;
        this.profession=profession;
        this.imagen=imagen


    }
}

let profesional1 = new Professional ("Leonardo Dicaprio",50,"M", "U.S","Actor y productor","");
let profesional2 = new Professional("Cameron Diaz",50,"F", "U.S","Actriz",);
let profesional3= new Professional ("Paz vega",46,"F", "española","Actriz",);

let profesionales = []
function añadirProfesional(){
    let newProfesional = new Professional (
        document.getElementById("nombre").value,
        document.getElementById("edad").value,
        document.getElementById("genre").value,
        document.getElementById("nacionalidad").value,
        document.getElementById("profesion").value,
    )
profesionales.push(newProfesional)
console.log(profesionales)
}
function pintarProfesional(){
    for (let i=0;i<profesionales.length;i++)
document.getElementById("todoProfesionales").innerHTML += ` <div class="card" style="width: 18rem;">
                                                             <img src="${profesionales[i].imagen}" class="card-img-top" alt="...">
                                                             <div class="card-body">
                                                                <h5 class="card-title">${Profesionales[i].name}</h5>
                                                                <p class="card-text">Edad: ${Profesionales[i].age}</p>
                                                                <p class="card-text">Genero: ${Profesionales[i].gnre}</p>
                                                                <p class="card-text">Nacionalidad: ${Profesionales[i].nacionality}</p>
                                                                <p class="card-text">Profesion: ${Profesionales[i].profession}</p>
                                                           </div>
                                                         </div>
`
}

