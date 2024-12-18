var step3 = document.getElementById("step-3");
var step4 = document.getElementById("step-4");
var step5 = document.getElementById("step-5");

var compareBaselineButtonSet = document.getElementById("compareBaselineButtonSet");
var copyResultSet = document.getElementById("copyResultSet");

function setInitialState() {
    showStep3();
}

setInitialState();

function showStep3() {
    step3.style.display = "block";
    step4.style.display = "none";
    step5.style.display = "none";

    compareBaselineButtonSet.setAttribute("hidden", true);
    copyResultSet.setAttribute("hidden", true);
}

function showStep4() {
    step3.style.display = "none";
    step4.style.display = "block";
    step5.style.display = "none";

    compareBaselineButtonSet.removeAttribute("hidden");
    copyResultSet.setAttribute("hidden", true);
}

function showStep5() {
    step3.style.display = "none";
    step4.style.display = "none";
    step5.style.display = "block";

    compareBaselineButtonSet.setAttribute("hidden", true);
    copyResultSet.removeAttribute("hidden");
}


var compAvgCTR = 0;
var compAvgCPM = 0;
var compAvgCPC = 0;
var compAvgEngRate = 0;

function calculateAverage() {
    showStep4();

    compAvgCTR = 0;
    compAvgCPM = 0;
    compAvgCPC = 0;
    compAvgEngRate = 0;
    

    const fileInput = document.getElementById('fileInput');

    // Check if a file is selected
    if (fileInput.files.length === 0) {
        alert('Por favor, selecione um arquivo.');
        return;
    }

    const file = fileInput.files[0];

    const reader = new FileReader();

    reader.onload = function (e) {
        const data = e.target.result;

        // Read Excel file using sheetjs
        const workbook = XLSX.read(data, { type: 'binary' });

        // Assume there is only one sheet in the workbook
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Convert sheet data to JSON
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false });

        let campaignObjective = jsonData[7][17]
        document.getElementById("autoCampaignObjective").value = 'Campanha de ' + campaignObjective;

        console.log(campaignObjective);

        let somaClicks = 0;
        let somaImpressions = 0;
        let somaInvestment = 0;
        let somaEngagement = 0;

        for (let i = 6; i < jsonData.length; i++) {

            let clicks = isNaN(parseWholeNumber(jsonData[i][26])) ? 0 : parseWholeNumber(jsonData[i][26]);
            let impressions = isNaN(parseWholeNumber(jsonData[i][25])) ? 0 : parseWholeNumber(jsonData[i][25]);
            let investment = isNaN(parseDecimalNumber(jsonData[i][24])) ? 0 : parseDecimalNumber(jsonData[i][24]);

            let CPC = isNaN(jsonData[i][29]) ? 0 : jsonData[i][29]; 

            let engagement = isNaN(parseWholeNumber(jsonData[i][36])) ? 0 : parseWholeNumber(jsonData[i][36]); 

            somaClicks += clicks;
            somaImpressions += impressions
            somaInvestment += investment;
            somaEngagement += engagement;
        }

        let avgCTR = ((somaClicks/somaImpressions) * 100).toFixed(2);
        let avgCPM = ((somaInvestment/somaImpressions)*1000).toFixed(2);
        let avgCPC = (somaInvestment/somaClicks).toFixed(2);
        let avgEngRate = ((somaEngagement/somaImpressions) * 100).toFixed(2);

        compAvgCTR = avgCTR;
        compAvgCPM = avgCPM;
        compAvgCPC = avgCPC;
        compAvgEngRate = avgEngRate;

        console.log(avgCTR);
        console.log(avgCPM);
        console.log(avgCPC);
        console.log(avgEngRate);

        document.getElementById("avgCTR").innerHTML = avgCTR;
        document.getElementById("avgCPM").innerHTML = avgCPM;
        document.getElementById("avgCPC").innerHTML = avgCPC;
        document.getElementById("avgEngRate").innerHTML = avgEngRate;


        // Display averages (you can modify this part based on your needs)
        console.log('Média das Colunas:', jsonData);
    };

    reader.readAsBinaryString(file);
}

