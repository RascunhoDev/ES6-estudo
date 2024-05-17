//Aplicando o TL 
{
    const Infos = [
        "Titulo", // 0
        "Texto Texto Texto Texto Texto Texto Texto Texto", // 1
    ];
    const Extra = [
        "Extra1", // 0
        "Extra2", // 1
        "Extra3" // 2
    ];

    const Markup = 
    `
        <div>
            <h1>${Infos[0]}</h1>
            <p>
                ${Infos[1]}
            </p>
            <hr>
            <ul>
                ${Extra.map((tags) => `<li>${Extra}</li>`).join()}
            </ul>
        </div>    
    `
    document.body.innerHTML += Markup;
}
