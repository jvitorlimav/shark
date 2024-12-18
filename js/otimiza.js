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
    //console.log(creativeSugestion());

    let textObjective = campaingObjective();
    let textAudience = audienceSugestion();
    let textCreative = creativeSugestion();
    let textProducts = productsSugestion();
    let textInfo = moreInfo();
    let finalText = textObjective;
    finalText += "\n\nSeguem aqui algumas sugestões:" + textAudience + textCreative + textProducts + textInfo;
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

    const refIncAud = document.getElementById("ref_IncAud");
    const refDecAud = document.getElementById("ref_DecAud");
    const customSeg = document.getElementById("custom_Seg");
    const eOr = document.getElementById("e_Or");
    const decAudExp = document.getElementById("dec_AudExp");
    const actAudExp = document.getElementById("act_AudExp");
    const lan = document.getElementById("l_AudNet");
    const matchRet = document.getElementById("match_Ret");
    const matchContTarg = document.getElementById("match_ContTarg");
    const matchAccTarg = document.getElementById("match_AccTarg");
    const matchLook = document.getElementById("match_Look");
    
    const audiences = [compExp, audienceSize, indSize, influencers, refIncAud, refDecAud, customSeg, eOr, decAudExp, actAudExp, lan, matchRet, matchLook, matchContTarg, matchAccTarg].filter((audience) => {
      console.log(audience); 
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
   
      case 'incAud':
        return '\n\n▶ De acordo com o seu objetivo de campanha não é recomendado utilizar uma audiência tão fechada, pois para esta etapa do funil estamos buscando por um maior alcance de público. Dessa forma, você pode expandir mais a sua audiência utilizando o recurso de "OU" para deixar o público mais aberto. ';

      case 'decAud':
        return '\n\n▶ De acordo com o seu objetivo de campanha não é recomendado utilizar uma audiência tão ampla, pois para esta etapa do funil estamos buscando um público mais nichado e que já conheça a marca. Dessa forma, você pode afunilar mais a sua audiência utilizando o recurso de "E" para deixar o público mais nichado. ';
        
      case 'customSeg':
        return '\n\n▶ Vejo que na sua campanha há a oportunidade de utilizar a ferramenta de "Segmento Customizado" , porque estamos falando de um público nichado e especifico. Sugiro que utilize o segmento customizado "XXXX"  para deixar sua audiência mais assertiva. Este é um recurso que apenas nós, do LinkedIn, conseguimos adicionar, então caso opte por essa sgestão nos avise para que eu possa incluir. ';

      case 'eOr':
        return '\n\n▶ É importante entender a diferença entre um público mais nichado e um mais aberto. Quando utilizamos o recurso "E" em uma segmentação estamos falando sobre características indispensáveis da sua audiência, e quando falamos sobre "OU" estamos dando um complemento ao que é indispensável. Preste atenção nas suas combinações e fique de olho também no tamanho da sua audiência, pois utilizar esses recursos pode deixa-la mais aberta ou fechada. ';
  
      case 'decAudExp':
        return '\n\n▶ No caso da sua campanha, não é aconselhado a utilizar o Audience Expansion. Veja mais neste link em quais situações do Audience Expansion se encaixa: https://www.linkedin.com/help/linkedin/answer/a418929/audience-expansion?lang=en-us&intendedLocale=uk';
        
      case 'actAudExp':
        return '\n\n▶ Você pode usar a Expansão de Público para aumentar o alcance de sua campanha exibindo seus anúncios para públicos com atributos semelhantes ao seu público-alvo. ';

      case 'lAudNet':
        return '\n\n▶ Ative a LinkedIn Audience Network. O LAN permite estender o alcance das suas campanhas de Sponsored Content, exibindo seus anúncios fora do feed do LinkedIn para usuários em aplicativos e sites confiáveis de terceiros. Quando você habilita a LinkedIn Audience Network na configuração da campanha, os mesmos parâmetros de segmentação,lance e orçamento são aplicados em outros canais. ';

      case 'matchRet':
        return '\n\n▶ Utilize o Matched Audiences RETARGETING. O Matched Audiences é um conjunto de opções de segmentação para aproveitar seus dados comerciais e os dados profissionais do LinkedIn. Isso resulta em uma estratégia de marketing mais rica que se baseia no que você já está fazendo. Com Matched Audiences Retargeting, você consegue alcançar visitantes da sua página de vendas e visitantes da sua product page com um estudo de caso de um cliente que teve bons resultados com o seu produto';
  
      case 'matchContTarg':
        return '\n\n▶ Utilize o Matched Audiences CONTACT TARGETING. O Matched Audiences é um conjunto de opções de segmentação para aproveitar seus dados comerciais e os dados profissionais do LinkedIn. Isso resulta em uma estratégia de marketing mais rica que se baseia no que você já está fazendo. Com Matched Audiences Retargeting, você consegue alcançar visitantes da sua página de vendas e visitantes da sua product page com um estudo de caso de um cliente que teve bons resultados com o seu produto';
        
      case 'matchAccTag':
        return '\n\n▶ Utilize o Matched Audiences RETARGETING. O Matched Audiences é um conjunto de opções de segmentação para aproveitar seus dados comerciais e os dados profissionais do LinkedIn. Isso resulta em uma estratégia de marketing mais rica que se baseia no que você já está fazendo. Com Matched Audiences inclui Retargeting, você consegue alcançar visitantes da sua página de vendas e visitantes da sua product page com um estudo de caso de um cliente que teve bons resultados com o seu produto';
  
      case 'matchLook':
        return '\n\n▶ Utilize o Matched Audiences RETARGETING. O Matched Audiences é um conjunto de opções de segmentação para aproveitar seus dados comerciais e os dados profissionais do LinkedIn. Isso resulta em uma estratégia de marketing mais rica que se baseia no que você já está fazendo. Com Matched Audiences inclui Retargeting, você consegue alcançar visitantes da sua página de vendas e visitantes da sua product page com um estudo de caso de um cliente que teve bons resultados com o seu produto';

      default: return "";
    }  
}

