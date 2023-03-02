//Ejercicio "Mi primer JavaScript"
let primerNombre='Laura';
console.log(primerNombre);
let segundoNombre='Nathalia';
console.log(segundoNombre);
let primerApellido='García';
console.log(primerApellido);
let segundoApellido='Acuña';
console.log(segundoApellido);
let edad=23;
console.log(edad);
let miPasatiempo='Leer';
console.log(miPasatiempo);
let colorFavorito='Azul';
console.log(colorFavorito);
let colorMenosMeGusta='Café' 
const persona={
    nombre:'Laura',
    apellido: 'Garcia',
    edad:23,
    pasatiempo:'leer',
}
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.pasatiempo);
const hermano={
     nombre:'Santiago',
     apellido: 'Garcia',
     edad:18,
     pasatiempo:'futbol',
};
console.log(hermano);
console.log(hermano.nombre);
console.log(hermano.apellido);
console.log(hermano.edad);
console.log(hermano.pasatiempo);
const MASCOTA={
    nombre:'Sol',
    edad:4,
    animal:'gato',
    leGusta:'Pollo',
    noLeGusta:'frio',
};
console.log(MASCOTA);
console.log(MASCOTA.nombre);
console.log(MASCOTA.edad);
console.log(MASCOTA.animal);
console.log(MASCOTA.leGusta);
console.log(MASCOTA.noLeGusta);
let paisesAConocer=["Japon", "Australia", "China"];
console.log(paisesAConocer);
console.log(paisesAConocer[0]);
console.log(paisesAConocer[1]);
console.log(paisesAConocer[2]);

//TOMANDO DESICIONES
if(hermano.edad<18){
    console.log("Es menor de edad");
}else{
    console.log("Es mayor de edad");
}


switch(MASCOTA.animal){
    case 'gato':
      console.log("Pertenece a la familia de los felinos");
      break;
    case 'perro':
        console.log("Pertenece a la familia de los caninos");
        break;
    case 'pez':
        console.log("Pertenece a la familia de los vertebrados acuáticos");
        break; 
    case 'canarios':
        console.log("Pertenece a la familia de los fringílidos");
        break;
    default:
        console.log("La mascota no se encuetra dentro del grupo definido");    
        break;                   
}

//OPERANDO ARRAYS Y OBJETOS
const empresario={
    nombre: "Juan",
    apellido:"Casas",
    carrera: "Administración de Empresas",
    emprendimientos: 5,
    emprendimientosFallidos:2,
    emprendimientosExitosos:3,
    listaProyectosTrabaja:['consultorías', 'clases online', 'tienda de e-commerce', 'agencia virtual de turismo' ],
    inversionEnProyectos: true,
    capitalInversionActual: 50000000,
    especializacion:"Maestría en Gerencia Comercial y Ventas",
}
//MODIFICAR PROPIEDADES:
empresario.nombre="Carla";
console.log(empresario.nombre);
empresario.apellido="Cruz";
console.log(empresario.apellido);
empresario.inversionEnProyectos=false;
console.log(empresario.inversionEnProyectos);
//AGREGAR PROPIEDADES
empresario.edad=38;
console.log(empresario.edad);
empresario.idiomas=['Español','Ingles','Frances'];
console.log(empresario.idiomas);
console.log(empresario);
//ELIMINAR PROPIEDADES
delete empresario.edad;
delete empresario.emprendimientosFallidos;
console.log(empresario);
//ARRAY
//tiene una ongitud de 15 y 14 indices
let flores=['Flor del cerezo', 'hortensia', 'lirio', 'orquídea', 'peonía', 'rosa', 'dalia', 'nardo', 'magnolia', 'campanilla', 'gardenia', 'crisantemo', 'flor de loto', 'azalea', 'clavel' ]
console.log(flores.length);
//Eliminar el ultimo elemento del array
flores.pop();
console.log(flores.length);
//Agregar elementos al array
flores.push('narciso');
flores.push('clavel');
console.log(flores.length);
//Eliminar primer elemento del array
flores.shift();
console.log(flores.length);
console.log(flores);
//Agregar un elemento en la primera posición
flores.unshift("Margarita");
console.log(flores.length);
console.log(flores);
//Posición del elemento buscado
let index=flores.indexOf('narciso');
console.log(index);
//Verificar si el elemento se encuentra
console.log(flores.includes('rosa'));
console.log(flores.includes('violeta'));
//Convertir array en una cadena seprada por coma
let cadena=flores.toString();
console.log(cadena);
//Convierte el array en una cadena separada por lo que se le indique
let cadenaSeparadaPunto=flores.join(".");
console.log(cadenaSeparadaPunto);
let cadenaSeparadaAsterisco=flores.join("*");
console.log(cadenaSeparadaAsterisco);
//Une los arrays en un unico array
let flores2=[ 'tulipan', 'geranio','amapola'];
let unSoloArray=flores.concat(flores2);
console.log(unSoloArray);

//EJERCICIO ITERANDO DATOS
for(let flor of flores){
    console.log(flor);
}
for(let datosEmpresario in empresario){
    console.log(datosEmpresario + ": "+empresario[ datosEmpresario ])
}

let cont=0;
while(cont<flores2.length){
    console.log(flores2[cont]);
    cont+=1;
}

//Ejercicio "Aplicando Lógica"
function datosPersonales(nombre,edad, ciudadDeResidebcua){
    return "Hola mi nombre es "+nombre+", tengo "+edad+" años "+"y vivo en "+ciudadDeResidebcua;
}
let datos =datosPersonales("Luara",23,"Bogotá");
console.log(datos);

function calcularIVA(precio){
    let iva=21;
    return (precio*iva)/100;
}
let precio=calcularIVA(100000);
console.log(precio);

function sumarNumerosArray(numeros){
    let suma=0;
    for(let numero of numeros){
        suma+=numero;
    }
    return suma;
}
let arraySuma=[10,20,30,40,50];
let sumaT=sumarNumerosArray(arraySuma);
console.log(sumaT);

function puedeConducir(edad){
    if(edad>18){
        alert("Ya puedes conducir");
        return "Ya puedes conducir";
    }else{
        alert("Aún no puedes conducir");
        return "Aún no puedes conducir";
    }
}

console.log(puedeConducir(19));
console.log(puedeConducir(17));

//DOM
document.getElementById("nombre").innerHTML=primerNombre;
document.getElementById("apellido").innerHTML=primerApellido;
document.getElementById("pasatiempo").innerHTML=miPasatiempo;
document.getElementById("colorF").innerHTML=colorFavorito;
document.getElementById("colorN").innerHTML=colorMenosMeGusta;
//QUERY_SELECTOR

const titulo=document.querySelector("h1");
console.log(titulo);
const query=document.querySelectorAll(".example")
console.log(query);
const classEx=document.getElementsByClassName(".example");
console.log(classEx);