/*!
* Start Bootstrap - Scrolling Nav v5.0.6 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

//Função que retorna o texto final
function otimizar(){
    const objetivo = document.getElementById("escObjetivo").value;
    console.log(objetivo);
    console.log(audienceSugestion());
    console.log(creativeSugestion());

    let textObjective = campaingObjective();
    let textAudience = audienceSugestion();
    let textCreative = creativeSugestion();
    let finalText = textObjective;
    finalText += "\n\nSeguem aqui algumas sugestões:" + textAudience + textCreative;
    finalText += "\n\nAbraços,";

    return finalText;
}

//Objetivo da campanha
function campaingObjective(){
  const selectedCampaingObjective = document.getElementById("escObjetivo");
  let objetivoValue = selectedCampaingObjective.options[selectedCampaingObjective.selectedIndex].value;


  switch(objetivoValue){
    case 'awareness':
      return 'adotar uma segmentação precisa e criar anúncios atraentes que capturem a atenção do seu público-alvo. Além disso, é importante desenvolver conteúdos relevantes e envolventes, explorando os temas em destaque na sua área de negócio. Considere também a possibilidade de utilizar formatos de anúncios criativos, como vídeos ou carrosséis, para transmitir sua mensagem de forma impactante. Não se esqueça de monitorar o desempenho da sua campanha por meio de métricas relevantes, como impressões, alcance e reconhecimento da marca. Dessa forma, você estará construindo uma estratégia sólida para fortalecer a visibilidade e o reconhecimento da sua marca.';

    case 'webVisit':
      return 'uma segmentação precisa e anúncios atrativos são fundamentais para o sucesso da sua estratégia de marketing. Além disso, é essencial criar conteúdos relevantes para sua audiência, abordando temas em alta na sua área de negócio. Se possível, desenvolva uma landing page otimizada para melhorar a conversão de visitantes em clientes. Não se esqueça também de acompanhar as métricas de desempenho, principalmente utilizando a insight tag.';

    case 'engagement':
      return 'criar anúncios atrativos e relevantes que despertem o interesse do seu público-alvo. Utilize chamadas persuasivas, imagens cativantes e mensagens personalizadas para capturar a atenção dos usuários. Além disso, experimente diferentes formatos de anúncios, como vídeos ou carrosséis, para diversificar o conteúdo e gerar mais interação. Incentive os usuários a curtirem, comentarem e compartilharem o conteúdo, oferecendo incentivos ou criando uma sensação de exclusividade. Acompanhe de perto as métricas de engajamento para avaliar o desempenho da campanha e fazer ajustes conforme necessário. Dessa forma, você estará maximizando o engajamento com seu conteúdo pago e obtendo melhores resultados em sua estratégia de marketing.';

    case 'videoView':
      return 'criar anúncios atraentes que despertem o interesse do seu público-alvo desde os primeiros segundos. Utilize thumbnails envolventes e títulos cativantes para chamar a atenção e incentivar os usuários a assistir ao vídeo completo. Além disso, mantenha os vídeos concisos e com um conteúdo relevante, transmitindo sua mensagem de forma clara e impactante. Considere também utilizar legendas para tornar o conteúdo mais acessível e atrativo. Lembre-se de monitorar as métricas de visualização para avaliar o desempenho do vídeo e fazer ajustes, se necessário. Ao seguir essas práticas, você estará aumentando a visualização de seus vídeos e maximizando o impacto da sua estratégia de marketing.';

    case 'leadGen':
      return 'utilizar chamadas persuasivas e destaque os benefícios claros que os usuários terão ao se envolverem com sua oferta. Ofereça um incentivo, como um e-book gratuito ou um webinar exclusivo, em troca das informações de contato dos usuários. Utilize formulários de geração de leads direto nos anúncios para facilitar o processo de conversão. Segmente seu público com precisão, direcionando os anúncios para as pessoas mais propensas a se interessarem pela sua oferta. Monitore as métricas de desempenho para avaliar a eficácia da sua campanha e fazer ajustes, se necessário. Seguindo essas práticas, você estará maximizando a geração de leads e impulsionando o sucesso da sua estratégia de marketing.';

    case 'webConv':
      return 'utilizar textos atrativos e chamadas claras para direcionar os usuários para a página de destino relevante. Certifique-se de que a página de destino seja otimizada e forneça uma experiência de usuário fluida. Destaque os benefícios exclusivos da sua oferta e inclua elementos visuais atraentes para atrair a atenção dos visitantes. Utilize elementos de prova social, como depoimentos de clientes satisfeitos, para aumentar a confiança dos usuários. Implemente formulários de contato ou de compra simplificados para facilitar o processo de conversão. Acompanhe as métricas de desempenho, para avaliar o sucesso da sua estratégia e fazer ajustes conforme necessário. Ao seguir essas práticas, você estará maximizando as conversões no seu site e impulsionando o crescimento do seu negócio.';
  }

}

//Sugestão de público
function audienceSugestion(){
    const compExp = document.getElementById("comp_exp");
    const audienceSize = document.getElementById("audience_size");
    const indSize = document.getElementById("ind_size");
    const influencers = document.getElementById("influencers");
    
    const audiences = [compExp, audienceSize, indSize, influencers].filter((audience) => {
        return audience.checked;
    });

    const selectedAudiences = audiences.map((audience) => {
        return audience.value;
    });

    let textAudience = "";

    selectedAudiences.forEach(audience => {
        textAudience += returnAudience(audience);
    });

    return textAudience;
}

function returnAudience(audience){

    switch(audience) {
      case 'cUser':
        return '\n\n▶ Competências do usuário + Nível de experiência: Ao construir públicos, é recomendado utilizar as competências e níveis de experiência dos usuários em vez de depender exclusivamente dos cargos. O campo "cargos" é preenchido livremente na plataforma, o que pode levar a informações imprecisas. Ao considerarmos as competências dos usuários juntamente com seus níveis de experiência, podemos obter resultados mais precisos e relevantes.'
  
      case 'indSiz':
        return '\n\n▶ Tamanho da empresa + Setor da empresa: Para alcançar pequenas, médias ou grandes empresas de uma indústria específica, utilize os filtros de tamanho e setor da empresa. Direcione sua campanha para um setor específico, como tecnologia, varejo ou serviços financeiros. Essa abordagem segmenta sua audiência de forma precisa e direcionada. ';
  
      case 'influ':
        return '\n\n▶ Decisores & influenciadores: É importante considerar todos os envolvidos na tomada de decisão do seu cliente, desde os principais tomadores de decisão até os influenciadores. Ao construir seu público-alvo, leve em conta essa complexidade e identifique os diferentes perfis de decisores e influenciadores. Dessa forma, você poderá abordar de maneira abrangente e eficaz, garantindo que sua mensagem seja relevante e persuasiva em todas as etapas do processo de decisão. ';
  
      case 'audSiz':
        return '\n\n▶ Aumentar tamanho da audiência: No LinkedIn, é aconselhável ter públicos com mais de 50 mil usuários para otimizar o desempenho das campanhas. Para aumentar o tamanho do público, você pode ampliar os critérios de segmentação, incluindo mais setores de negócios relevantes ou ajustando os requisitos de experiência. Isso permitirá alcançar um número maior de usuários e obter resultados mais eficazes nas campanhas.';
   
      default: return "";
    }  
}

//Sobre criativos
function creativeSugestion(){
    const cta = document.getElementById("cta");
    const hashUrl = document.getElementById("hash_url");
    const aBtest = document.getElementById("abtest");
        
    const audiences = [cta, hashUrl, aBtest].filter((sugCreative) => {
        return sugCreative.checked;
    });

    const selectedAudiences = audiences.map((sugCreative) => {
        return sugCreative.value;
    });

    let textCreative = "";

    selectedAudiences.forEach(sugCreative => {
        textCreative += returnSugCreative(sugCreative);
    });

    return textCreative;
}

function returnSugCreative(sugCreative){
    switch(sugCreative) {
        case 'cta':
        return '\n\n▶ Nas campanhas de conversão, é essencial ter um Call-to-Action (CTA) claro e direto no anúncio. O CTA é o que motiva os usuários a agir, como comprar, preencher um formulário ou entrar em contato. Certifique-se de tornar o CTA fácil de encontrar e compreender, para aumentar as chances de obter melhores resultados em suas campanhas.';
  
      case 'hashUrl':
        return '\n\n▶ Adicionar hashtags aos criativos aumenta o engajamento e alcance. Use hashtags relevantes para ampliar a visibilidade do conteúdo. Inclua a URL de destino para direcionar a ação dos usuários. Isso impulsiona o engajamento, as impressões orgânicas e facilita a conversão.';
  
      case 'aBtest':
        return '\n\n▶ Ao dividir seu público em grupos e expor cada grupo a variantes diferentes, como diferentes criativos, títulos ou segmentações, você pode avaliar qual abordagem gera melhores resultados. Isso permite que você tome decisões embasadas em dados reais e faça ajustes para melhorar o desempenho da sua campanha. O LinkedIn oferece recursos para configurar e acompanhar testes A/B, permitindo que você refine sua estratégia e alcance resultados mais efetivos.';
      default: return "";
    }  
}

//Função de modal (mostra o modal de email)

var step1 = document.getElementById("step-1");
var step2 = document.getElementById("step-2");
var hiddenButton = document.getElementById("optimize_button");
var appearButton = document.getElementById("appear_button");

var previousStep1Display = step1.style.display;
var previousStep2Display = step2.style.display;
var previousHiddenButtonState = hiddenButton.getAttribute('hidden');
var previousAppearButtonState = appearButton.getAttribute('hidden');

function changeSegmentationStep() {
    // Armazenar estado anterior
    previousStep1Display = step1.style.display;
    previousStep2Display = step2.style.display;
    previousHiddenButtonState = hiddenButton.getAttribute('hidden');
    previousAppearButtonState = appearButton.getAttribute('hidden');

    // Atualizar os elementos conforme necessário
    step1.style.display = "none";
    step2.style.display = "block";
}

function showButton() {
    // Apenas configuração inicial, sem necessidade de armazenar estado anterior aqui
    hiddenButton.addEventListener("click", function() {
        appearButton.removeAttribute('hidden');
        hiddenButton.setAttribute('hidden', 'true');
    });
}

function desfazer() {
    // Restaurar os estados anteriores
    step1.style.display = previousStep1Display;
    step2.style.display = previousStep2Display;
    hiddenButton.setAttribute('hidden', previousHiddenButtonState);
    appearButton.setAttribute('hidden', previousAppearButtonState);
    hiddenButton.removeAttribute('hidden'); 
}

//Super button
function callSuperButton(){
  showButton();
  changeSegmentationStep();
  let optimizationText = otimizar();

  let clientName = document.getElementById("client_name").value;
  let campaingName = document.getElementById("campaing_name").value;
  let objetivoSelect = document.getElementById("escObjetivo");
  let objetivoTexto = objetivoSelect.options[objetivoSelect.selectedIndex].text;
  let optimizeTextArea = document.getElementById("optimized_text");

  let emailBody = "Olá, " + clientName + "! Tudo bem?";
  emailBody += "\n\nQuero falar sobre algumas ideias para deixar sua campanha ainda melhor.";
  emailBody += "\n\nAnalisamos a campanha " + campaingName + " e encontramos algumas áreas que podem ser aprimoradas. Como a campanha tem o objetivo de " + objetivoTexto + " é sempre bom  " + optimizationText;

  optimizeTextArea.value = emailBody;

}

//desabilita botão até que os campos Nome do cliente e da campanha sejam preenchidos
function validarCampos() {
  const clientName = document.getElementById('client_name');
  const campaingName = document.getElementById('campaing_name');
  const optimizeButton = document.getElementById('optimize_button');
  
  clientName.addEventListener('input', validarCampos);
  campaingName.addEventListener('input', validarCampos);

    if (clientName.value.trim() !== '' && campaingName.value.trim() !== '') {
      optimizeButton.removeAttribute('disabled');
    } else {
      optimizeButton.setAttribute('disabled', 'disabled');
    }
}


//Copia a otimização
function copyOptimization() {
  var optimizedText = document.getElementById("optimized_text");

  // Seleciona o conteúdo do campo de texto
  optimizedText.select();
  optimizedText.setSelectionRange(0, 99999); // Para dispositivos móveis

  // Copia o conteúdo selecionado para a área de transferência
  document.execCommand("copy");

  // Opcional: Fornece um feedback ao usuário
  alert("Texto copiado");
}

