/*!
* Start Bootstrap - Scrolling Nav v5.0.6 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    //call inputValidation
    validarCampos();
    showButton();

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    $('[data-toggle="tooltip"]').tooltip({
        placement: 'right'
    });
});

function showDivPublico(select){
    const compExp = document.getElementById('comp_exp');
    const audienceSize = document.getElementById('audience_size');
    const indSize = document.getElementById('ind_size');
    const influencers = document.getElementById('influencers');

    if(select.checked){
        document.getElementById("hidden_div_audience").style.display = "block";
    } else{
        document.getElementById("hidden_div_audience").style.display = "none";
        compExp.checked = false;
        audienceSize.checked = false;
        indSize.checked = false;
        influencers.checked = false;
    }
 } 

  function showDivCreative(select){
     const cta = document.getElementById('cta');
     const hashUrl = document.getElementById('hash_url');
     const abtest = document.getElementById('abtest')
     if(select.checked){
         document.getElementById("hidden_div_creative").style.display = "block";
     } else{
         document.getElementById("hidden_div_creative").style.display = "none";
         cta.checked = false;
         hashUrl.checked = false;
         abtest.checked = false;
     }
  } 

 function showDivProduct(select){
    const singImage = document.getElementById("single_image");
    const carroussel = document.getElementById("carroussel");
    const dynAd = document.getElementById("dyn_ads");
    const docAd = document.getElementById("doc_ads");
    const txtAd = document.getElementById("text_ads");
    const convAd = document.getElementById("conv_ads");
    const vidAd = document.getElementById("vid_ads");
    const eventAd = document.getElementById("event_ads");
    const leaderAd = document.getElementById("leader_ads");

    if(select.checked){
        document.getElementById("hidden_div_product").style.display = "block";
    } else{
        document.getElementById("hidden_div_product").style.display = "none";
        single_image.checked = false;
        carroussel.checked = false;
        dyn_ads.checked = false;
        doc_ads.checked = false;
        text_ads.checked = false;
        conv_ads.checked = false;
        vid_ads.checked = false;
        event_ads.checked = false;
        leaderAd = false;
    }
 } 

 function showDivMore(select){
    const alwaysOn = document.getElementById("always_on");
    const insightTag = document.getElementById("insight_tag");
    const funilCompleto = document.getElementById("funil_completo");
    const tempoAprendizagem = document.getElementById("tempo_aprendizagem");
    const leadsCRM = document.getElementById("crm_leads");
    const offConversao = document.getElementById("off_conversao");

    if(select.checked){
        document.getElementById("hidden_div_more").style.display = "block";
    } else{
        document.getElementById("hidden_div_more").style.display = "none";
        alwaysOn.checked = false;
        insightTag.checked = false;
        funilCompleto.checked = false;
        tempoAprendizagem.checked = false;
        leadsCRM.checked = false;
        offConversao.checked = false;
    }
 } 


 function showDivPic(select){
    if(select.checked){
     document.getElementById("hidden_div_pic").style.display = "block";
    } else{
     document.getElementById("hidden_div_pic").style.display = "none";
    }
 }



