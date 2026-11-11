

console.log("USHRTIMI 1 - FATURA E LIBRARISE");

let cmimiLibrit = 12.50;
let cmimiFletores = 1.80;

let librat = 3;
let fletoret = 4;

let totaliLibrave = cmimiLibrit * librat;
let totaliFletoreve = cmimiFletores * fletoret;

let totali = totaliLibrave + totaliFletoreve;

totali += 2.50;

console.log("Librat: " + totaliLibrave);
console.log("Fletoret: " + totaliFletoreve);
console.log("Totali: " + totali);


console.log("USHRTIMI 2 - REZULTATI I VLERESIMIT");

let aktiviteti = 18;
let projekti = 24;
let provimi = 43;

let piket = aktiviteti + projekti + provimi;

let perqindja = (piket / 100) * 100;

console.log("Piket totale: " + piket);
console.log("Perqindja: " + perqindja + "%");

provimi = 48;

piket = aktiviteti + projekti + provimi;
perqindja = (piket / 100) * 100;

console.log("Pas korrigjimit: " + piket);
console.log("Perqindja e re: " + perqindja + "%");



console.log("USHRTIMI 3 - BUXHETI I UDHETIMIT");

let akomodimi = 96;
let transporti = 42;
let ushqimi = 57;

let kostoTotale = akomodimi + transporti + ushqimi;

let pjesaPersonit = kostoTotale / 3;

let buxheti = 80;

let mbetja = buxheti - pjesaPersonit;

console.log("Kosto totale: " + kostoTotale);
console.log("Per person: " + pjesaPersonit);
console.log("Parate e mbetura: " + mbetja);


console.log("USHRTIMI 4 - POROSIA ONLINE");

let produkti1 = 35;
let produkti2 = 35;
let produkti3 = 24;

let cmimiTotal = produkti1 + produkti2 + produkti3;

let zbritja = cmimiTotal * 15 / 100;

let cmimiPasZbritjes = cmimiTotal - zbritja;

let transportiPorosise = 4;

let cmimiFinal = cmimiPasZbritjes + transportiPorosise;

console.log("Cmimi para zbritjes: " + cmimiTotal);
console.log("Zbritja: " + zbritja);
console.log("Cmimi pas zbritjes: " + cmimiPasZbritjes);
console.log("Transporti: " + transportiPorosise);
console.log("Cmimi final: " + cmimiFinal);



console.log("USHRTIMI 5 - KONVERTIMI I TE DHENAVE");

let numri1 = "25";
let numri2 = "17";
let numri3 = "8";

let bashkimi = numri1 + numri2 + numri3;

console.log("Pa konvertim: " + bashkimi);

let n1 = Number(numri1);
let n2 = Number(numri2);
let n3 = Number(numri3);

let shuma = n1 + n2 + n3;

let mesatarja = shuma / 3;

console.log("Shuma: " + shuma);
console.log("Mesatarja: " + mesatarja);

console.log("Tipi i shumes: " + typeof shuma);
console.log("Tipi i mesatares: " + typeof mesatarja);




console.log("USHRTIMI 6 - KOHA E STUDIMIT");

let eHene = 95;
let eMarte = 80;
let eMerkure = 115;

let minutat = eHene + eMarte + eMerkure;

let oret = Math.floor(minutat / 60);

let minutatMbetura = minutat % 60;

console.log("Minutat totale: " + minutat);
console.log("Oret: " + oret);
console.log("Minutat e mbetura: " + minutatMbetura);




console.log("USHRTIMI 7 - INVENTARI I DYQANIT");

let stoku = 120;

stoku -= 18;

console.log("Pas shitjes se pare: " + stoku);

stoku -= 27;

console.log("Pas shitjes se dyte: " + stoku);

stoku += 35;

console.log("Pas furnizimit: " + stoku);

let cmimi = 6.75;

let vleraStokut = stoku * cmimi;

console.log("Stoku perfundimtar: " + stoku);
console.log("Vlera e stokut: " + vleraStokut);



console.log("USHRTIMI 8 - SHPERNDARJA E MATERIALEVE");

let flete = 157;
let fletePerGrup = 6;

let grupet = Math.floor(flete / fletePerGrup);

let mbetjaFleteve = flete % fletePerGrup;

let kontrolli = grupet * fletePerGrup + mbetjaFleteve;

console.log("Grupet: " + grupet);
console.log("Fletet e mbetura: " + mbetjaFleteve);
console.log("Kontrolli: " + kontrolli);


console.log("USHRTIMI 9 - FATURA");

let cmimiTekst1 = "19.90";
let cmimiTekst2 = "8.50";

let sasia1 = 2;
let sasia2 = 3;

let cmimiNumer1 = Number(cmimiTekst1);
let cmimiNumer2 = Number(cmimiTekst2);

let produktiTotal1 = cmimiNumer1 * sasia1;
let produktiTotal2 = cmimiNumer2 * sasia2;

let shumaPorosise = produktiTotal1 + produktiTotal2;

let sherbimi = shumaPorosise * 10 / 100;

let totaliFinal = shumaPorosise + sherbimi;

let totaliFormatizuar = totaliFinal.toFixed(2);

console.log("Produkti 1: " + produktiTotal1);
console.log("Produkti 2: " + produktiTotal2);
console.log("Shuma: " + shumaPorosise);
console.log("Sherbimi: " + sherbimi);
console.log("Totali final: " + totaliFormatizuar);

console.log("Tipi i cmimit: " + typeof cmimiNumer1);
console.log("Tipi i vleres se formatizuar: " + typeof totaliFormatizuar);


console.log("USHRTIMI 10 - RAPORTI FINANCIAR");

let pjesemarres = 45;
let pagesa = 12;

let teArdhurat = pjesemarres * pagesa;

let paga = 180;
let materialet = 95;
let reklama = 60;

let shpenzimet = paga + materialet + reklama;

let diferenca = teArdhurat - shpenzimet;

shpenzimet += 25;

diferenca = teArdhurat - shpenzimet;

console.log("Te ardhurat: " + teArdhurat);
console.log("Shpenzimet: " + shpenzimet);
console.log("Diferenca: " + diferenca);
