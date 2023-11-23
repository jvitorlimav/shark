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
        document.getElementById("autoCampaignObjective").value = campaignObjective;

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
        textoCTR += "Oi!\n\nEspero que esteja tudo bem! \n\nAinda estou em demo, mas analisei os dados da sua campanha recente e notamos que o CTR está abaixo dos benchmarks da plataforma. Para ajudar a otimizar seus resultados, gostaria de compartilhar algumas dicas valiosas:\n\n1. Relevância do Anúncio: Certifique-se de que seu anúncio está diretamente alinhado com o público-alvo e a mensagem que deseja transmitir. A relevância é fundamental para atrair cliques de qualidade.\n\n2. Chamada para Ação (CTA) Clara e Atraente: Uma CTA persuasiva e clara incentiva os usuários a agir. Experimente variações e teste diferentes chamadas para descobrir o que funciona melhor para sua audiência.\n\n3. Segmentação Precisa: Refine sua segmentação para direcionar os anúncios para um público mais específico. Isso aumenta a probabilidade de seu anúncio ser relevante para quem o vê.\n\n4. Testes A/B: Realize testes com variações de anúncios para identificar elementos que podem impactar positivamente o CTR, como imagens, texto, cores e posicionamento.\n\n5. Landing Pages Otimizadas: Garanta que a página para a qual o anúncio direciona seja consistente com o conteúdo do anúncio e ofereça uma experiência de usuário de qualidade.\n\n6. Avalie a Competição: Analise o que seus concorrentes estão fazendo e identifique oportunidades ou lacunas que possam ser exploradas para diferenciar seus anúncios.\n\n7. Ajuste de Palavras-Chave: Se estiver utilizando anúncios baseados em pesquisa, ajuste e refine constantemente suas palavras-chave para atingir um público mais relevante.\n\n8. Aproveite Novos Formatos ou Canais: Considere explorar novos formatos de anúncios ou canais para alcançar sua audiência de maneira diferente e potencialmente mais eficaz.\n\nLembre-se, essas são apenas algumas estratégias que podem impactar positivamente seu CTR. Recomendamos testar e iterar continuamente para encontrar a combinação ideal para a sua campanha.\n\nEstamos aqui para ajudar a implementar essas sugestões e acompanhar os resultados para alcançar os objetivos desejados. Se tiver alguma dúvida ou precisar de mais informações, estou à disposição.\n\nAtenciosamente,\n[Seu Nome]\n";
    } else if(compAvgCTR > baselineCTR){
        textoCTR += "Caro Cliente,\n\nEspero que esteja tudo bem! Analisamos os dados da sua campanha recente e notamos que o CTR está acima dos benchmarks da plataforma. Parabéns pelos resultados! Para manter e até mesmo aprimorar ainda mais o desempenho, gostaria de sugerir algumas estratégias:\n\n1. Aproveite o Momentum: Continue mantendo a qualidade dos seus anúncios e aproveite o momento positivo para impulsionar ainda mais o engajamento.\n\n2. Refine Ainda Mais: Mesmo com resultados positivos, sempre há espaço para refinamento. Analise os dados detalhadamente e identifique áreas que podem ser otimizadas.\n\n3. Explore Novas Possibilidades: Experimente novos formatos de anúncios ou canais para expandir seu alcance e descobrir novas oportunidades.\n\n4. Foco na Qualidade: Mantenha a relevância e qualidade dos anúncios. Continue oferecendo aos usuários uma experiência consistente e valiosa.\n\n5. Testes Incrementais: Realize testes incrementais para validar novas estratégias antes de implementá-las em grande escala.\n\nLembre-se, a consistência e a busca contínua por melhorias são fundamentais para manter e elevar seus resultados.\n\nEstamos à disposição para discutir essas estratégias e auxiliar na implementação para garantir que você continue alcançando excelentes resultados.\n\nAtenciosamente,\n[Seu Nome]\n";
    } else {
        textoCTR += "Caro Cliente,\n\nEspero que esteja tudo bem! Após analisar os dados da sua campanha, percebemos que o CTR está exatamente de acordo com os benchmarks da plataforma. Isso é um ótimo sinal de que sua campanha está no caminho certo!\n\nPara manter essa performance consistente e até mesmo superar os benchmarks, considere algumas estratégias adicionais:\n\n1. Aprofunde a Análise: Explore detalhes mais profundos dos dados para identificar áreas que possam ser otimizadas mesmo quando os resultados estão satisfatórios.\n\n2. Experimentação Controlada: Teste pequenas variações nos anúncios ou nas estratégias para avaliar se há potencial para melhorias.\n\n3. Monitoramento Constante: Mantenha um acompanhamento constante dos dados para reagir rapidamente a qualquer mudança no desempenho.\n\n4. Inovação Contínua: Esteja aberto a novas ideias e tendências do mercado que possam aprimorar ainda mais seus resultados.\n\nContinue com o bom trabalho e não hesite em nos contatar para discutir estratégias adicionais que possam impulsionar ainda mais sua campanha.\n\nAtenciosamente,\n[Seu Nome]\n";
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