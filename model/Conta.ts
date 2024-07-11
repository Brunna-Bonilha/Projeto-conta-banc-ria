export abstract class Conta {

    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    constructor(numero: number, agencia: number, tipo: number, titular:string, saldo:number){
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }

    public get number():number {
        return this._number;
    }

    public get agencia():number {
        return this._agencia;
    }

    public get tipo():number {
        return this._tipo;
    }
    
    public get titular():string {
        return this._titular;
    }

    public get saldo():number {
        return this._saldo;
    }
    
    public set numero(value:number){
        this._numero = value;

    }

    public set agencia(value:number){
        this._agencia = value;
        
    }

    public set tipo(value:number){
        this._tipo = value;
        
    }
    
    public set titular(value:string){
        this._titular = value;
        
    }

    public set saldo(value:number){
        this._saldo = value;
        
    }

    //Sacar o dinheiro

    public sacar(valor: number): boolean{

        if(this._saldo < valor){
            console.log("Saldo insuficiente!")
            return false;
        }
        this._saldo = this._saldo - valor;
        return true;
    }

    //Depositar o dinheiro

    public depositor(valor: number): void{
        this._saldo = this._saldo + valor;
    }

    //Visualizar dados do Objeto

    public visualizar(): void{

        let tipo: string = "";

        switch(this._tipo){
            case 1:
                tipo = "Conta Corrente";
                break;
            
            case 2:
                tipo = "Conta Poupança";
                break;
        }


    console.log('******************************************************');
    console.log(\nDados da Conta');
    console.log('******************************************************');
    console.log(`Numero da conta: ${this._numero}`);
    console.log(`Numero da agencia: ${this._agencia}`);
    console.log(`Tipo da conta: ${this._tipo}`);
    console.log(`Titular da conta: ${this._titular`);
    console.log(`Saldo da conta: ${this._saldo.toFixed(2)}`);
    console.log('******************************************************');

    }

}
