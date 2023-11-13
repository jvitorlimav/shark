
var step3 = document.getElementById("step-3");
var step4 = document.getElementById("step-4");
var step5 = document.getElementById("step-5");
var hiddenButton = document.getElementById("optimize_button_sheet");
var appearButton = document.getElementById("appear_button_sheet");

var previousStep3Display = step3.style.display;
var previousStep4Display = step4.style.display;
var previousStep5Display = step5.style.display;
var previousHiddenButtonState = hiddenButton.getAttribute('hidden');
var previousAppearButtonState = appearButton.getAttribute('hidden');

function showButton() {
    // Apenas configuração inicial, sem necessidade de armazenar estado anterior aqui
    hiddenButton.addEventListener("click", function() {
        appearButton.removeAttribute('hidden');
        hiddenButton.setAttribute('hidden', 'true');
    });
}

function desfazer_sheet() {
    // Restaurar os estados anteriores
    step3.style.display = previousStep3Display;
    step4.style.display = previousStep4Display;
    step5.style.display = previousStep5Display;
    hiddenButton.setAttribute('hidden', previousHiddenButtonState);
    appearButton.setAttribute('hidden', previousAppearButtonState);
    hiddenButton.removeAttribute('hidden'); 
}

function changeSegmentationStepSheet() {
    // Armazenar estado anterior
    previousStep3Display = step3.style.display;
    previousStep4Display = step4.style.display;
    previousStep5Display = step5.style.display;
    previousHiddenButtonState = hiddenButton.getAttribute('hidden');
    previousAppearButtonState = appearButton.getAttribute('hidden');

    // Atualizar os elementos conforme necessário
    step3.style.display = "none";
    step4.style.display = "block";
    step5.style.display = "none";
}

var compAvgCTR = 0;
var compAvgCPM = 0;
var compAvgCPC = 0;
var compAvgEngRate = 0;

function calculateAverage() {
    changeSegmentationStepSheet();

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
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        let somaCTR = 0;
        let somaCPM = 0;
        let somaCPC = 0;
        let somaEngRate = 0;

        for (let i = 6; i < jsonData.length; i++) {

            let CTR = isNaN(jsonData[i][27]) ? 0 : jsonData[i][27]; 
            let CPM = isNaN(jsonData[i][28]) ? 0 : jsonData[i][28]; 
            let CPC = isNaN(jsonData[i][29]) ? 0 : jsonData[i][29]; 
            let engRate = isNaN(jsonData[i][37]) ? 0 : jsonData[i][37]; 

            somaCTR += CTR;             
            somaCPM += CPM;
            somaCPC += CPC;
            somaEngRate += engRate;
        }

        const numberLines = jsonData.length - 6;

        let avgCTR = ((somaCTR/numberLines) * 100).toFixed(2);
        let avgCPM = (somaCPM/numberLines).toFixed(2);
        let avgCPC = (somaCPC/numberLines).toFixed(2);
        let avgEngRate = ((somaEngRate/numberLines) * 100).toFixed(2);

        //console.log(numberLines);

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

function changeSegmentationStepSheet2() {
    // Armazenar estado anterior
    previousStep3Display = step3.style.display;
    previousStep4Display = step4.style.display;
    previousStep5Display = step5.style.display;
    previousHiddenButtonState = hiddenButton.getAttribute('hidden');
    previousAppearButtonState = appearButton.getAttribute('hidden');

    // Atualizar os elementos conforme necessário
    step3.style.display = "none";
    step4.style.display = "none";
    step5.style.display = "block";
}

function comparaBaseline(){
    changeSegmentationStepSheet2();

    let baselineCTR = document.getElementById("baselineAvgCTR").value;
    let baselineCPM = document.getElementById("baselineAvgCPM").value;
    let baselineCPC = document.getElementById("baselineAvgCPC").value;
    let baselineEngRate = document.getElementById("baselineAvgEngRate").value;


    let textoCTR = "";
    let textoCPM = "";
    let textoCPC = "";
    let textoEngRate = "";

    console.log(baselineCTR);
    //CTR
    if(compAvgCTR < baselineCTR){
        textoCTR += "O CTR está abaixo da média da plataforma. Isso pode indicar que a eficácia das suas chamadas para ação ou a relevância do seu conteúdo pode estar aquém das expectativas. Considere revisar e ajustar a mensagem, o design ou a segmentação para melhorar a interação do seu público. Analisar o comportamento do usuário, realizar testes A/B e buscar feedback do seu público podem ser estratégias úteis para identificar áreas de melhoria. ";
    } else if(compAvgCTR > baselineCTR){
        textoCTR += "O CTR está acima da média, indicando que mais pessoas estão clicando nos seus anúncios ou conteúdos do que a média geral. Isso sugere uma abordagem eficaz e um maior envolvimento do público-alvo. Analise o que está funcionando e continue refinando suas estratégias para manter esse desempenho positivo.";
    } else {
        textoCTR += "Seu CTR nas campanhas está em linha com a média da plataforma. Isso indica uma performance sólida, alinhada com os resultados típicos observados. Continue monitorando o desempenho e considere realizar ajustes estratégicos conforme necessário.";
    }

    //CPM
    if(baselineCPM < compAvgCPM){
        textoCPM += "";
    } else if(baselineCPM > compAvgCPM){
        textoCPM += "";
    } else {
        textoCPM += "";
    }
    
    //CPC
    if(baselineCPC < compAvgCPC){
        textoCPC += "";
    } else if(baselineCPC > compAvgCPC){
        textoCPC += "";
    } else {
        textoCPC += "";
    }

    //EngRate
    if(baselineEngRate < compAvgEngRate){
        textoEngRate += "";
    } else if(baselineEngRate > compAvgEngRate){
        textoEngRate += "";
    } else {
        textoEngRate += "";
    }

    let optimizeTextAreaSheet = document.getElementById("optimized_text_sheet");
    optimizeTextAreaSheet.value = textoCTR;

}