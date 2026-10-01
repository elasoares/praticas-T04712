

/* No console(Área secreta do navegador) */
console.log("Hello, world!");
console.log("Meu primeiro código em java script.");

/* Com um alerta(pop-up na tela) */
/* alert("Hello, world!");
alert("Meu primeiro código em java script."); */

/* Mudando o texto da página. */
/* const variavel_titulo = document.getElementById("titulo");
variavel_titulo.textContent = "Teste"; */

const variavel_mensagem = document.getElementById("mensagem");
variavel_mensagem.textContent = 'Meu primeiro código em java script.';
variavel_mensagem.textContent += ' teste';



/*  Comentários */
//Uma linha
// ctrl + ;

/* Esse é comentário
 de várias linhas 

 alt + shift + a
 */

 /* Variável - let*/

let nome = "Alice"; 
console.log("Meu nome é: " + nome);

nome = "Elaine";
console.log("Meu nome é: " + nome);

/* Variável - const*/

const PI = 3.14159;

console.log(PI);

/* PI = 3.14;
console.log(PI); */

/* Tipo de dados - Texto(string) */

let nome1 = "Gleice";
let nome2 = "Francisco";
let impri_nome2 = `Nome 2 ${nome2}`;

const nome2_h1 = document.getElementById("titulo");
nome2_h1.textContent = impri_nome2;

let concatenar_crase = `Gleice Silva`;

console.log(`Nome 1: ${nome1}`);
console.log(impri_nome2);
console.log("Olá " + nome1);

/* Tipo de dados - Número(number)  */
let idade = 25;
console.log( 1 + idade);
console.log( `${nome1} ${idade}`);

/* Tipo de dados - Boleano(boolean)  */
let dark = true;
let light = false;

console.log(dark);
console.log(light);

/* Tipo de dados - nulo(null)  */

let testeNulo = null;
console.log(testeNulo);

/* Tipo de dados - undefined(Indefinido)  */
let indefinido;
console.log(indefinido);

/* Tipo de dados - objeto(object)  */

let pessoa = {
    nome: "Ana",
    idade: 28,
    cidade: "Fortaleza"
};

console.log(pessoa);
console.log("olá " + pessoa.nome);
console.log("sua idade:  " + pessoa.idade);
console.log("sua cidade:  " + pessoa.cidade);

let produto = {
    nome: "Camiseta",
    preco: 49.90,
    emEstoque: true
};

console.log(`Produto: ${produto.nome}`);
console.log(`Preço: ${produto.preco}`);
console.log(`Tem em estoque: ${produto.emEstoque}`);

let cachorro = {
    nome: "Rex",
    raca: "Labrador",
    latir: function(){
    console.log(this.nome + " diz: Au au! 🐶🐶")
    }
};

console.log(cachorro.nome);
cachorro.latir();

/* Array / vetor - Lista */
let frutas = ["Amora", "Abacaxi", "Abacate"];
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

let alunos = ["Camila", "Gisele", "Giovani", "Paloma"];
console.log("Total de alunos: " + alunos.length);

let carrinho = ["Pão", "Leite"];
/* Adiciona no final */
carrinho.push("Café");
console.log(carrinho);

/* Remove o último item */
carrinho.pop();
console.log(carrinho);

/* Adiciona no início  */
carrinho.unshift("Banana");
console.log(carrinho);

/*Remove o primeiro item  */
carrinho.shift();
console.log(carrinho);

/* No splice(menciona aposição, 
diz se remover e quantos remover, e se adiciona ) */
carrinho.splice(1, 0, "Cenoura");
console.log(carrinho);

carrinho.splice(1, 1);
console.log(carrinho);

/* Operadores aritméticos */
let preco = 20;
let quantidade = 3;
let total = preco * quantidade;
console.log(`Total da compra: R$ ${total}`);

let idade_usuario = 25;
idade_usuario++;

console.log(idade_usuario);

idade_usuario--;
console.log(idade_usuario);

/* função */

function mudar(valor){
    let elemento = document.getElementById("qtd");
    let quantidade = Number(elemento.textContent);
   
    /* quantidade = quantidade + valor; */
    quantidade += valor;

    /* quantidade -= valor;
    quantidade = quantidade - valor; */

    /* 1 + valor(-1 ou +1) */

    /* if(quantidade < 0){
        quantidade = 0;
    } */
    elemento.textContent = quantidade;
}

