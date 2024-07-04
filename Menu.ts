import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from "./model/Conta";


export function main() {

   let opcao: number;

   //Novas instâncias da classe conta (objetos)

   const c1: Conta = new Conta(1, 1234, 1, 'Julia Castro', 800000.00);
   const c2: Conta = new Conta(1, 1234, 2, 'Marcella Sanches', 600000.00);

   // Visualizar os dados da Conta c1
   c1.visualizar();

   // Visualizar os dados da Conta c2
   c2.visualizar();

   // Visualizar o Saldo da Conta c1
   console.log(`\nO Saldo da conta 01 é: ${c1.saldo}`);

   // Alterando o Saldo da conta c2
   c2.saldo = 900000.00;

   //Visualizando o Saldo da Conta c2 depois de atualizar o valor
   console.log(`\nO Saldo da conta c2 é: ${c2.saldo}`);

   console.log(\nSacar 100.00 Reais da conta c1: ${c1.sacar(100)});
   c1.visualizar();

   console.log(`\nSacar 100000.00 Reais da conta c2: ${c2.sacar(100000.00)}`);
   c2.visualizar

   //Depositar nas Contas
   console.log(`\nDepositar 200000.00 Reais da Conta c1: `);
   c1.depositar(200000);
   c1.visualizar();
   
   //Novas instâncias da classe contaCorrente (objetos)

   const cc1: ContaCorrente = new Conta(1, 1234, 1, 'cliente1', 1000000.00, 100000);
   const cc2: ContaCorrente = new Conta(1, 1234, 2, 'cliente2', 1000.00);

   cc1.visualizar();
   cc2.visualizar();

   //Novas instâncias da classe contaCorrente (objetos)

   const cc1: ContaCorrente = new Conta(1, 1234, 1, 'cliente1', 1000000.00, 100000);
   const cc2: ContaCorrente = new Conta(1, 1234, 2, 'cliente2', 1000.00);

   cc1.visualizar();
   cc2.visualizar();

      //Novas instâncias da classe contaPoupança (objetos)

      const cp1: ContaPoupança = new Conta(1, 1234, 2, 'cliente2', 2000.00);
      cp1.visualizar();
      

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
            console.log(colors.fg.greenstrong, 
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, 
                    "\n\nCriar Conta\n\n", colors.reset);
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, 
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, 
                    "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, 
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, 
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