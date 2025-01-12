class Atleta {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
        this.categoria = "Sem categoria";
        this.imc = 0;
    }
    
    calculaCategoria(){
        if(this.idade >=9 && this.idade <=11){
            this.categoria = "Infantil";
        }
        else if (this.idade >= 12 && this.idade <= 13){
            this.categoria = "Juvenil";
        }
        else if (this.idade >= 14 && this.idade <= 15){
            this.categoria = "Intermediário";
        }
        else if (this.idade >= 16 && this.idade <= 30){
            this.categoria = "Adulto";
        }
        else{
            this.categoria = "Sem categoria";
        }
        return this.categoria;
    }
    calculaIMC(){
       const alturaAoQuadrado = this.altura * this.altura;
        this.imc = this.peso / alturaAoQuadrado;
        return this.imc;
    }
    calculaMediaValida(){
        const notasValidas = this.notas.slice().sort((a, b) => a - b).slice(1, -1);
        const soma = notasValidas.reduce((total, nota) => total + nota, 0);
        return soma / notasValidas.length;
    }
    obtemNomeAtleta(){
        return this.nome;
    }
    obtemIdadeAtleta(){
        return this.idade;
    }
    obtemPesoAtleta(){
        return this.peso;
    }
    obtemAlturaAtleta(){
        return this.altura;
    }
    obtemNotasAtleta(){
        return this.notas;
    }
    obtemCategoria(){
        return categoria;
    }
    obtemIMC(){
        return imc;
    }
    obtemMediaValida(){
        return this.calculaMediaValida();
    }
    
}
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome:", atleta.obtemNomeAtleta());
console.log("Idade:", atleta.obtemIdadeAtleta());
console.log("Peso:", atleta.obtemPesoAtleta());
console.log("Altura:", atleta.obtemAlturaAtleta());
console.log("Notas:", atleta.obtemNotasAtleta());
console.log("Categoria:", atleta.calculaCategoria());
console.log("IMC:", atleta.calculaIMC());
console.log("Média Válida:", atleta.obtemMediaValida());