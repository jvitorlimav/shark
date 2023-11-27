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
    //let textCreative = creativeSugestion();
    let textProducts = productsSugestion();
    let textInfo = moreInfo();
    let finalText = textObjective;
    finalText += "\n\nHere are some suggestions:" + textAudience + /*textCreative +*/ textProducts + textInfo;
    finalText += "\n\nRegards,";

    return finalText;
}

//Objetivo da campanha
function campaingObjective(){
  const selectedCampaingObjective = document.getElementById("escObjetivo");
  let objetivoValue = selectedCampaingObjective.options[selectedCampaingObjective.selectedIndex].value;


  switch(objetivoValue){
    case 'awareness':
        return "Adopt precise targeting and create attractive ads that capture the attention of your target audience. Additionally, it's important to develop relevant and engaging content, exploring the trending topics in your business area. Consider using creative ad formats such as videos or carousels to convey your message impactfully. Don't forget to monitor your campaign's performance through relevant metrics like impressions, reach, and brand recognition. This way, you'll be building a robust strategy to strengthen your brand's visibility and recognition.";
    
    case 'webVisit':
        return "Precise targeting and attractive ads are fundamental for the success of your marketing strategy. Additionally, creating relevant content for your audience on trending topics in your business area is essential. If possible, develop an optimized landing page to improve visitor-to-customer conversion. Also, remember to track performance metrics, particularly using the insight tag.";
    
    case 'engagement':
        return "Create attractive and relevant ads that pique the interest of your target audience. Use persuasive calls-to-action, captivating images, and personalized messages to grab users' attention. Additionally, try different ad formats like videos or carousels to diversify content and generate more interaction. Encourage users to like, comment, and share content by offering incentives or creating a sense of exclusivity. Monitor engagement metrics closely to evaluate campaign performance and make necessary adjustments. This way, you'll maximize engagement with your paid content and achieve better results in your marketing strategy.";
    
    case 'videoView':
        return "Create compelling ads that capture your target audience's interest from the first few seconds. Use engaging thumbnails and captivating titles to attract attention and encourage users to watch the entire video. Also, keep videos concise with relevant content, delivering your message clearly and impactfully. Consider using captions to make the content more accessible and appealing. Remember to track view metrics to assess video performance and make adjustments if necessary. By following these practices, you'll increase video views and maximize the impact of your marketing strategy.";
    
    case 'leadGen':
        return "Use persuasive calls-to-action and highlight the clear benefits users will gain from engaging with your offer. Offer an incentive, such as a free e-book or an exclusive webinar, in exchange for users' contact information. Use lead generation forms directly in ads to streamline the conversion process. Precisely segment your audience, directing ads to people most likely to be interested in your offer. Monitor performance metrics to assess your campaign's effectiveness and make adjustments if needed. By following these practices, you'll maximize lead generation and drive the success of your marketing strategy.";
    
    case 'webConv':
        return "Use attractive texts and clear calls-to-action to direct users to the relevant landing page. Ensure the landing page is optimized and provides a smooth user experience. Highlight the unique benefits of your offer and include appealing visual elements to attract visitors' attention. Use social proof elements, such as testimonials from satisfied customers, to increase user confidence. Implement simplified contact or purchase forms to ease the conversion process. Track performance metrics to evaluate your strategy's success and make necessary adjustments. By following these practices, you'll maximize conversions on your site and drive your business growth.";
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
            return "\n\n▶ User Skills + Experience Level: When building audiences, it's recommended to use users' skills and experience levels instead of relying solely on job titles. The ''job title'' field is freely filled on the platform, which can lead to inaccurate information. By considering users' competencies along with their experience levels, we can achieve more precise and relevant results.";
        
        case 'indSiz':
            return "\n\n▶ Company Size + Industry: To reach small, medium, or large companies in a specific industry, utilize filters for company size and industry. Direct your campaign towards a specific sector, such as technology, retail, or financial services. This approach segments your audience precisely and effectively.";
        
        case 'influ':
            return "\n\n▶ Decision Makers & Influencers: It's essential to consider all individuals involved in your customer's decision-making process, from key decision-makers to influencers. When building your target audience, take this complexity into account and identify different profiles of decision-makers and influencers. This way, you can comprehensively and effectively address their needs, ensuring your message is relevant and persuasive at every stage of the decision-making process.";
        
        case 'audSiz':
            return "\n\n▶ Increase Audience Size: On LinkedIn, it's advisable to have audiences with more than 50,000 users to optimize campaign performance. To increase audience size, you can broaden segmentation criteria by including more relevant business sectors or adjusting experience requirements. This will allow you to reach a larger number of users and achieve more effective campaign results.";
        
        default:
            return "";
        
    }  
}

