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

        let somaClicks = 0;
        let somaImpressions = 0;
        let somaInvestment = 0;
        let somaEngagement = 0;
        let somaAlcance = 0;
        let somaConversoes = 0;
        let somaReaction = 0;
        let somaReprod = 0;
        let somaViews = 0;
        let somaConc = 0;

        for (let i = 6; i < jsonData.length; i++) {

            let clicks = isNaN(parseWholeNumber(jsonData[i][26])) ? 0 : parseWholeNumber(jsonData[i][26]);
            let impressions = isNaN(parseWholeNumber(jsonData[i][25])) ? 0 : parseWholeNumber(jsonData[i][25]);
            let investment = isNaN(parseDecimalNumber(jsonData[i][24])) ? 0 : parseDecimalNumber(jsonData[i][24]);
            let engagement = isNaN(parseWholeNumber(jsonData[i][36])) ? 0 : parseWholeNumber(jsonData[i][36]);
            let conversoes = isNaN(parseWholeNumber(jsonData[i][45])) ? 0 : parseWholeNumber(jsonData[i][45]);
            let reacoes = isNaN(parseWholeNumber(jsonData[i][30])) ? 0 : parseWholeNumber(jsonData[i][30]);
            let reproduc = isNaN(parseWholeNumber(jsonData[i][59])) ? 0 : parseWholeNumber(jsonData[i][59]);
            let viwesVid = isNaN(parseWholeNumber(jsonData[i][60])) ? 0 : parseWholeNumber(jsonData[i][60]);
            let vidConc = isNaN(parseWholeNumber(jsonData[i][65])) ? 0 : parseWholeNumber(jsonData[i][65]);
          

            somaClicks += clicks;
            somaImpressions += impressions
            somaInvestment += investment;
            somaEngagement += engagement;
            somaConversoes += conversoes;
            somaReaction += reacoes;
            somaReprod += reproduc;
            somaViews += viwesVid;
            somaConc += vidConc;
        }

        let avgCTR = ((somaClicks / somaImpressions) * 100).toFixed(2);
        let avgCPM = ((somaInvestment / somaImpressions) * 1000).toFixed(2);
        let avgCPC = (somaInvestment / somaClicks).toFixed(2);
        let avgEngRate = ((somaEngagement / somaImpressions) * 100).toFixed(2);
        let avgViewRate = ((somaViews / somaImpressions) * 100).toFixed(2);
        let avgConclusionRate = ((somaConc / somaReprod) * 100).toFixed(2);
        let avgCoastpConv = 0;


        if (somaConversoes == 0) {
            avgCoastpConv = 0;
        } else {
            avgCoastpConv = ((somaInvestment / somaConversoes) * 100).toFixed(2);
        }

        let avgConvRate = ((somaConversoes / somaClicks) * 100).toFixed(2);

        compAvgCTR = avgCTR;
        compAvgCPM = avgCPM;
        compAvgCPC = avgCPC;
        compAvgEngRate = avgEngRate;
        compAvgCoastConversion = avgCoastpConv;

        atualizarTabela(campaignObjective, avgCTR, somaImpressions, avgEngRate, avgCoastpConv, avgConvRate, somaConversoes, avgCPC, somaClicks, somaReaction, somaReprod, avgViewRate, avgConclusionRate);
    };

    reader.readAsBinaryString(file);


}

