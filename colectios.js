/*

*******Atividade 1: Maps********
Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

Crie uma função getAdmins que recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.

**********Atividade 2: Sets********
Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

*/
let mapa  = new Map();
mapa.set('Lazaro', 'admin');
mapa.set('Pedro', 'user');
mapa.set('Jorge', 'admin');
mapa.set('Lex', 'admin');

function getAdmins(mapa){
     for  (let [key, value] of mapa) {
         //console.log(key, value)
         if (value === 'admin') {
             console.log(key)
         }
     }

}

console.log(getAdmins(mapa))

arr = [30, 30, 40, 5, 223, 2049, 3034, 5];
function valoresUnicos(arr) {
    const mySet = new Set(arr);    
    
    return [... mySet]
    
}


console.log(valoresUnicos(arr))