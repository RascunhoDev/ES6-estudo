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
// ▽ Abaixo TemplateLiteral -> TL
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
// ▽ Abaixo Metodos de String
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
// ▽ Abaixo Metodos Array
{
    //.From
    let Nome1 = "jjj";
    let Nome2 = ["mmm","kkk","loll"];

    console.log(Array.from(Nome1));

    //.of
    console.log(Array.of("Nome1","Nome2","Nome3"));

    //.find's
    let Array1 = ["1a","2b","3c"];

    console.log(Array1.find(x => x === "2b"))
    console.log(Array1.findIndex(x => x === "2b"))

    //Fill
    let WEKUFY = new Array(10);
    WEKUFY.fill("Capa");
    console.log(WEKUFY)
    Nome2.fill("111",2,2)
    console.log(Nome2)

}
// ▽ Abaixo Destructing
{
    const BaseObg = {
        nome: "Hilda",
        idade: "8 anos",
        tamanho: "1,30",
        sociais: {
            facebook: "HildaDaNetflix",
            youtube: "@OrgNetflixHilda"
        }
    }
    let {nome: name,idade: age} = BaseObg;
    let {tamanho} = BaseObg;
    let {youtube,facebook: FB} = BaseObg.sociais;

    console.log(name);
    console.log(age);
    console.log(tamanho);
    console.log(youtube);
    console.log(FB);
}
// ▽ Abaixo Swap
{
    let EQ1 = ["jone","jane","jafe"];
    let EQ2 = ["caio","casio","califa"];
    let EQT = [...EQ1,"Kaio",...EQ2];

    console.log(...EQ1);
    console.log(EQT)
}