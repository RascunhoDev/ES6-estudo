// ▽ Abaixo ARROWS
{
    //Arrows in Array
    const Funcionarios = ["jeferson","jorolizo","jeranda","josefina"] 
    //Criando o Array inicial
    const ElesSao = Funcionarios.map( // -> forma padrao
        function(Nomes){
            return Nomes + " e mal pago"
        }
    )
    console.log(ElesSao)
    //Arrows Aplicadas
    const Players = ["Messi","Cristiano","Kane","Son"]
    const Goods = Players.map(
        (Names) => { //a seta e o Arrow 
            return Names + " is Very Good"
        }
    )
    console.log(Goods)
    //Arrows OneLine
    const Animes = ["Goku","Ania","Tanjero","Ash"]
    const Cools = Animes.map( Ids => Ids + " E brabo slc")
    console.log(Cools)

}
//TemplateLiteral -> TL
{
    /* let Nome = prompt("Seu Nome: ")
    let estado = prompt("voce esta feliz,bem,mal,triste Digite: ")*/
    let Nome = "Jeje";
    let estado = "Mal e Triste"
    //Sem TL
    let text = ("oi"+Nome+"Tudo"+estado+"pra voce");
    console.log(text)
    //Com TL
    let NewText = `oi ${Nome} Tudo ${estado} pra voce`;
    console.log(NewText)
    //Sem TL -PulandoLinha
    let Objects = "Caderno"+"\n"+"Livro"+"\n"+"Caneta"+"\n"+"Mochilça";
    console.log(Objects)
    //Com TL -PulandoLinha
    let OtherOBJ = 
                `
                Teclado
                Mouse
                Controle
                PortableComputer
                `;
    console.log(OtherOBJ)
}
//Metodos de String
{
    let CardBradesco = "3265 3756 4002 0022";
    let CardItau = "9078 6776 4004 4828";

    if (CardBradesco.endsWith("4002 0022")){
        console.clear
        console.log("Bradesco")
    }
    if (CardItau.endsWith("4004 4828")){
        console.clear
        console.log("Itau")
    }
    
    let Nome = "Nome da silva";
    console.log(Nome.startsWith("Nome"))

    let Cavalo = "Cafe da Fonseca";
    console.log(Cavalo.includes("da"))

    console.log("Bad ".repeat(10))
}