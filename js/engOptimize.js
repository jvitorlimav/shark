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
        case "cUser":
          return "\n\n▶ User Skills + Experience Level: When building audiences, it is recommended to use user skills and experience levels instead of relying solely on job titles. The 'job titles' field is filled freely on the platform, which can lead to inaccurate information. By considering user skills along with their experience levels, we can achieve more accurate and relevant results.";
        
        case "indSiz":
          return "\n\n▶ Company Size + Industry: To reach small, medium, or large companies in a specific industry, use company size and industry filters. Direct your campaign to a specific sector, such as technology, retail, or financial services. This approach segments your audience accurately and precisely.";
        
        case "influ":
          return "\n\n▶ Decision Makers & Influencers: It is important to consider everyone involved in your customer's decision-making process, from key decision-makers to influencers. When building your target audience, take this complexity into account and identify different profiles of decision-makers and influencers. This way, you can address comprehensively and effectively, ensuring your message is relevant and persuasive at every stage of the decision-making process.";
        
        case "audSiz":
          return "\n\n▶ Increasing Audience Size: On LinkedIn, it is advisable to have audiences with more than 50,000 users to optimize campaign performance. To increase the audience size, you can broaden segmentation criteria by including more relevant business sectors or adjusting experience requirements. This will allow you to reach a larger number of users and achieve more effective campaign results.";
         
        case "incAud":
          return "\n\n▶ According to your campaign goal, it is not recommended to use such a closed audience, as in this stage of the funnel, we are looking for a broader audience reach. Therefore, you can further expand your audience by using the 'OR' feature to make the audience more open.";
        
        case "decAud":
          return "\n\n▶ According to your campaign goal, it is not recommended to use such a broad audience, as in this stage of the funnel, we are seeking a more niche audience that is already familiar with the brand. Therefore, you can narrow down your audience further by using the 'AND' feature to make the audience more niche.";
              
        case "customSeg":
          return "\n\n▶ I see an opportunity in your campaign to use the 'Custom Segment' tool because we are talking about a niche and specific audience. I suggest using the custom segment 'XXXX' to make your audience more accurate. This is a feature that only we, at LinkedIn, can add, so if you opt for this suggestion, let us know so I can include it.";
        
        case "eOr":
          return "\n\n▶ It is important to understand the difference between a more niche and a more open audience. When using the 'AND' feature in segmentation, we are talking about indispensable characteristics of your audience, and when we talk about 'OR,' we are providing a complement to what is essential. Pay attention to your combinations and also keep an eye on the size of your audience, as using these features can make it more open or closed.";
        
        case "decAudExp":
          return "\n\n▶ In the case of your campaign, it is not advisable to use Audience Expansion. See more at this link on when Audience Expansion fits: https://www.linkedin.com/help/linkedin/answer/a418929/audience-expansion?lang=en-us&intendedLocale=uk";
              
        case "actAudExp":
          return "\n\n▶ You can use Audience Expansion to increase the reach of your campaign by displaying your ads to audiences with similar attributes to your target audience.";
        
        case "lAudNet":
          return "\n\n▶ Activate the LinkedIn Audience Network. LAN allows extending the reach of your Sponsored Content campaigns by displaying your ads outside of the LinkedIn feed to users on trusted third-party apps and sites. When you enable the LinkedIn Audience Network in the campaign settings, the same targeting parameters, bid, and budget are applied across other channels.";
        
        case "matchRet":
          return "\n\n▶ Utilize Matched Audiences RETARGETING. Matched Audiences is a set of targeting options to leverage your business data and LinkedIn's professional data, resulting in a richer marketing strategy based on what you are already doing. With Matched Audiences Retargeting, you can reach visitors to your sales page and visitors to your product page with a case study of a customer who had good results with your product.";
        
        case "matchContTarg":
          return "\n\n▶ Utilize Matched Audiences CONTACT TARGETING. Matched Audiences is a set of targeting options to leverage your business data and LinkedIn's professional data, resulting in a richer marketing strategy based on what you are already doing. With Matched Audiences Retargeting, you can reach visitors to your sales page and visitors to your product page with a case study of a customer who had good results with your product.";
              
        case "matchAccTag":
          return "\n\n▶ Utilize Matched Audiences RETARGETING. Matched Audiences is a set of targeting options to leverage your business data and LinkedIn's professional data, resulting in a richer marketing strategy based on what you are already doing. With Matched Audiences including Retargeting, you can reach visitors to your sales page and visitors to your product page with a case study of a customer who had good results with your product.";
        
        case "matchLook":
          return "\n\n▶ Utilize Matched Audiences RETARGETING. Matched Audiences is a set of targeting options to leverage your business data and LinkedIn's professional data, resulting in a richer marketing strategy based on what you are already doing. With Matched Audiences including Retargeting, you can reach visitors to your sales page and visitors to your product page with a case study of a customer who had good results with your product.";
        
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
        case "cta":
          return "\n\n▶ In conversion campaigns, it's essential to have a clear and direct Call-to-Action (CTA) in the ad. The CTA is what motivates users to take action, such as making a purchase, filling out a form, or contacting. Ensure the CTA is easy to find and understand to increase the chances of better campaign results.";
        
        case "hashUrl":
          return "\n\n▶ Adding hashtags to creatives increases engagement and reach. Use relevant hashtags to expand content visibility. Include the destination URL to direct user action. This boosts engagement, organic impressions, and facilitates conversion.";
        
        case "aBtest":
          return "\n\n▶ By splitting your audience into groups and exposing each group to different variants, such as different creatives, headlines, or segmentations, you can assess which approach generates better results. This allows you to make data-driven decisions and make adjustments to improve campaign performance. LinkedIn offers features to set up and track A/B tests, enabling you to refine your strategy and achieve more effective results.";
        
        case "plusAd":
          return "\n\n▶ Add more creatives. We recommend using 3 to 5 creatives per campaign to optimize costs and maximize the campaign budget according to the selected goals. If you don't have enough pieces, an effective strategy is to duplicate existing ones and modify the descriptive texts. This allows diversification of content and reaching different audience segments, increasing campaign effectiveness.";
        
        case "captionText":
          return "\n\n▶ Make your caption clearer and more objective. It's essential for your caption to be clear and objective so that users easily understand the conveyed message. The ideal minimum for caption creation is 150 characters. Some tips on how to structure a good caption: Highlight a differential, describe the product in key points, and finish with a question to stimulate engagement.";
        
        case "adQuality":
          return "\n\n▶ Check the quality of your creatives as some do not meet the recommended quality. Avoid blurry and low-quality images; it's important for the image to be clear so that the customer can understand the message to be conveyed.";
        
        case "brand":
          return "\n\n▶ Maintain your creative as the visual identity of your company! The visual aspect of the company allows for a lasting impression on your audience, so the business is remembered from a color or symbol used in the identity creation. Check if the colors align with the company's palette and if the logo is present.";
        
        case "coherence":
          return "\n\n▶ Ensure the adopted narrative aligns with your target audience. Narrative accounts for 47% of a LinkedIn campaign's success. Check if it clearly communicates your product/service differentials and offers solutions to your market's pains. Use social proof, like the recommendation of 90% of customers, to reinforce credibility. Concisely convey why they recommend your company.";
        
        case "oldCreative":
          return "\n\n▶ Replace your old creatives. It's important to understand the vitality logic of a campaign's creatives because when a creative becomes obsolete, the audience tends to ignore the post more frequently, leading to increased CTR and other metrics costs. Always monitor your campaign metrics and correlate them with the creative's age.";
        
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

