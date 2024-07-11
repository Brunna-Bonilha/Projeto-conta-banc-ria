import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { ContaPoupança } from "./model/ContaPoupança";
import { contaCorrente } from "./model/contaCorrente";
import { ContaController} from "./src/controller/ContaController";


export function main() {

   let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
   let titular: string;
   const tipoContas = ['Conta Corrente', 'Conta Poupança'];

   const contas: ContaController = new ContaController();


   //Novas instâncias da classe contaCorrente (objetos)

   contas.cadastrar(new contaCorrente(contas.gerarNumero(), 1234, 1, 'cliente1', 1000000.00, 100000));
   contas.cadastrar(new contaCorrente(conta.gerarNumero(), 5678, 2, 'cliente2', 1000.00));

   //Novas instâncias da classe contaCorrente (objetos)

   contas.cadastrar(new ContaPoupança(contas.gerarNumero() 9123, 1, 'cliente1', 1000000.00, 100000));
   contas.cadastrar(new ContaPoupança(contas.gerarNumero(), 9456, 2, 'cliente2', 1000.00, 15));


   while (true) {


        console.log(colors.bg.blackbright, colors.fg.magentastrong, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.magentastrong], 
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.magentastrong, 
                    "\n\nCriar Conta\n\n", colors.reset);

                    console.log('Digite o Número da Agência: ');
                    agencia = readlinesync.questionInt("");
                    
                    console.log('Digite o Nome do Titular da Conta: ');
                    titular = readlinesync.question("");
                    contas.listarTodas();
                    
                    console.log('Digite o Tipo da Conta: ');
                    tipo = readlinesync.keyInSelect(tipoContas, "", {cancel : false }) + 1;
                    
                    console.log('Digite o Saldo da Conta: ');
                    limite = readlinesync.questionFloat("");
                    
                    switch(tipo){
                    case 1:                    
                        console.log('Digite o Limite da Conta: ');
                      limite = readlinesync.questionFloat("";
                        contas.cadastrar(
                            new contaCorrente(0, agencia, tipo, titular, saldo, limite)
                        ) 
                        break;
                      )
                    case 2:
                      console.log('Digite a Data de Aniversário da Conta: ');
                    aniversario = readlinesync.questionInt("");
                    contas.cadastrar(
                        new ContaPoupança(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                    )
                        break;
                }
                keyPress()
                break;
            case 2:
                console.log(colors.fg.magentastrong, 
                    "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
             
             
             
               case 3:
                console.log(colors.fg.magentastrong,
                    "\n\nListar todas as contas - por numero"\n\n", colors.reset);
                    console.log("Digite o numero da sua conta: ");
                    numero = readlinesync.questionInt("");

                    contas.procurarPorNumero(numero);0
                
                    keyPress()
                    break;
        
                case 4:
                    console.log(colors.fg.magentastrong,
                        "\n\nAtualizar dados da Conta\n\n", colors.reset);

                    console.log("Digite o Número da Conta: ");
                    numero = readlinesync.questionInt("");

                    let conta = contas.buscarNoArray(numero);

                    if(conta){

                    

                    console.log('Digite o Número da Agência: ');
                    agencia = readlinesync.questionInt("");
                    
                    console.log('Digite o Nome do Titular da Conta: ');
                    titular = readlinesync.question("");
                    contas.listarTodas();

                    console.log('Digite o Saldo da Conta: ');
                    limite = readlinesync.questionFloat("");

                     tipo = conta.tipo;

                    switch(tipo){
                        case 1:                    
                            console.log('Digite o Limite da Conta: ');
                          limite = readlinesync.questionFloat("");
                            contas.atualizar(
                                new contaCorrente(numero, agencia, tipo, titular, saldo, limite)
                            )
                            break;
                          
                        case 2:
                          console.log('Digite a Data de Aniversário da Conta: ');
                        aniversario = readlinesync.questionInt("");
                        contas.atualizar(
                            new ContaPoupança(numero, agencia, tipo, titular, saldo, aniversario)
                        )
                    
                         break;
                        }
                    } else {
                        console.log(`\nA conta número: ${numero} não foi encontrada!`);
                    }
            
           
                case 5:
                console.log(colors.fg.magentastrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                    console.log("Digite o número da Conta: ")
                    numero = readlinesync.questionInt("");
                    
                    contas.deletar(numero);
               
                keyPress()
                break;
            case 6:
                console.log(colors.fg.magentastrong, 
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;

            case 7:
                console.log(colors.fg.magentastrong, 
                    "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.magentastrong, 
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.magentastrong, 
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - brunna.bonilha@generation.org");
    console.log("https://github.com/Brunna-Bonilha?");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();