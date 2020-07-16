// Exercício 1
// class Usuario {
//     constructor(email, senha, adm = false){
//         this.Email = email;
//         this.Senha = senha;     
//         this.Adm = adm;   
//     }
//     isAdmin(){
//         return this.Adm; 
//      }
// }

// class Admin extends Usuario 
// {
//     constructor(email, senha){
//         super(email, senha, true);
//     } 
// }


// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');
// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true


//Exercício 2
// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
// ];
  
// const idades = usuarios.map(item => item.idade);
// const userFilter = usuarios.filter(item => (item.idade >= 18 && item.empresa == 'Rocketseat'));
// const userFind = usuarios.find(item => (item.empresa == "Google"));
// const userIdade = usuarios.map(
//     function(item){ 
//         item.idade *= 2
//         return item;
//     }).filter(item => item.idade <= 50);
// console.log(userIdade);

//Exercicio 3

//3.1
// const arr = [1, 2, 3, 4, 5];
// arr.map(item => item + 10);

//3.2
// const usuario = [{ nome: 'Diego', idade: 23 }];
// usuario.map(item => item.idade);