function comparaBaseline(){
    showStep5();

    let baselineCTR = document.getElementById("baselineAvgCTR").value;
    //let baselineCPM = document.getElementById("baselineAvgCPM").value;
    // let baselineCPC = document.getElementById("baselineAvgCPC").value;
    // let baselineEngRate = document.getElementById("baselineAvgEngRate").value;


    let textoCTR = "";
    let textoCPM = "";
    let textoCPC = "";
    let textoEngRate = "";

    console.log(baselineCTR);
    //CTR
    if(compAvgCTR < baselineCTR){
        textoCTR = "O CTR atualmente está abaixo dos benchmarks da plataforma, isso significa que é necessário revisar o nosso público e mensagem que estão transmitindo. Para isso recomendamos que:\n\nTeste: Experimente diferentes criativos para o público, assim você pode pausar o anúncio que estiver performando menos e, de quebra, ainda otimizar o seu orçamento.\nAnálise de concorrentes: Veja o que seus concorrentes têm feito e busque insights para melhorar a estratégia.\nRelevância para o público-alvo: sua mensagem é relevante para esse público, se sim, por qual motivo eles não estão clicando? Pode ser a mensagem que estamos transmitindo, lembre-se que um anúncio deve chamar a atenção e parecer importante para seu público."
    } else if(compAvgCTR > baselineCTR){
        textoCTR = "CTR está superando os benchmarks da plataforma! Esse desempenho reflete nosso trabalho estratégico e eficaz.\n\nPara manter essa trajetória de sucesso, é fundamental continuar monitorando e refinando as estratégias. Aproveitemos esse momento para buscar ainda mais melhorias:\n\n- Explorar novas abordagens criativas para impulsionar ainda mais o engajamento.\n- Analisar o que está funcionando para que possamos replicar e expandir essas práticas vitoriosas.\n- Estar atentos às mudanças no comportamento do nosso público-alvo para ajustar nossa mensagem de acordo."
    } else {
        textoCTR = "CTR está alinhado com os benchmarks da plataforma! Esse desempenho reflete nosso trabalho estratégico e eficaz.\n\nPara manter essa trajetória de sucesso, é fundamental continuar monitorando e refinando as estratégias. Aproveitemos esse momento para buscar ainda mais melhorias:\n\n- Explorar novas abordagens criativas para impulsionar ainda mais o engajamento.\n- Analisar o que está funcionando para que possamos replicar e expandir essas práticas vitoriosas.\n- Estar atentos às mudanças no comportamento do nosso público-alvo para ajustar nossa mensagem de acordo."
    }

    //CPM
    // if(baselineCPM < compAvgCPM){
    //     textoCPM += "";
    // } else if(baselineCPM > compAvgCPM){
    //     textoCPM += "";
    // } else {
    //     textoCPM += "";
    // }
    
    //CPC
    // if(baselineCPC < compAvgCPC){
    //     textoCPC += "";
    // } else if(baselineCPC > compAvgCPC){
    //     textoCPC += "";
    // } else {
    //     textoCPC += "";
    // }

    // //EngRate
    // if(baselineEngRate < compAvgEngRate){
    //     textoEngRate += "";
    // } else if(baselineEngRate > compAvgEngRate){
    //     textoEngRate += "";
    // } else {
    //     textoEngRate += "";
    // }

    let optimizeTextAreaSheet = document.getElementById("optimized_text_sheet");
    optimizeTextAreaSheet.value = textoCTR;

}

//Copia a otimização
function copyResult() {
    var optimizedText = document.getElementById("optimized_text_sheet");
  
    // Seleciona o conteúdo do campo de texto
    optimizedText.select();
    optimizedText.setSelectionRange(0, 99999); // Para dispositivos móveis
  
    // Copia o conteúdo selecionado para a área de transferência
    document.execCommand("copy");
  
    // Opcional: Fornece um feedback ao usuário
    alert("Texto copiado");
  }

function parseDecimalNumber(value) {
    let cleanString = value.replace(",", "").replace(".", "");
    return parseInt(cleanString)/100;
}

function parseWholeNumber(value) {
    return parseInt(value);
}

function uploadFile(){
    document.getElementById("fileInput").click();
}