// Função para atualizar os dados da tabela com base no objetivo da campanha
function atualizarTabela(objetivoCampanha, avgCTR, somaImpressions, avgEngRate, avgCoastpConv, avgConvRate, somaConversoes, avgCPC, somaClicks, somaReaction, somaReprod, avgViewRate, avgConclusionRate) {
    const tabela = document.getElementById('campaignData');

    // Limpando o conteúdo atual da tabela
    tabela.innerHTML = '';

    // Dicionário com os dados para cada objetivo da campanha
    const dadosPorObjetivo = {
        'Brand awareness': [
            {
                title: 'CTR',
                value: avgCTR,
                needsBaseline: true,
                inputId: 'baselineAvgCTR'
            },
            {
                title: 'Impressões',
                value: somaImpressions,
                needsBaseline: false,
                inputId: ''
            },
            {
                title: 'Taxa de Engajamento',
                value: avgEngRate,
                needsBaseline: true,
                inputId: 'EngRate'

            }
        ],

        'Conhecimento da marca': [
            {
                title: 'CTR',
                value: avgCTR,
                needsBaseline: true,
                inputId: 'baselineAvgCTR'
            },
            {
                title: 'Impressões',
                value: somaImpressions,
                needsBaseline: false,
                inputId: ''
            },
            {
                title: 'Taxa de Engajamento',
                value: avgEngRate,
                needsBaseline: true,
                inputId: 'EngRate'

            }
        ],

        'Website conversions': [
            {
                title: 'CTR',
                value: avgCTR,
                needsBaseline: true,
                inputId: 'baselineAvgCTR'
            },
            {
                title: 'Custo por Conversão',
                value: avgCoastpConv,
                needsBaseline: true,
                inputId: 'CustoConversao'
            },
            {
                title: 'Taxa de conversão',
                value: avgConvRate,
                needsBaseline: true,
                inputId: 'txConversao'

            },
            {
                title: 'Conversões',
                value: somaConversoes,
                needsBaseline: false,
                inputId: ''

            }
        ],

        'Conversões no site': [
            {
                title: 'CTR',
                value: avgCTR,
                needsBaseline: true,
                inputId: 'CTR'
            },
            {
                title: 'Custo por Conversão',
                value: avgCoastpConv,
                needsBaseline: true,
                inputId: 'CustoConversao'
            },
            {
                title: 'Taxa de conversão',
                value: avgConvRate,
                needsBaseline: true,
                inputId: 'txConversao'

            },
            {
                title: 'Conversões',
                value: somaConversoes,
                needsBaseline: false,
                inputId: ''

            }
        ],

        'Website visits': [
            {
                title: 'CTR',
                value: avgCTR,
                needsBaseline: true,
                inputId: 'baselineAvgCTR'
            },
            {
                title: 'Custo por Clique',
                value: avgCPC,
                needsBaseline: true,
                inputId: 'CPC'
            },
            {
                title: 'Cliques',
                value: somaClicks,
                needsBaseline: false,
                inputId: ''
            },
            {
                title: 'Taxa de Conversão',
                value: avgConvRate,
                needsBaseline: true,
                inputId: 'TxConversao'
            }
        ],

        'Visitas ao site': [
            {
                title: 'CTR',
                value: avgCTR,
                needsBaseline: true,
                inputId: 'baselineAvgCTR'
            },
            {
                title: 'Custo por Clique',
                value: avgCPC,
                needsBaseline: true,
                inputId: 'CPC'
            },
            {
                title: 'Cliques',
                value: somaClicks,
                needsBaseline: false,
                inputId: ''
            },
            {
                title: 'Taxa de Conversão',
                value: avgConvRate,
                needsBaseline: true,
                inputId: 'TxConversao'
            }
        ],

        'Engagement': [
            {
                title: 'CTR',
                value: avgCTR,
                needsBaseline: true,
                inputId: 'baselineAvgCTR'
            },
            {
                title: 'Taxa de Engajamento',
                value: avgEngRate,
                needsBaseline: true,
                inputId: 'EngRate'
            },
            {
                title: 'Impressões',
                value: somaImpressions,
                needsBaseline: false,
                inputId: ''
            },
            {
                title: 'Reações',
                value: somaReaction,
                needsBaseline: false,
                inputId: ''
            }
        ],

        'Engajamento': [
            {
                title: 'CTR',
                value: avgCTR,
                needsBaseline: true,
                inputId: 'baselineAvgCTR'
            },
            {
                title: 'Taxa de Engajamento',
                value: avgEngRate,
                needsBaseline: true,
                inputId: 'EngRate'
            },
            {
                title: 'Impressões',
                value: somaImpressions,
                needsBaseline: false,
                inputId: ''
            },
            {
                title: 'Reações',
                value: somaReaction,
                needsBaseline: false,
                inputId: ''
            }
        ],

        'Video view': [
            {
                title: 'CTR',
                value: avgCTR,
                needsBaseline: true,
                inputId: 'baselineAvgCTR'
            },
            {
                title: 'Reproduções',
                value: somaReprod,
                needsBaseline: false,
                inputId: ''
            },
            {
                title: 'Taxa de visualizações',
                value: avgViewRate,
                needsBaseline: true,
                inputId: 'TxVisualizacao'
            },
            {
                title: 'Taxa de Conclusões',
                value: avgConclusionRate,
                needsBaseline: true,
                inputId: 'TxConclusao'
            }
        ],

        'Visualizações do vídeo': [
            {
                title: 'CTR',
                value: avgCTR,
                needsBaseline: true,
                inputId: 'baselineAvgCTR'
            },
            {
                title: 'Reproduções',
                value: somaReprod,
                needsBaseline: false,
                inputId: ''
            },
            {
                title: 'Taxa de visualizações',
                value: avgViewRate,
                needsBaseline: true,
                inputId: 'TxVisualizacao'
            },
            {
                title: 'Taxa de Conclusões',
                value: avgConclusionRate,
                needsBaseline: true,
                inputId: 'TxConclusao'
            }
        ],

    };

    // Verificando se o objetivo da campanha existe nos dados
    if (objetivoCampanha in dadosPorObjetivo) {
        const dados = dadosPorObjetivo[objetivoCampanha];

        // Adicionando os dados à tabela
        dados.forEach(metrica => {
            const newRow = tabela.insertRow();
            const cellMetrica = newRow.insertCell(0);
            const cellDados = newRow.insertCell(1);
            const cellInputBaseline = newRow.insertCell(2);

            cellMetrica.textContent = metrica.title;
            cellDados.textContent = metrica.value; // Aqui você pode adicionar os dados reais

            if (metrica.needsBaseline) {
                var input = document.createElement('input');
                input.type = 'text'; // Define o tipo do input (neste caso, texto)
                input.id = metrica.inputId; 
                cellInputBaseline.appendChild(input);
            } else {
                cellInputBaseline.textContent = 'Não se aplica'
            }     

        });
    } else {
        // Se o objetivo da campanha não for encontrado, exibe uma mensagem
        const newRow = tabela.insertRow();
        const cellMsg = newRow.insertCell();
        cellMsg.setAttribute('colspan', '2');
        cellMsg.textContent = 'Objetivo da campanha não encontrado';
    }
}

