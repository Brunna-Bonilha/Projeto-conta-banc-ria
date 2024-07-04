import { Conta } from "./Conta";

export class contaCorrente extends Conta{


    private _limite: number;

	constructor(numero: number, agencia: number, tipo: number, titular: string,
        saldo: number, limite: number) {
	super(numero, agencia, tipo, titular, saldo);
    this._limite = limite;
        } 

        public get limite(): number{
            retunr this._limite;
        }

        public set limite(value: number){
            this._limite = value;
        }

        public sacar(valor: number) boolean{
            if(this.saldo < valor){
                console.log("Saldo insulficiente!")
                return false;
            }

            this.saldo = this.saldo - valor;
            return true;
        }

        public visualizar(){
            super.visualizar();
            console.log('Limite: ${this._limite}');
        }
    }
