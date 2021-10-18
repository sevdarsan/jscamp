console.log("merhaba kodlama.io")


//Js type safe değildir. typescript geçilirse güvenlik için olur.
let dolarDun=9.20 // let değişkendir
let dolarBugun=9.30

{

    let dolarDun=9.10
    console.log(dolarDun);

}

console.log(dolarDun)

const euroDun=11.2 // const sabittir
const euroBugun= 10.50

console.log(euroDun);

//array- diziler
let konutKredileri=["Konut Kredisi","Arsa Kredisi","Tarla Kredisi",45,44,77,"a"]

for (let i = 0; i < konutKredileri.length; i++)
 {
    const e = konutKredileri[i];

    
    console.log(konutKredileri[i])
}