// Exemplo de uso da função com um objetivo de campanha específico (pode ser dinâmico na sua implementação)
const objetivoCampanhaSelecionado = 'brandAwareness';
atualizarTabela(objetivoCampanhaSelecionado);






function comparaBaseline() {
    showStep5();

    let baselineCTR = document.getElementById("baselineAvgCTR").value;
    // let baselineCPM = document.getElementById("baselineAvgCPM").value;
    // let baselineCPC = document.getElementById("baselineAvgCPC").value;
    // let baselineEngRate = document.getElementById("baselineAvgEngRate").value;


    let textoCTR = "";
    let textoCPM = "";
    let textoCPC = "";
    let textoEngRate = "";


    //CTR
    if (compAvgCTR < baselineCTR) {
        textoCTR = "O CTR atualmente está abaixo dos benchmarks da plataforma, isso significa que é necessário revisar o nosso público e mensagem que estão transmitindo. Para isso recomendamos que:\n\nTeste: Experimente diferentes criativos para o público, assim você pode pausar o anúncio que estiver performando menos e, de quebra, ainda otimizar o seu orçamento.\nAnálise de concorrentes: Veja o que seus concorrentes têm feito e busque insights para melhorar a estratégia.\nRelevância para o público-alvo: sua mensagem é relevante para esse público, se sim, por qual motivo eles não estão clicando? Pode ser a mensagem que estamos transmitindo, lembre-se que um anúncio deve chamar a atenção e parecer importante para seu público."
    } else if (compAvgCTR >= baselineCTR) {
        textoCTR = "CTR está alinhado ou até mesmo superando os benchmarks da plataforma! Esse desempenho reflete nosso trabalho estratégico e eficaz.\n\nPara manter essa trajetória de sucesso, é fundamental continuar monitorando e refinando as estratégias. Aproveitemos esse momento para buscar ainda mais melhorias:\n\n- Explorar novas abordagens criativas para impulsionar ainda mais o engajamento.\n- Analisar o que está funcionando para que possamos replicar e expandir essas práticas vitoriosas.\n- Estar atentos às mudanças no comportamento do nosso público-alvo para ajustar nossa mensagem de acordo.";
    } else {
        textoCTR += '';
    }

    // //CPM
    // if (baselineCPM < compAvgCPM) {
    //     textoCPM += "";
    // } else if (baselineCPM > compAvgCPM) {
    //     textoCPM += "";
    // } else {
    //     textoCPM += "";
    // }

    // //CPC
    // if (baselineCPC < compAvgCPC) {
    //     textoCPC += "";
    // } else if (baselineCPC > compAvgCPC) {
    //     textoCPC += "";
    // } else {
    //     textoCPC += "";
    // }

    // //EngRate
    // if (baselineEngRate < compAvgEngRate) {
    //     textoEngRate += "";
    // } else if (baselineEngRate > compAvgEngRate) {
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
    return parseInt(cleanString) / 100;
}

function parseWholeNumber(value) {
    return parseInt(value);
}

function uploadFile() {
    document.getElementById("fileInput").click();
}