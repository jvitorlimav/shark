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
    const abtest = document.getElementById('abtest');

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
    const single_image = document.getElementById('single_image');
    const carroussel = document.getElementById('carroussel');
    const dynAds = document.getElementById('dyn_ads');
    const docAds = document.getElementById('doc_ads');
    const textAds = document.getElementById('text_ads');    
    const convAds = document.getElementById('conv_ads');
    const vidAds = document.getElementById('vid_ads');
    const eventAds = document.getElementById('event_ads');

    if(select.checked){
        document.getElementById("hidden_div_product").style.display = "block";
    } else{
        document.getElementById("hidden_div_product").style.display = "none";
        single_image.checked = false;
        carroussel.checked = false;
        dynAds.checked = false;
        docAds.checked = false;
        textAds.checked = false;
        convAds.checked = false;
        vidAds.checked = false;
        eventAds.checked = false;
    }
 } 

 function showDivNarrative(select){
    const coherence = document.getElementById('coherence');
    const fullFunnel = document.getElementById('full_funnel');
    const inTag = document.getElementById('in_tag');
    const alwaysOn = document.getElementById('always_on');

    if(select.checked){
        document.getElementById("hidden_div_narrative").style.display = "block";
    } else{
        document.getElementById("hidden_div_narrative").style.display = "none";
        coherence.checked = false;
        fullFunnel.checked = false;
        inTag.checked = false;
        alwaysOn.checked = false;
    }
 } 


 function showDivPic(select){
    if(select.checked){
     document.getElementById("hidden_div_pic").style.display = "block";
    } else{
     document.getElementById("hidden_div_pic").style.display = "none";
    }
 }



