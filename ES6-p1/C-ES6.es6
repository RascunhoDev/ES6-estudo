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
// ▽ Abaixo Swap e Reset Parmals
{
    let EQ1 = ["jone","jane","jafe"];
    let EQ2 = ["caio","casio","califa"];
    let EQT = [...EQ1,"Kaio",...EQ2];

    console.log(...EQ1);
    console.log(EQT)

    //▽ Abaixo Reset Parmals
    function Mult(mult,...Args) {
        return Args.map(arg => arg * mult)
    }
    let Resu = Mult(4,2,4,6,8);
    let Crach = Resu.map(resus => `\n`+"O Resultado e : " + resus);
    console.log(...Crach)




}
// ▽ Abaixo Promises
{
    let Promesa = new Promise((resolve,reject) =>{
        if (false){
            resolve("Bom dia!")
        } else{
            reject("(...bom dia...)")
        }
    }
    );
    Promesa
        .then((Fala) => {
            console.log(Fala)
            return "Entra ,Vamos"
        })
        .catch((Silencio) => {
            console.log(Silencio)
            return "(..entra em casa logo...)"
        })
        .then((Fala) => console.log(Fala))
        .catch((Silencio) => console.log(Silencio))
    // Mais de uma promicese
    let Promise2 = new Promise((resolve,reject) => {
        if(true){
            return resolve(console.log("3"))
        }
        else{
            return reject(console.log("4"))
        }
    })
    let Promise1 = new Promise((resolve,reject) => {
        setTimeout(() => {
            if(false){
                resolve(console.log("1"))
            }
            else{
                return reject(console.log("2"))
            }
        }, 1000);
    })
    // .RACE
    Promise
        .race([Promise1,Promise2])
        .then((Soma) => console.log(Soma))    
    // . ALL()
    Promise
        .all([Promise1,Promise2])
        .then((Soma) => console.log(Soma))
        .catch((Subitracao) => console.log(Subitracao))
}
// ▽ Abaixo Prototipal -NAO FUNCIONOU MAS ESTA CORRETO NA ESCRITA
{
    /** 
        function Jorney(Name,MaxSpeed,Distance) {
            this.MaxSpeed = MaxSpeed;
            this.Distance = Distance;
            this.Name = Name;
        }
        Jorney.prototype.VM = function(){
            let VMR = (MaxSpeed / Distance)
            return console.log(Name + "Tem a Velocidade Media na viagem de : "+VMR)
        }
        const Uno = new Jorney("Uno",80,160)
        const Skyline = new Jorney("Skyline",100,300)

        console.log("SEU NOME: "+Uno.Name)
        console.log("SUA SPEED: "+Uno.MaxSpeed)
        console.log("SEU CMINHO: "+Uno.Distance)
        console.log(Uno.VM)
    */
}
// ▽ Abaixo Classes -NAO FUNCIONOU MAS ESTA CORRETO NA ESCRITA
{
    /**
     class MakeCar {
        constructor(Nome,VMax,Chape){
            this.Nome = Nome;
            this.VMax = VMax;
            this.Chape = Chape;
        }
        Buzina(){
            return console.log("Biiiiiiiiiiiiii")
        }
        static Info(){
            console.log("Isso uma fabrica de carros")
        }
        set SetApelido(Apelido){
            this.Apelido = Apelido;
        }
        get Hello(){
            console.log("Hello")
        }
    }
    
    const LadezaXD7 = new MakeCar("LadezaXD7",120,"Moderno");
    
    */
   
} 
// ▽ Abaixo Proxy -NAO FUNCIONOU MAS ESTA CORRETO NA ESCRITA
 {
    /**
    const Person = {
        name: "Carlinhos",
        Tipo: "Sigma",
        Localidade: "Bahia"
    }
    let Topixy = new Proxy(Person,
        {
            get(target,name){
                console.log(name)
            }
        },
        {
            set(target,Tipo,Value){
                console.log("VC QUER MUDAR >:(")
                target[Tipo] = "BETA"
            }
        },
        {
            get(target,Tipo){
                if (Tipo == "Sigma")
                    console.log(Tipo + " isso ai meu fi :3")
                else{
                    console.log(Tipo + " Nao Trata de fazer Milwin >:(")
                }
            }
        }

    )
    console.log(Topixy.Tipo)
     */
}
// ▽ Abaixo For of (Iterators)
{
    var city = "Joinvile";
    var IT = city[Symbol.iterator]();

    console.log(IT.next())

    var num = [1,2,3,4,5,6,7,8,9,10];
    var IT_two = num[Symbol.iterator](); 

    for (numbe of IT_two){
        console.log(numbe)
        if (numbe == 5){break}
    }
    //GENERATORS
    function* Cars(Um,Dois,Tres){
        yield console.log(Um)
        yield console.log(Dois)
        yield console.log(Tres)  
    }
    var JDM = Cars("RX 7","Skyline","GTR")

    JDM.next()
    JDM.next()
    JDM.next()
}
// ▽ Abaixo Set()
{
    let Players = new Set(["Cristiano","Messi","Kene","Son"]);
    console.log(Players)
    Players.add("Halland")
    Players.delete("Cristiano")
    console.log(Players)
    console.log(Players.has("Son"))
    let Soceers = Players.values();
    for (Names of Soceers){
        console.log(Names)
    };
}
// ▽ Abaixo ------
{

}