
console.log("Olá Mundo!")

let nome = "Francisco Douglas"
let idade = 20
let altura = 1.75
let vazio //indefinida, variavel vazia seria do tipo null


let objeto = {
    "nome": "Sabrina",
    "idade": 12,
    "altura": 1.75
}

let objeto2 = {
    nome,
    idade,
    altura
}

console.log(nome, idade, altura, null, true, false, vazio)
console.log(objeto)
console.log(objeto2)

//Usando Colchetes [ ]
let modelos = ['Gol', 'Corsa', 'Fusca'];

//Usando o construtor Array ( )
let marcas = Array('Chevrolet', 'Ford', 'Fiat');

//Definindo um valor fixo atraves da Array
let acessorios = new Array(5);

//Criando um vetor vazio 
let cores = [];

// OU
let categorias = new Array()

/*
console.log(modelo)
console.log(marcas)
console.log(acessorios)
console.log(cores)

*/


//Exibindo ou recuperando o elemento vetor
console.log(modelos[0])
console.log(modelos[1])
console.log(modelos[2])

let nome_modelo = modelos[0];
console.log(nome_modelo)

//Adicionando elementos no fim da array
modelos.push('HB20')
console.log(modelos)

//Adicionando elementos no inicio da array
modelos.unshift('Logan')

//Removendo elementos no fim da array
modelos.shift()

//Remeovendo elementos no inicio da array
modelos.pop()
console.log(modelos)

let frutas = ['Laranja', 'Melancia', 'Morango']
let vegetais = ['Batata Doce', 'Cenoura', 'Milho']
let feira = frutas.concat(vegetais);

// Exibindo o Vetor
console.log(feira);

let frutas_ = ['Laranja', 'Melancia', 'Morango', 'Uva', 'Caju']
let frutas_sel = frutas.slice(1,3) //Slice pega uma cópia, como se fosse metade da array

console.log(frutas_sel)

//Alterando ou removendo elemento de array
//frutas_.splice(1,1,'Manga')

//console.log(frutas_sel)

let frutas2 = ['Laranja', 'Melancia', 'Morango', 'Uva', 'Caju'];
let texto = frutas2.join(',')

console.log(texto);

let numeros = [1,2,3,4,5,6]
let dobra = numeros.map(x=> x*2)

console.log(dobra)

//Exemplo de função
/*function texto(t){
    console.log(t)
}
*/
numero2 = [1,2,3,4,5,6]
let pares = numero2.filter(x => x % 2 == 0)

console.log(pares)

// Exemplo de ternário (if simplificado)

let nota = 6
let res = nota<=6 ? "Aprovado" : "Reprovado";
console.log(res)

//Vai localizar o elemento na array

/*let numeros3 = [1,2,3,4,5,6]*/
let localizado_find = numeros.find(x => x > 2);
console.log(localizado_find)

//Vai localizar a posição desse elemento

let localiza_index = numeros.findIndex(x=> x>2)
console.log(localiza_index)