/* Operadores de comparação */

let idade_aluno = 18;

console.log(idade >= 18);
console.log(idade <= 17);


let senha = "1234";

console.log(senha === 1234);
console.log(senha === "1234");
/* console.log(senha !== "1234");
console.log(senha != "234"); */

/* Operadores lógicos */
let temDinheiro = true;
let temEstoque = true;
let temCartao = false;
let temPix = false;

// E (&&)

console.log(temDinheiro && temEstoque);
console.log(temDinheiro && temCartao);

// OU (||)

console.log(temDinheiro || temCartao);
console.log(temPix || temCartao);
// ! (Inverte)

let botao = false;
console.log(!botao);

//=======================================

let idade_maior = 18;
let idade_menor = 16;
let idade_teste_if = 63;
let nota = 4;

/* if*/

    if(idade_maior >= 18){
        console.log("Você é de maior de idade!");
    }
/* if / else */

    if(idade_menor >= 18){
        console.log("Venda autorizada.");
    }else{
        console.log("Venda proibida");
    }


/* if/else if/ else */

    if(nota >= 7){
        console.log("Aprovada!!!");

    }else if(nota >= 5){
        console.log("Recuperação.");
    }else{
        console.log("Reprovada!");
    }

//=================================

    if(idade_teste_if < 12){
        console.log("Criança");
        
    }else if(idade_teste_if < 18){
        console.log("Adolescente");

    }else if(idade_teste_if < 60){
        console.log("Adulto");

    }else{
        console.log("Idoso.")
    }


/* if/else if/ else aninhado */
    let temConta = false;
    let senhaCorreta = true;

    if(temConta){
        if(senhaCorreta){
            console.log("Login realizado!");
        }else{
            console.log("Senha incorreta!");
        }
    }else{
        console.log("Você não está cadastro. Cadastre-se!");
    }


    /* for continue */

   // Ímpar = i % 2 !== 0
   // Par =   i % 2 == 0

    for(let i = 1; i <= 10; i++){
        if(i % 2 !== 0){
            continue;
        }
        console.log(i + " impar");
    }

    /* Funções */

    function darBomDia(){
       console.log("Bom dia! ☀️"); 
    }

    darBomDia();
    darBomDia();

    function saudar(nome){
        console.log(`Olá ${nome}! Bem-vindo(a)!`);
    }

    let nome_funcao = "Elaine";
    console.log("Valor nome " + nome_funcao);

    saudar(nome_funcao);
    saudar("Teste");


    function somar(a, b){
        return a + b; 
    }

    let resultado1 = somar(1, 2);
    console.log(`A soma é: ${resultado1}`);

    let resultado2 = somar(8, 3);
    console.log(`A soma é: ${resultado2}`);

    /* foreach */

    let frutas_lista = ["Uva", "Abacaxi", "Laranja"];
    frutas_lista.forEach( function(fruta){
        console.log("Fruta: " + fruta);
    });

    let lista_preco = [5, 9, 68];
    let total_ = 0;
    lista_preco.forEach(function(preco){
        /* total = total + preco; */
        total_ += preco;
    });

    console.log("Total: R$" + total_);

    /* Objetos */

    let pessoa_obj = {
        nome: "Ana",
        idade: "28"

    };

    console.log(pessoa_obj.nome);
    console.log(pessoa_obj.idade);

    let campo = "nome"; 

    console.log(pessoa_obj[campo]);
   /*  console.log(pessoa_obj["idade"]); */
   /*  console.log(pessoa_obj["nome"]); */


   //for of percorre listas(array/vetor) | pega os VALORES dos itens.
   //for in percorre objetos  | pega CHAVES(nomes das propriedades).

   /* For in  */
   let pessoa_objeto = {
        nome: "Elaine",
        idade: 25,
        cidade: "Fortaleza"
   };

   for(let chave  in pessoa_objeto ){
        console.log(chave + ": " + pessoa_objeto[chave]);
   }


   let carro_objeto = {
        modelo: "Corolla",
        marca: "toyota",
        ano: 2022
   };

   for(let chave  in carro_objeto ){
        console.log(chave + ": " + carro_objeto[chave]);
   }


   let aluno = {
        nome: "Bruno",
        curso: "Programação web",
        nota: 9,
        aprovado: true
   };

   for(let percorrer_campo in aluno){
        console.log(`${percorrer_campo} --> ${aluno[percorrer_campo]}`);
   }