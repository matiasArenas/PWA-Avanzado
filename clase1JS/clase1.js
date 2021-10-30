//En JS existen tres tiposd e variables
/*Tipos de variables
    const = constantes, su valor no cambia con el tiempo, se las inicializa en un valor y este perdura a lo largo del programa
    let = variables, cambian su valor
    var = variable global

Tipos de datos
    int, float, string, boolean, date
*/

const personajes = [
    {
        nombre: 'Rick',
        apellido:'Sanchez',
        trabajo: ['cientifico'],
        pluritrabajo: false
    },
    {
        nombre: 'Homero',
        apellido:'Simpsons',
        trabajo:['planta nuclear', 'don barredora'],
        pluritrabajo: false
    }
]

// const getAll = (arrayObj) => {
//     arrayObj.map((x)=>{
//         x.trabajo.length > 1 ? x.pluritrabajo = true : x.pluritrabajo = false;
//         console.log(x);
//     })
// }

// getAll(personajes);

////////////////////////////////

const axios = require('axios');

const getBreakingBad = async (url) => {
    const characters = await axios.get(url);
    console.log(characters);
}

getBreakingBad('https://breakingbadapi.com/api/characters');
