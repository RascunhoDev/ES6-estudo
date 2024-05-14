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
//Proximo