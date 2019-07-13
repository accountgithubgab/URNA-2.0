var inputFirst = document.getElementById('first');
var inputSecond = document.getElementById('second');
var inputThird = document.getElementById('third');
var inputFourth = document.getElementById('fourth');
var img = document.querySelector('.img-borda img');
var inputNome = document.getElementById('nome');
var inputParido = document.getElementById('partido');
var inputParido1 = document.getElementById('partido1');
var inputTipo = document.getElementById('tipos');

/////RESETAR

function resetar(){
    alert("to resetando vagabundo");
}


//// AUTOTAB
function autotab(original, destination) {
    if (original.getAttribute && original.value.length == original.getAttribute("maxlength"))
        destination.focus()
}

////// CONFIRMA
function confirma() {

    var first = inputFirst.value;
    var second = inputSecond.value;
    var third = inputThird.value;
    var fourth = inputFourth.value;
    var inputConjunto = (first + second + third + fourth);

    limpa();

    switch (inputConjunto) {

        /////// 2B

        case '67':
            img.src = './img/MAD/presidente/tiago.jpeg';
            inputNome.value = 'Tiago do Vale de Oliveira';
            inputParido.value = 'MAD - Movimento Amplo de Direita';
            inputTipo.value = 'Presidente';
            break;

        case '6748':
            img.src = './img/MAD/caioE.jpeg';
            inputNome.value = 'Caio Eduardo de Espindola';
            inputParido.value = 'MAD - Movimento Amplo de Direita';
            inputTipo.value = 'Deputado';
            break;

        case '6778':
            img.src = './img/MAD/vitorC.jpeg';
            inputNome.value = 'Vitor Lostada da Cunha';
            inputParido.value = 'MAD - Movimento Amplo de Direita';
            inputTipo.value = 'Deputado';
            break;

        case '6726':
            img.src = './img/MAD/samuel.jpeg';
            inputNome.value = 'Samuel de Sousa Araujo Silva';
            inputParido.value = 'MAD - Movimento Amplo de Direita';
            inputTipo.value = 'Deputado';
            break;

        case '42':
            img.src = './img/PLB/presidente/matheusM.jpeg';
            inputNome.value = 'Matheus Marcos Espindola';
            inputParido.value = 'PLB - Partido Liberal Brasileiro';
            inputTipo.value = 'Presidente';
            break;

        case '4224':
            img.src = './img/PLB/luiz.jpeg';
            inputNome.value = 'Luiz Gustavo da Silva Penachin';
            inputParido.value = 'PLB - Partido Liberal Brasileiro';
            inputTipo.value = 'Deputado';
            break;

        case '4242':
            img.src = './img/PLB/pedro.jpeg';
            inputNome.value = 'Pedro Valentin Dutra';
            inputParido.value = 'PLB - Partido Liberal Brasileiro';
            inputTipo.value = 'Deputado';
            break;

        case '4222':
            img.src = './img/PLB/joaoB.jpeg';
            inputNome.value = 'João Vitor Schwambach Brasil';
            inputParido.value = 'PLB - Partido Liberal Brasileiro';
            inputTipo.value = 'Deputado';
            break;

        case '69':
            img.src = './img/PBM/presidente/mateusS.jpeg';
            inputNome.value = 'Mateus Salgado Barboza Costa';
            inputParido.value = 'PBM - Partido Brasil Melhor';
            inputTipo.value = 'Presidente';
            break;

        case '6969':
            img.src = './img/PBM/gabrielZ.jpeg';
            inputNome.value = 'Gabriel Zatorski';
            inputParido.value = 'PBM - Partido Brasil Melhor';
            inputTipo.value = 'Deputado';
            break;

        case '6996':
            img.src = './img/PBM/joaoP.jpeg';
            inputNome.value = 'João Pedro Philippi Ferreira';
            inputParido.value = 'PBM - Partido Brasil Melhor';
            inputTipo.value = 'Deputado';
            break;

        case '6966':
            img.src = './img/PBM/arthur.jpeg';
            inputNome.value = 'Arthur George da Silva';
            inputParido.value = 'PBM - Partido Brasil Melhor';
            inputTipo.value = 'Deputado';
            break;

        case '24':
            img.src = './img/PJ/presidente/gabrielaT.jpeg';
            inputNome.value = 'Gabriela Thiesen';
            inputParido.value = 'PJ - Partido Justo';
            inputTipo.value = 'Presidente';
            break;

        case '2403':
            img.src = './img/PJ/giulia.jpeg';
            inputNome.value = 'Giulia Sbors Pereira';
            inputParido.value = 'PJ - Partido Justo';
            inputTipo.value = 'Deputado';
            break;

        case '2420':
            img.src = './img/PJ/lucasB.jpeg';
            inputNome.value = 'Lucas Belli da Silva';
            inputParido.value = 'PJ - Partido Justo';
            inputTipo.value = 'Deputado';
            break;

        case '2442':
            img.src = './img/PJ/sophia.jpeg';
            inputNome.value = 'Sophia Graccioli Marçal Salvan';
            inputParido.value = 'PJ - Partido Justo';
            inputTipo.value = 'Deputado';
            break;

        case '39':
            img.src = './img/PLCJ/presidente/caioG.jpeg';
            inputNome.value = 'Caio Guerra Marba Santos';
            inputParido.value = 'PLCJ - Partido Liberal das Causas Justas';
            inputTipo.value = 'Presidente';
            break;

        case '3911':
            img.src = './img/PLCJ/gabrielS.jpeg';
            inputNome.value = 'Gabriel de Souza';
            inputParido.value = 'PLCJ - Partido Liberal das Causas Justas';
            inputTipo.value = 'Deputado';
            break;

        case '3995':
            img.src = './img/PLCJ/kaue.jpeg';
            inputNome.value = 'Kauê Luiz de Borba';
            inputParido.value = 'PLCJ - Partido Liberal das Causas Justas';
            inputTipo.value = 'Deputado';
            break;

        case '3947':
            img.src = './img/PLCJ/theo.jpeg';
            inputNome.value = 'Théo Andrade Thiesen';
            inputParido.value = 'PLCJ - Partido Liberal das Causas Justas';
            inputTipo.value = 'Deputado';
            break;

        case '98':
            img.src = './img/PDM/presidente/isadora.jpeg';
            inputNome.value = 'Isadora Roman da Silva';
            inputParido.value = 'PDM - Partido das Mulheres';
            inputTipo.value = 'Presidente';
            break;

        case '9898':
            img.src = './img/PDM/ana.jpeg';
            inputNome.value = 'Ana Elisa Rieg Dias';
            inputParido.value = 'PDM - Partido das Mulheres';
            inputTipo.value = 'Deputado';
            break;

        case '9828':
            img.src = './img/PDM/gabrielaO.jpeg';
            inputNome.value = 'Gabriela Oliveira da Silva';
            inputParido.value = 'PDM - Partido das Mulheres';
            inputTipo.value = 'Deputado';
            break;

        case '9858':
            img.src = './img/PDM/natalia.jpeg';
            inputNome.value = 'Natalia Maria Luz';
            inputParido.value = 'PDM - Partido das Mulheres';
            inputTipo.value = 'Deputado';
            break;

        case '26':
            img.src = './img/MMCB/presidente/vitorM.jpeg';
            inputNome.value = 'Vitor Menezes Grando';
            inputParido.value = 'MMCB - Movimento Moderno da Causa';
            inputParido1.value = 'Brasileira';
            inputTipo.value = 'Presidente';
            break;

        case '2602':
            img.src = './img/MMCB/beatriz.jpeg';
            inputNome.value = 'Beatriz Inacio Martins';
            inputParido.value = 'MMCB';
            inputTipo.value = 'Deputado';
            break;

        case '2603':
            img.src = './img/MMCB/carol.jpeg';
            inputNome.value = 'Carolina Ribeiro Nuernberg';
            inputParido.value = 'MMCB - Movimento Moderno da Causa';
            inputParido1.value = 'Brasileira';
            inputTipo.value = 'Deputado';
            break;

        case '2604':
            img.src = './img/MMCB/maria.jpeg';
            inputNome.value = 'Maria Eduarda Longo';
            inputParido.value = 'MMCB - Movimento Moderno da Causa';
            inputParido1.value = 'Brasileira';
            inputTipo.value = 'Deputado';
            break;

        case '87':
            img.src = './img/PCLdB/presidente/gabrielL.jpeg';
            inputNome.value = 'Gabriel de Souza Leal';
            inputParido.value = 'PCLdB - Partido Centro Liberal do Brasil';
            inputTipo.value = 'Presidente';
            break;

        case '8707':
            img.src = './img/PCLdB/yan.jpg';
            inputNome.value = 'Yan Carlos Souza Moraes';
            inputParido.value = 'PCLdB - Partido Centro Liberal do Brasil';
            inputTipo.value = 'Deputado';
            break;

        case '8776':
            img.src = './img/PCLdB/nicolas.jpg';
            inputNome.value = 'Nycolas Padilha Pinheiro';
            inputParido.value = 'PCLdB - Partido Centro Liberal do Brasil';
            inputTipo.value = 'Deputado';
            break;

        case '8712':
            img.src = './img/PCLdB/robson.jpg';
            inputNome.value = 'Robson Vitor Silva da Silva';
            inputParido.value = 'PCLdB - Partido Centro Liberal do Brasil';
            inputTipo.value = 'Deputado';
            break;

        ///////// 2A

        case '37':
            img.src = './img/PSDD/presidente/matheusA.jpg';
            inputNome.value = 'Matheus Almeida';
            inputParido.value = 'PSDD - Partido Social Democrata da';
            inputParido1.value = 'Diversidade';
            inputTipo.value = 'Presidente';
            break;

        case '3714':
            img.src = './img/PSDD/nathalia.jpg';
            inputNome.value = 'Nathalia Accordi';
            inputParido.value = 'PSDD - Partido Social Democrata da';
            inputParido1.value = 'Diversidade';
            inputTipo.value = 'Deputado';
            break;

        case '3713':
            img.src = './img/PSDD/antonio.jpg';
            inputNome.value = 'Antonio Schuch';
            inputParido.value = 'PSDD - Partido Social Democrata da';
            inputParido1.value = 'Diversidade';
            inputTipo.value = 'Deputado';
            break;

        case '3731':
            img.src = './img/PSDD/juliaC.jpg';
            inputNome.value = 'Julia Chaltein';
            inputParido.value = 'PSDD - Partido Social Democrata da';
            inputParido1.value = 'Diversidade';
            inputTipo.value = 'Deputado';
            break;

        case '66':
            img.src = './img/PCA/presidente/lucasO.jpg';
            inputNome.value = 'Lucas de Oliveira';
            inputParido.value = 'PCA - Partido Cripto Anarquista';
            inputTipo.value = 'Presidente';
            break;

        case '6660':
            img.src = './img/PCA/arthurD.jpg';
            inputNome.value = 'Arthur Farias';
            inputParido.value = 'PCA - Partido Cripto Anarquista';
            inputTipo.value = 'Deputado';
            break;

        case '6669':
            img.src = './img/PCA/lucasN.jpg';
            inputNome.value = 'Lucas Nazário';
            inputParido.value = 'PCA - Partido Cripto Anarquista';
            inputTipo.value = 'Deputado';
            break;

        case '6699':
            img.src = './img/PCA/thomas.jpg';
            inputNome.value = 'Thomas Niehues';
            inputParido.value = 'PCA - Partido Cripto Anarquista'
            inputTipo.value = 'Deputado';
            break;

        case '49':
            img.src = './img/PRD/presidente/camila.jpg';
            inputNome.value = 'Camilia Kirch';
            inputParido.value = 'PRD - Partido da Renovação Democrática';
            inputTipo.value = 'Presidente';
            break;

        case '4925':
            img.src = './img/PRD/marcus.jpg';
            inputNome.value = 'Marcus Vinicius';
            inputParido.value = 'PRD - Partido da Renovação Democrática';
            inputTipo.value = 'Deputado';
            break;

        case '4911':
            img.src = './img/PRD/juliaT.jpg';
            inputNome.value = 'Julia Trento';
            inputParido.value = 'PRD - Partido da Renovação Democrática';
            inputTipo.value = 'Deputado';
            break;

        case '4913':
            img.src = './img/PRD/barbara.jpg';
            inputNome.value = 'Barbara Monique';
            inputParido.value = 'PRD - Partido da Renovação Democrática';
            inputTipo.value = 'Deputado';
            break;

        case '57':
            img.src = './img/PDL/presidente/ricardo.jpg';
            inputNome.value = 'Ricardo';
            inputParido.value = 'PDL - Partido Democrático Liberal';
            inputTipo.value = 'Presidente';
            break;

        case '5705':
            img.src = './img/PDL/luana.jpg';
            inputNome.value = 'Luana Paimel';
            inputParido.value = 'PDL - Partido Democrático Liberal';
            inputTipo.value = 'Deputado';
            break;

        case '5769':
            img.src = './img/PDL/matheusP.jpg';
            inputNome.value = 'Matheus Paraiso';
            inputParido.value = 'PDL - Partido Democrático Liberal';
            inputTipo.value = 'Deputado';
            break;

        case '5701':
            img.src = './img/PDL/andre.jpg';
            inputNome.value = 'Sara Ribeiro';
            inputParido.value = 'PDL - Partido Democrático Liberal';
            inputTipo.value = 'Deputado';
            break;


        case '97':
            img.src = './img/FNB/presidente/jefferson.jpg';
            inputNome.value = 'Jefferson Carradore Filho';
            inputParido.value = 'FNB - Frente Neo Liberal Brasileira';
            inputTipo.value = 'Presidente';
            break;


        case '9766':
            img.src = './img/FNB/marcosH.jpg';
            inputNome.value = 'Marcos Henrique Warmling';
            inputParido.value = 'FNB - Frente Neo Liberal Brasileira';
            inputTipo.value = 'Deputado';
            break;


        case '9723':
            img.src = './img/FNB/lucasM.jpg';
            inputNome.value = 'Lucas Medeiros Marcos';
            inputParido.value = 'FNB - Frente Neo Liberal Brasileira';
            inputTipo.value = 'Deputado';
            break;

        case '9788':
            img.src = './img/FNB/miguel.jpg';
            inputNome.value = 'Miguel Gonzaga Machado';
            inputParido.value = 'FNB - Frente Neo Liberal Brasileira';
            inputTipo.value = 'Deputado';
            break;

        case 'q':
            img.src = './img/PLIE/presidente/daviL.jpg';
            inputNome.value = '';
            inputParido.value = '';
            inputTipo.value = '';
            break;

        case 's':
            img.src = './img/PLIE/gabriel.jpg';
            inputNome.value = '';
            inputParido.value = '';
            inputTipo.value = '';
            break;

        case 'd':
            img.src = './img/PLIE/mateusN.jpg';
            inputNome.value = '';
            inputParido.value = '';
            inputTipo.value = '';
            break;

        case 'f':
            img.src = './img/PLIE/reinaldo.jpg';
            inputNome.value = '';
            inputParido.value = '';
            inputTipo.value = '';
            break;

        case 'g':
            img.src = './img/PRL/gabrielaG.jpg';
            inputNome.value = '';
            inputParido.value = '';
            inputTipo.value = '';
            break;

        case 'b':
            img.src = './img/PRL/isabela.jpg';
            inputNome.value = '';
            inputParido.value = '';
            inputTipo.value = '';
            break;

        case 'm':
            img.src = './img/PRL/joaoS.jpg';
            inputNome.value = '';
            inputParido.value = '';
            inputTipo.value = '';
            break;

        case 'n':
            img.src = './img/PLIE/vitorN.jpg';
            inputNome.value = '';
            inputParido.value = '';
            inputTipo.value = '';
            break;

        case '0000':
            img.src = './img/limpa/branco.png';
            alert("Voto nulo.");
            break;

        default:
            img.src = './img/limpa/branco.png';
            alert("Candidato inexistente.")
            break;
    }
}
/////// BRANCO
function branco() {

    var inputConjunto = "branco";
    alert("Voto branco.");
    console.log(inputConjunto);
    limpa();
}
////// LIMPA
function limpa() {
    inputFirst.value = "";
    inputSecond.value = "";
    inputThird.value = "";
    inputFourth.value = "";
    inputNome.value = "";
    inputParido.value = "";
    inputParido1.value = "";
    inputTipo.value = "";
    img.src = './img/limpa/branco.png';
}
///// ENVIAR
function enviar() {
}
//////////// VISUALIZAR
function visualizar() {
    var first = inputFirst.value;
    var second = inputSecond.value;
    var third = inputThird.value;
    var fourth = inputFourth.value;
    var inputConjunto = (first + second + third + fourth);
    
    switch (inputConjunto) {
        
        /////// 2B
        case '67':
            img.src = './img/MAD/presidente/tiago.jpeg';
            inputNome.value = 'Tiago do Vale de Oliveira';
            inputParido.value = 'MAD - Movimento Amplo de Direita';
            inputTipo.value = 'Presidente';
            break;

        case '6748':
            img.src = './img/MAD/caioE.jpeg';
            inputNome.value = 'Caio Eduardo de Espindola';
            inputParido.value = 'MAD - Movimento Amplo de Direita';
            inputTipo.value = 'Deputado';
            break;

        case '6778':
            img.src = './img/MAD/vitorC.jpeg';
            inputNome.value = 'Vitor Lostada da Cunha';
            inputParido.value = 'MAD - Movimento Amplo de Direita';
            inputTipo.value = 'Deputado';
            break;

        case '6726':
            img.src = './img/MAD/samuel.jpeg';
            inputNome.value = 'Samuel de Sousa Araujo Silva';
            inputParido.value = 'MAD - Movimento Amplo de Direita';
            inputTipo.value = 'Deputado';
            break;

        case '42':
            img.src = './img/PLB/presidente/matheusM.jpeg';
            inputNome.value = 'Matheus Marcos Espindola';
            inputParido.value = 'PLB - Partido Liberal Brasileiro';
            inputTipo.value = 'Presidente';
            break;

        case '4224':
            img.src = './img/PLB/luiz.jpeg';
            inputNome.value = 'Luiz Gustavo da Silva Penachin';
            inputParido.value = 'PLB - Partido Liberal Brasileiro';
            inputTipo.value = 'Deputado';
            break;

        case '4242':
            img.src = './img/PLB/pedro.jpeg';
            inputNome.value = 'Pedro Valentin Dutra';
            inputParido.value = 'PLB - Partido Liberal Brasileiro';
            inputTipo.value = 'Deputado';
            break;

        case '4222':
            img.src = './img/PLB/joaoB.jpeg';
            inputNome.value = 'João Vitor Schwambach Brasil';
            inputParido.value = 'PLB - Partido Liberal Brasileiro';
            inputTipo.value = 'Deputado';
            break;

        case '69':
            img.src = './img/PBM/presidente/mateusS.jpeg';
            inputNome.value = 'Mateus Salgado Barboza Costa';
            inputParido.value = 'PBM - Partido Brasil Melhor';
            inputTipo.value = 'Presidente';
            break;

        case '6969':
            img.src = './img/PBM/gabrielZ.jpeg';
            inputNome.value = 'Gabriel Zatorski';
            inputParido.value = 'PBM - Partido Brasil Melhor';
            inputTipo.value = 'Deputado';
            break;

        case '6996':
            img.src = './img/PBM/joaoP.jpeg';
            inputNome.value = 'João Pedro Philippi Ferreira';
            inputParido.value = 'PBM - Partido Brasil Melhor';
            inputTipo.value = 'Deputado';
            break;

        case '6966':
            img.src = './img/PBM/arthur.jpeg';
            inputNome.value = 'Arthur George da Silva';
            inputParido.value = 'PBM - Partido Brasil Melhor';
            inputTipo.value = 'Deputado';
            break;

        case '24':
            img.src = './img/PJ/presidente/gabrielaT.jpeg';
            inputNome.value = 'Gabriela Thiesen';
            inputParido.value = 'PJ - Partido Justo';
            inputTipo.value = 'Presidente';
            break;

        case '2403':
            img.src = './img/PJ/giulia.jpeg';
            inputNome.value = 'Giulia Sbors Pereira';
            inputParido.value = 'PJ - Partido Justo';
            inputTipo.value = 'Deputado';
            break;

        case '2420':
            img.src = './img/PJ/lucasB.jpeg';
            inputNome.value = 'Lucas Belli da Silva';
            inputParido.value = 'PJ - Partido Justo';
            inputTipo.value = 'Deputado';
            break;

        case '2442':
            img.src = './img/PJ/sophia.jpeg';
            inputNome.value = 'Sophia Graccioli Marçal Salvan';
            inputParido.value = 'PJ - Partido Justo';
            inputTipo.value = 'Deputado';
            break;

        case '39':
            img.src = './img/PLCJ/presidente/caioG.jpeg';
            inputNome.value = 'Caio Guerra Marba Santos';
            inputParido.value = 'PLCJ - Partido Liberal das Causas Justas';
            inputTipo.value = 'Presidente';
            break;

        case '3911':
            img.src = './img/PLCJ/gabrielS.jpeg';
            inputNome.value = 'Gabriel de Souza';
            inputParido.value = 'PLCJ - Partido Liberal das Causas Justas';
            inputTipo.value = 'Deputado';
            break;

        case '3995':
            img.src = './img/PLCJ/kaue.jpeg';
            inputNome.value = 'Kauê Luiz de Borba';
            inputParido.value = 'PLCJ - Partido Liberal das Causas Justas';
            inputTipo.value = 'Deputado';
            break;

        case '3947':
            img.src = './img/PLCJ/theo.jpeg';
            inputNome.value = 'Théo Andrade Thiesen';
            inputParido.value = 'PLCJ - Partido Liberal das Causas Justas';
            inputTipo.value = 'Deputado';
            break;

        case '98':
            img.src = './img/PDM/presidente/isadora.jpeg';
            inputNome.value = 'Isadora Roman da Silva';
            inputParido.value = 'PDM - Partido das Mulheres';
            inputTipo.value = 'Presidente';
            break;

        case '9898':
            img.src = './img/PDM/ana.jpeg';
            inputNome.value = 'Ana Elisa Rieg Dias';
            inputParido.value = 'PDM - Partido das Mulheres';
            inputTipo.value = 'Deputado';
            break;

        case '9828':
            img.src = './img/PDM/gabrielaO.jpeg';
            inputNome.value = 'Gabriela Oliveira da Silva';
            inputParido.value = 'PDM - Partido das Mulheres';
            inputTipo.value = 'Deputado';
            break;

        case '9858':
            img.src = './img/PDM/natalia.jpeg';
            inputNome.value = 'Natalia Maria Luz';
            inputParido.value = 'PDM - Partido das Mulheres';
            inputTipo.value = 'Deputado';
            break;

        case '26':
            img.src = './img/MMCB/presidente/vitorM.jpeg';
            inputNome.value = 'Vitor Menezes Grando';
            inputParido.value = 'MMCB - Movimento Moderno da Causa';
            inputParido1.value = 'Brasileira';
            inputTipo.value = 'Presidente';
            break;

        case '2602':
            img.src = './img/MMCB/beatriz.jpeg';
            inputNome.value = 'Beatriz Inacio Martins';
            inputParido.value = 'MMCB';
            inputTipo.value = 'Deputado';
            break;

        case '2603':
            img.src = './img/MMCB/carol.jpeg';
            inputNome.value = 'Carolina Ribeiro Nuernberg';
            inputParido.value = 'MMCB - Movimento Moderno da Causa';
            inputParido1.value = 'Brasileira';
            inputTipo.value = 'Deputado';
            break;

        case '2604':
            img.src = './img/MMCB/maria.jpeg';
            inputNome.value = 'Maria Eduarda Longo';
            inputParido.value = 'MMCB - Movimento Moderno da Causa';
            inputParido1.value = 'Brasileira';
            inputTipo.value = 'Deputado';
            break;

        case '87':
            img.src = './img/PCLdB/presidente/gabrielL.jpeg';
            inputNome.value = 'Gabriel de Souza Leal';
            inputParido.value = 'PCLdB - Partido Centro Liberal do Brasil';
            inputTipo.value = 'Presidente';
            break;

        case '8707':
            img.src = './img/PCLdB/yan.jpg';
            inputNome.value = 'Yan Carlos Souza Moraes';
            inputParido.value = 'PCLdB - Partido Centro Liberal do Brasil';
            inputTipo.value = 'Deputado';
            break;

        case '8776':
            img.src = './img/PCLdB/nicolas.jpg';
            inputNome.value = 'Nycolas Padilha Pinheiro';
            inputParido.value = 'PCLdB - Partido Centro Liberal do Brasil';
            inputTipo.value = 'Deputado';
            break;

        case '8712':
            img.src = './img/PCLdB/robson.jpg';
            inputNome.value = 'Robson Vitor Silva da Silva';
            inputParido.value = 'PCLdB - Partido Centro Liberal do Brasil';
            inputTipo.value = 'Deputado';
            break;

        ///////// 2A

        case '37':
            img.src = './img/PSDD/presidente/matheusA.jpg';
            inputNome.value = 'Matheus Almeida';
            inputParido.value = 'PSDD - Partido Social Democrata da';
            inputParido1.value = 'Diversidade';
            inputTipo.value = 'Presidente';
            break;

        case '3714':
            img.src = './img/PSDD/nathalia.jpg';
            inputNome.value = 'Nathalia Accordi';
            inputParido.value = 'PSDD - Partido Social Democrata da';
            inputParido1.value = 'Diversidade';
            inputTipo.value = 'Deputado';
            break;

        case '3713':
            img.src = './img/PSDD/antonio.jpg';
            inputNome.value = 'Antonio Schuch';
            inputParido.value = 'PSDD - Partido Social Democrata da';
            inputParido1.value = 'Diversidade';
            inputTipo.value = 'Deputado';
            break;

        case '3731':
            img.src = './img/PSDD/juliaC.jpg';
            inputNome.value = 'Julia Chaltein';
            inputParido.value = 'PSDD - Partido Social Democrata da';
            inputParido1.value = 'Diversidade';
            inputTipo.value = 'Deputado';
            break;

        case '66':
            img.src = './img/PCA/presidente/lucasO.jpg';
            inputNome.value = 'Lucas de Oliveira';
            inputParido.value = 'PCA - Partido Cripto Anarquista';
            inputTipo.value = 'Presidente';
            break;

        case '6660':
            img.src = './img/PCA/arthurD.jpg';
            inputNome.value = 'Arthur Farias';
            inputParido.value = 'PCA - Partido Cripto Anarquista';
            inputTipo.value = 'Deputado';
            break;

        case '6669':
            img.src = './img/PCA/lucasN.jpg';
            inputNome.value = 'Lucas Nazário';
            inputParido.value = 'PCA - Partido Cripto Anarquista';
            inputTipo.value = 'Deputado';
            break;

        case '6699':
            img.src = './img/PCA/thomas.jpg';
            inputNome.value = 'Thomas Niehues';
            inputParido.value = 'PCA - Partido Cripto Anarquista'
            inputTipo.value = 'Deputado';
            break;

        case '49':
            img.src = './img/PRD/presidente/camila.jpg';
            inputNome.value = 'Camilia Kirch';
            inputParido.value = 'PRD - Partido da Renovação Democrática';
            inputTipo.value = 'Presidente';
            break;

        case '4925':
            img.src = './img/PRD/marcus.jpg';
            inputNome.value = 'Marcus Vinicius';
            inputParido.value = 'PRD - Partido da Renovação Democrática';
            inputTipo.value = 'Deputado';
            break;

        case '4911':
            img.src = './img/PRD/juliaT.jpg';
            inputNome.value = 'Julia Trento';
            inputParido.value = 'PRD - Partido da Renovação Democrática';
            inputTipo.value = 'Deputado';
            break;

        case '4913':
            img.src = './img/PRD/barbara.jpg';
            inputNome.value = 'Barbara Monique';
            inputParido.value = 'PRD - Partido da Renovação Democrática';
            inputTipo.value = 'Deputado';
            break;

        case '57':
            img.src = './img/PDL/presidente/ricardo.jpg';
            inputNome.value = 'Ricardo';
            inputParido.value = 'PDL - Partido Democrático Liberal';
            inputTipo.value = 'Presidente';
            break;

        case '5705':
            img.src = './img/PDL/luana.jpg';
            inputNome.value = 'Luana Paimel';
            inputParido.value = 'PDL - Partido Democrático Liberal';
            inputTipo.value = 'Deputado';
            break;

        case '5769':
            img.src = './img/PDL/matheusP.jpg';
            inputNome.value = 'Matheus Paraiso';
            inputParido.value = 'PDL - Partido Democrático Liberal';
            inputTipo.value = 'Deputado';
            break;

        case '5701':
            img.src = './img/PDL/andre.jpg';
            inputNome.value = 'Sara Ribeiro';
            inputParido.value = 'PDL - Partido Democrático Liberal';
            inputTipo.value = 'Deputado';
            break;


        case '97':
            img.src = './img/FNB/presidente/jefferson.jpg';
            inputNome.value = 'Jefferson Carradore Filho';
            inputParido.value = 'FNB - Frente Neo Liberal Brasileira';
            inputTipo.value = 'Presidente';
            break;


        case '9766':
            img.src = './img/FNB/marcosH.jpg';
            inputNome.value = 'Marcos Henrique Warmling';
            inputParido.value = 'FNB - Frente Neo Liberal Brasileira';
            inputTipo.value = 'Deputado';
            break;


        case '9723':
            img.src = './img/FNB/lucasM.jpg';
            inputNome.value = 'Lucas Medeiros Marcos';
            inputParido.value = 'FNB - Frente Neo Liberal Brasileira';
            inputTipo.value = 'Deputado';
            break;

        case '9788':
            img.src = './img/FNB/miguel.jpg';
            inputNome.value = 'Miguel Gonzaga Machado';
            inputParido.value = 'FNB - Frente Neo Liberal Brasileira';
            inputTipo.value = 'Deputado';
            break;

        case 'q':
            img.src = './img/PLIE/presidente/daviL.jpg';
            inputNome.value = '';
            inputParido.value = '';
            inputTipo.value = '';
            break;

        case 's':
            img.src = './img/PLIE/gabriel.jpg';
            inputNome.value = '';
            inputParido.value = '';
            inputTipo.value = '';
            break;

        case 'd':
            img.src = './img/PLIE/mateusN.jpg';
            inputNome.value = '';
            inputParido.value = '';
            inputTipo.value = '';
            break;

        case 'f':
            img.src = './img/PLIE/reinaldo.jpg';
            inputNome.value = '';
            inputParido.value = '';
            inputTipo.value = '';
            break;

        case 'g':
            img.src = './img/PRL/gabrielaG.jpg';
            inputNome.value = '';
            inputParido.value = '';
            inputTipo.value = '';
            break;

        case 'b':
            img.src = './img/PRL/isabela.jpg';
            inputNome.value = '';
            inputParido.value = '';
            inputTipo.value = '';
            break;

        case 'm':
            img.src = './img/PRL/joaoS.jpg';
            inputNome.value = '';
            inputParido.value = '';
            inputTipo.value = '';
            break;

        case 'n':
            img.src = './img/PLIE/vitorN.jpg';
            inputNome.value = '';
            inputParido.value = '';
            inputTipo.value = '';
            break;

        case '0000':
            img.src = './img/limpa/branco.png';
            alert("Voto nulo.");
            break;

        default:
            img.src = './img/limpa/branco.png';
            alert("Candidato inexistente.")
            break;
    }
}