//Sobre criativos
// function creativeSugestion(){
//     const cta = document.getElementById("cta");
//     const hashUrl = document.getElementById("hash_url");
//     const aBtest = document.getElementById("abtest");
//     const captionText = document.getElementById("caption_Text");
//     const plusAd = document.getElementById("plus_Ad");
//     const adQuality = document.getElementById("ad_Quality");
//     const brand = document.getElementById("brand");
//     const coherence = document.getElementById("coherence");
//     const oldCreative = document.getElementById("old_creative");
       
//     const creatives = [cta, hashUrl, aBtest, captionText, plusAd, adQuality, brand, coherence, oldCreative].filter((sugCreative) => {
//         return sugCreative.checked;
//     });

//     const selectedCreatives = creatives.map((sugCreative) => {
//         return sugCreative.value;
//     });

//     let textCreative = "";

//     selectedCreatives.forEach(sugCreative => {
//         textCreative += returnSugCreative(sugCreative);
//     });

//     return textCreative;
// }

// function returnSugCreative(sugCreative){
//     switch(sugCreative) {
//         case 'cta':
//         return '\n\n▶ Nas campanhas de conversão, é essencial ter um Call-to-Action (CTA) claro e direto no anúncio. O CTA é o que motiva os usuários a agir, como comprar, preencher um formulário ou entrar em contato. Certifique-se de tornar o CTA fácil de encontrar e compreender, para aumentar as chances de obter melhores resultados em suas campanhas.';
  
//       case 'hashUrl':
//         return '\n\n▶ Adicionar hashtags aos criativos aumenta o engajamento e alcance. Use hashtags relevantes para ampliar a visibilidade do conteúdo. Inclua a URL de destino para direcionar a ação dos usuários. Isso impulsiona o engajamento, as impressões orgânicas e facilita a conversão.';
  
//       case 'aBtest':
//         return '\n\n▶ Ao dividir seu público em grupos e expor cada grupo a variantes diferentes, como diferentes criativos, títulos ou segmentações, você pode avaliar qual abordagem gera melhores resultados. Isso permite que você tome decisões embasadas em dados reais e faça ajustes para melhorar o desempenho da sua campanha. O LinkedIn oferece recursos para configurar e acompanhar testes A/B, permitindo que você refine sua estratégia e alcance resultados mais efetivos.';
      
//       case 'plusAd':
//         return '\n\n▶ Inclua mais criativos. Recomendamos de 3 a 5 criativos por campanha para otimizar os custos e rentabilizar o budget da campanha de acordo com os objetivos que foram selecionados. Se você não tiver peças suficientes, uma estratégia eficaz é duplicar as existentes e modificar os textos descritivos. Isso permite diversificar o conteúdo e atingir diferentes segmentos de público, aumentando a eficácia da campanha';

//       case 'captionText':
//         return '\n\n▶ Deixe sua legenda mais clara e objetiva. É essencial que a sua legenda seja clara e objetiva para que os usuários entendam sem dificuldades qual a mensagem que está sendo passada. O mínimo ideal para criação de legenda é 150 caracteres. Algumas dicas de como estruturar uma boa legenda: Falar um diferencial, descrever o produto em pontos chaves, finalizar com uma pergunta para instigar o engajamento.';
      
//       case 'adQuality':
//         return '\n\n▶ Cheque a qualidade dos criativos, pois alguns não estão com a qualidade recomendada. Evite imagens desfocadas e com qualidade baixa, é importante que a imagem seja clara para que o cliente possa entender a mensagem que deve ser passada';

//       case 'brand':
//         return '\n\n▶ Mantenha o seu criativo a identidade visual da sua empresa! O aspecto visual da empresa permite deixar uma impressão marcante no seu público, de modo que o negócio seja lembrado a partir de uma cor ou símbolo utilizado na elaboração da identidade. Cheque se as cores estão de acordo com a paleta da empresa e se a logo está presente.';

//       case 'coherence':
//         return '\n\n▶ Certifique-se de que a narrativa adotada esteja alinhada com o seu público-alvo. A narrativa é responsável por 47% do sucesso da campanha no LinkedIn. Verifique se ela comunica claramente os diferenciais dos seus produtos/serviços e oferece soluções para as dores do seu mercado. Use provas sociais, como a recomendação de 90% dos clientes, para reforçar a confiabilidade. Transmita de forma sucinta por que eles recomendam sua empresa.'; 
      
