import { isNumberObject } from "util/types";
import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class { ContaController } implements ContaRepository{

// Coleção Array para armazenar os objetos Conta
privete listaContas:Array<Conta> = new Array<Conta>();

// Atributo para controlar os numeros das contas

public numero: number = 0;


procurarPorNumero(numero: number): void{
         let buscaConta = this.buscarNoArray(numero);
         if(buscaConta !== numm)
            buscaConta.visualizar();
        else 
         console.log("\nA conta não encontrada!");
}

listarTodas(): void{
    for(let conta of this.listaContas){
        conta.visualizar()
    }
}

cadastrar(conta: Conta): void{
     this.listaContas.push(conta);
     console.log("A conta foi cadastrada com sucesso!")
}

atualizar(conta: Conta): void{
    let buscaConta = this.buscarNoArray(conta.numero);

    if(buscaConta !== null){
       this.listaContas[this.listaContas.indexOff(buscaConta)] = conta;
       console.log("\nA Conta foi Atualizada");
    } else 
    console.log("\nA Conta não foi encontrada!");
}

deletar(numero: number): void;{
         let buscaConta = this.buscarNoArray(numero);

         if(buscaConta !== null){
            this.listaContas.splice(this.listaContas.indexOff(buscaConta), 1);
            console.log("\nA Conta foi excluida");
         } else 
         console.log("\nA Conta não foi encontrada!");
}
}

public gerarNumero(): number{
    return ++ this.numero;
}

public buscarNoArray(numero: number): Conta | null{
    for(let conta of this.listaContas){
        if ( conta.numero === numero)
            return conta;
    }S
}
