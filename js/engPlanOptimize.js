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
        document.getElementById("autoCampaignObjective").value = campaignObjective + ' campaign';

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


    let textCTR = "";
    let textoCPM = "";
    let textoCPC = "";
    let textoEngRate = "";

    //CTR
    if(compAvgCTR < baselineCTR){
        textCTR = "The current CTR is below the platform benchmarks, which means it's necessary to review our audience and the message being conveyed. For this, we recommend:\n\nTesting: Try different creatives for the audience, so you can pause the ad that's performing less and, at the same time, optimize your budget.\nCompetitor analysis: See what your competitors have been doing and seek insights to improve the strategy.\nRelevance to the target audience: Is your message relevant to this audience? If yes, why aren't they clicking? It might be the message we're conveying; remember, an ad should grab attention and seem important to your audience."
    } else if (compAvgCTR > baselineCTR) {
        textCTR = "CTR is exceeding the platform benchmarks! This performance reflects our strategic and effective work.\n\nTo maintain this successful path, it's crucial to keep monitoring and refining the strategies. Let's seize this moment to seek even more improvements:\n\n- Explore new creative approaches to further boost engagement.\n- Analyze what's working so we can replicate and expand these successful practices.\n- Be attentive to changes in our target audience's behavior to adjust our message accordingly."
    } else {
        textCTR = "CTR is aligned with the platform benchmarks! This performance reflects our strategic and effective work.\n\nTo maintain this successful path, it's crucial to keep monitoring and refining the strategies. Let's seize this moment to seek even more improvements:\n\n- Explore new creative approaches to further boost engagement.\n- Analyze what's working so we can replicate and expand these successful practices.\n- Be attentive to changes in our target audience's behavior to adjust our message accordingly."
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
    optimizeTextAreaSheet.value = textCTR;

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