//Sobre criativos
function creativeSugestion(){
     const cta = document.getElementById("cta");
     const hashUrl = document.getElementById("hash_url");
     const aBtest = document.getElementById("abtest");
     const captionText = document.getElementById("caption_Text");
     const plusAd = document.getElementById("plus_Ad");
     const adQuality = document.getElementById("ad_Quality");
     const brand = document.getElementById("brand");
     const coherence = document.getElementById("coherence");
     const oldCreative = document.getElementById("old_creative");
     
     const creatives = [cta, hashUrl, aBtest, captionText, plusAd, adQuality, brand, coherence, oldCreative].filter((sugCreative) => {
        console.log(sugCreative);
         return sugCreative.checked;
     });
     const selectedCreatives = creatives.map((sugCreative) => {
         return sugCreative.value;
     });
     let textCreative = "";
     selectedCreatives.forEach(sugCreative => {
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
    
       case 'plusAd':
         return '\n\n▶ Inclua mais criativos. Recomendamos de 3 a 5 criativos por campanha para otimizar os custos e rentabilizar o budget da campanha de acordo com os objetivos que foram selecionados. Se você não tiver peças suficientes, uma estratégia eficaz é duplicar as existentes e modificar os textos descritivos. Isso permite diversificar o conteúdo e atingir diferentes segmentos de público, aumentando a eficácia da campanha';
       
       case 'captionText':
         return '\n\n▶ Deixe sua legenda mais clara e objetiva. É essencial que a sua legenda seja clara e objetiva para que os usuários entendam sem dificuldades qual a mensagem que está sendo passada. O mínimo ideal para criação de legenda é 150 caracteres. Algumas dicas de como estruturar uma boa legenda: Falar um diferencial, descrever o produto em pontos chaves, finalizar com uma pergunta para instigar o engajamento.';
    
       case 'adQuality':
         return '\n\n▶ Cheque a qualidade dos criativos, pois alguns não estão com a qualidade recomendada. Evite imagens desfocadas e com qualidade baixa, é importante que a imagem seja clara para que o cliente possa entender a mensagem que deve ser passada';
      
       case 'brand':
         return '\n\n▶ Mantenha o seu criativo a identidade visual da sua empresa! O aspecto visual da empresa permite deixar uma impressão marcante no seu público, de modo que o negócio seja lembrado a partir de uma cor ou símbolo utilizado na elaboração da identidade. Cheque se as cores estão de acordo com a paleta da empresa e se a logo está presente.';
      
       case 'coherence':
         return '\n\n▶ Certifique-se de que a narrativa adotada esteja alinhada com o seu público-alvo. A narrativa é responsável por 47% do sucesso da campanha no LinkedIn. Verifique se ela comunica claramente os diferenciais dos seus produtos/serviços e oferece soluções para as dores do seu mercado. Use provas sociais, como a recomendação de 90% dos clientes, para reforçar a confiabilidade. Transmita de forma sucinta por que eles recomendam sua empresa.'; 
    
       case 'oldCreative':
         return '\n\n▶ Substitua os seus criativos antigos. É importe entender a lógica da vitalidade dos criativos de uma campanha, pois quando um criativo se torna obsoleto a audiencia passa a ignorar com mais frquencia a publicação, o que faz com o que o CTR e outra métricas fiquem mais caras. Sempre acompanhe as métricas da sua campanha e faça relações dela com o tempo do critivo.'; 
    
       default: return "";
     }  
 }

//Sugestão de produto
function productsSugestion(){
  const singImage = document.getElementById("single_image");
  const carroussel = document.getElementById("carroussel");
  const dynAd = document.getElementById("dyn_ads");
  const docAd = document.getElementById("doc_ads");
  const txtAd = document.getElementById("text_ads");
  const convAd = document.getElementById("conv_ads");
  const vidAd = document.getElementById("vid_ads");
  const eventAd = document.getElementById("event_ads");
  const leaderAd = document.getElementById("leader_ads");

  const product = [singImage, carroussel, dynAd, docAd, txtAd, convAd, vidAd, eventAd, leaderAd].filter((product) => {
      return product.checked;
  });

  const selectedProducts = product.map((product) => {
      return product.value;
  });

  let textProduct = "";

  selectedProducts.forEach(product => {
      textProduct += returnProducts(product);
  });

  return textProduct;
}

function returnProducts(product){

  switch(product) {
    case 'singImgAd':
      return '\n\n▶ Single Image: Além disso recomendamos que use o Single Image Ad, pois é exibido diretamente no feed do LinkedIn para alcançar os profissionais que você deseja atingir, tanto em computadores quanto em dispositivos móveis. Essa opção oferece uma forma eficaz de se conectar com seu público-alvo de maneira direta e impactante.';

    case 'crssel':
      return '\n\n▶ Carrossel: Utilize os anúncios em carrossel onde você pode exibir até 10 imagens com links independentes em um só anúncio e com mais possibilidades em um mesmo anúncio, você pode destacar diferentes serviços, produtos e ofertas ou contar uma história sobre sua empresa ou marca à medida que os usuários veem cada imagem.';

    case 'dynAd':
      return '\n\n▶ Dynamic Ads: Temos também o Dynamic ads, que é bem interessante, pois são anúncios personalizados sob medida para cada membro com base em seus perfil do LinkedIn próprios dados, como foto do perfil, nome da empresa ou cargo.';

    case 'docAd':
      return '\n\n▶ Document Ads: O document Ads é outro recurso fantástico porque permite promover documentos diretamente no feed do LinkedIn, onde os usuários poderão ler e baixar facilmente o conteúdo sem precisar sair da plataforma; Inclusive é possível usá-lo junto com o formulário de geração de leads, onde você troca o lead pelo documento.';

    case 'txtAd':
      return '\n\n▶Text Ads: Anúncios simples exibidos à direita ou na parte superior do feed do LinkedIn em computadores. Você pode dar lances CPC ou CPM para controlar seu investimento. Text Ads costuma ser um formato de anúncio mais barato, então use a abuse de textos curtos e objetivos para atingir o seu público alvo.​';

    case 'cvAd':
      return '\n\n▶ Conversation Ads: O Conversation Ads é um formato que te permite enviar mensagens privadas oportunas, convenientes e relevantes ás pessoas mais importantes para o seu negócio.Possui um design otimizado para dispositivos móveis e a sua entrega real garante o contato oportuno somente quando o usuário estiver online. Aproveita a flexibilidade para personalizar o conteúdo e aborde o seu público em um contexto profissional ';
    
    case 'vidAd':
      return '\n\n▶ Video Ads: Com ele é possível alcançar um público profissional com vídeos nativos em cada etapa do proceddo de decisão de campra';

    case 'evAd':
      return '\n\n▶Event Ads: Permite que você promova eventos para um público definido. Os anúncios de eventos são exibidos no feed do LinkedIn, tanto em computadores quanto em dispositivéis móveis e otimizados para destacar detalhes importantes do evento. ';

    case 'tlad':
      return '\n\n▶ Thought Leader Ads: Com este formato você pode usar-lo para promover conteúdo de executivos e funcionários de sua empresa, o que pode aumentar seu alcance e ajudá-lo a atingir as metas de sua marca. Os anúncios de líderes de pensamento podem ajudar seu conteúdo a permanecer envolvente e relevante usando experiências autênticas de funcionários.';
 
    default: return "";
  }  
}

//Mais informações
function moreInfo(){
  const alwaysOn = document.getElementById("always_on");
  const insightTag = document.getElementById("insight_tag");
  const funilCompleto = document.getElementById("funil_completo");
  const tempoAprendizagem = document.getElementById("tempo_aprendizagem");
  const leadsCRM = document.getElementById("crm_leads");
  const offConversao = document.getElementById("off_conversao");


  const moreInf = [alwaysOn, insightTag, funilCompleto, tempoAprendizagem, leadsCRM, offConversao].filter((moreInf) => {
      return moreInf.checked;
  });

  const selectedInfo = moreInf.map((moreInf) => {
      return moreInf.value;
  });

  let textInfo = "";

  selectedInfo.forEach(moreInf => {
      textInfo += returnInfo(moreInf);
  });

  return textInfo;
}

function returnInfo(moreInf){

  switch(moreInf) {
    case 'alwOn':
      return '\n\n▶ Seria importante que implementassem uma narrativa always on permite que a marca transmita uma mensagem consistente ao longo do tempo. Isso cria uma identidade sólida e ajuda os consumidores a reconhecerem e se conectarem com a marca de forma mais efetiva.';

    case 'inTag':
      return '\n\n▶ Recomendamos que implementem o LinkedIn Insight Tag é um código JavaScript que pode ser adicionado ao seu site para permitir relatórios detalhados das campanhas e obtenção de insights úteis sobre os visitantes do seu site. Você pode usar a LinkedIn Insight Tag para rastrear as conversões, redirecionar visitantes do site e obter insights adicionais sobre usuários que interagem com seus anúncios.';

    case 'fullFunnel':
      return '\n\n▶ Faça campanhas de funil completo, trabalhando melhor a presença de marca. Estudos do B2B Institute afirmam que apenas 5% da audiência impactada está de fato no momento para realizar uma compra, sendo assim, deixar a sua marca sempre visível e em todos os momentos da jornada de compra vai ampliar este alcance e geração de negócios.';

    case 'tempApre':
      return '\n\n▶ Cada campanha lançada passa por um período de aprendizagem de mais ou menos 10 dias corridos para a plataforma entender o seu público e configurações gerais da sua campanha. Recomendamos que durante esse período não faça nenhum tipo de alteração, e somente após isso observe suas métricas chaves e baseado nelas faça alterações se necessário. ';

    case 'crmLeads':
      return '\n\n▶Se você usar uma automação de marketing ou plataforma de CRM específica para gerenciar seus leads, poderá integrar seus formulários de geração de leads com sua automação de marketing ou provedor de CRM. Essa integração permite que você aproveite automaticamente as plataformas que já configurou. Clique aqui para entender mais sobre o assunto.';

    case 'offConv':
      return '\n\n▶ Conversões off-line é um método de rastreamento de conversão que permite atribuir seus dados off-line (como chamadas telefônicas e transações pessoais) aos seus anúncios do LinkedIn. Isso pode ajudá-lo a medir com mais precisão a eficácia do funil de suas campanhas, fornecendo mais informações para melhorar a medição do retorno sobre o investimento e otimizar o desempenho. Clique aqui para entender mais sobre o assunto. ';

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