//       case 'oldCreative':
//         return '\n\n▶ Substitua os seus criativos antigos. É importe entender a lógica da vitalidade dos criativos de uma campanha, pois quando um criativo se torna obsoleto a audiencia passa a ignorar com mais frquencia a publicação, o que faz com o que o CTR e outra métricas fiquem mais caras. Sempre acompanhe as métricas da sua campanha e faça relações dela com o tempo do critivo.'; 
      
//       default: return "";
//     }  
// }

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
    return "\n\n▶ Single Image: Additionally, we recommend using the Single Image Ad, as it is displayed directly in the LinkedIn feed to reach the professionals you want to target, both on computers and mobile devices. This option offers an effective way to connect with your target audience directly and impactfully.";

    case 'crssel':
        return "\n\n▶ Carousel: Use carousel ads where you can display up to 10 images with independent links in a single ad and with more possibilities within one ad. You can highlight different services, products, or offers or tell a story about your company or brand as users view each image.";

    case 'dynAd':
        return "\n\n▶ Dynamic Ads: We also have Dynamic Ads, which are quite interesting, as they are personalized ads tailored to each member based on their own LinkedIn profile data, such as profile photo, company name, or job title.";

    case 'docAd':
        return "\n\n▶ Document Ads: Document Ads are another fantastic feature because they allow you to promote documents directly in the LinkedIn feed, where users can easily read and download the content without leaving the platform. You can also use it along with lead generation forms, exchanging leads for the document.";

    case 'txtAd':
        return "\n\n▶ Text Ads: Simple ads displayed on the right or at the top of the LinkedIn feed on computers. You can bid CPC or CPM to control your investment. Text Ads are usually a more affordable ad format, so make use of concise and objective texts to reach your target audience.";

    case 'cvAd':
        return "\n\n▶ Conversation Ads: Conversation Ads are a format that allows you to send timely, convenient, and relevant private messages to the most important people for your business. It has a mobile-optimized design and ensures timely delivery only when the user is online. Take advantage of the flexibility to customize content and approach your audience in a professional context.";

    case 'vidAd':
        return "\n\n▶ Video Ads: With it, you can reach a professional audience with native videos at every stage of the purchasing decision process.";

    case 'evAd':
        return "\n\n▶ Event Ads: Allows you to promote events to a defined audience. Event ads are displayed in the LinkedIn feed, both on computers and mobile devices, and optimized to highlight important event details.";

    case 'tlad':
        return "\n\n▶ Thought Leader Ads: With this format, you can use it to promote content from executives and employees of your company, which can increase your reach and help you achieve your brand goals. Thought leader ads can help your content remain engaging and relevant by using authentic employee experiences.";

    default:
        return "";

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
        return "\n\n▶ It would be important to implement an always-on narrative that allows the brand to convey a consistent message over time. This creates a solid identity and helps consumers recognize and connect with the brand more effectively.";
    
    case 'inTag':
        return "\n\n▶ We recommend implementing the LinkedIn Insight Tag, which is a JavaScript code that can be added to your website to enable detailed campaign reporting and gain useful insights about your website visitors. You can use the LinkedIn Insight Tag to track conversions, retarget website visitors, and obtain additional insights about users interacting with your ads.";
    
    case 'fullFunnel':
        return "\n\n▶ Run full-funnel campaigns, working on improving brand presence. B2B Institute studies state that only 5% of the impacted audience is actually in the buying moment, so keeping your brand always visible throughout the entire buying journey will expand this reach and generate more business.";
    
    case 'tempApre':
        return "\n\n▶ Each launched campaign goes through a learning period of about 10 calendar days for the platform to understand your audience and general campaign settings. We recommend not making any changes during this period, and only after that, observe your key metrics and make changes based on them if necessary.";
    
    case 'crmLeads':
        return "\n\n▶ If you use marketing automation or a specific CRM platform to manage your leads, you can integrate your lead generation forms with your marketing automation or CRM provider. This integration allows you to automatically leverage the platforms you've already set up. Click here to learn more about this topic.";
    
    case 'offConv':
        return "\n\n▶ Offline conversions are a conversion tracking method that allows you to attribute your offline data (such as phone calls and personal transactions) to your LinkedIn ads. This can help you more accurately measure the effectiveness of your campaign funnel, providing more information to improve return on investment measurement and optimize performance. Click here to learn more about this topic.";
    
    default:
        return "";
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

  let emailBody = "Hello, " + clientName + "! How are you?";
  emailBody += "\n\nI want to talk about some ideas to make your campaign even better.";
  emailBody += "\n\nWe've analyzed the " + campaingName + " campaign and found some areas that can be improved. As the campaign aims to " + objetivoTexto + ", it's always good to " + optimizationText;

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
  alert("Text copied");
}

