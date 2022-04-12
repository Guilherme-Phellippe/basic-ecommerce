/*
    AÇÃO AO CLICAR NA LUPA (SEARCH) DO SITE ABRIR UM INPUT PARA O USUARIO
*/

const input = document.querySelector('header .search input');
const lupa = document.querySelector('header .search i');

lupa.addEventListener('click', () => {
    input.classList.add('move-search')
    lupa.style.display = 'none';
});

input.addEventListener('keypress', e => {
    if (e.which == 13) {
        input.value = '';
        input.classList.remove('move-search')
        lupa.style.display = 'block';
    }
})


/* 
    PROCESSAMENTO DE IMAGENS
*/

const imgs = document.querySelectorAll('.small-imgs img');
const imgMain = document.querySelector('.big-img');

imgs.forEach(function (img) {
    img.addEventListener('click', () => {
        imgMain.style.opacity = .2;
        setTimeout(() => {
            imgMain.innerHTML = ''
            let image = document.createElement('img');
            image.src = img.src;
            imgMain.appendChild(image)
            imgMain.style.opacity = 1;
        }, 300);
    })
})

/** 
 * 
 * MOBILE,
 *  FUNÇÃO PARA EXIBIR O MENU NO DISPOSITIVO MOBILE
 * 
 * */

const menuHamburguer = document.querySelector('header .search i:last-of-type');
const box_menuHambuguer = document.querySelector('header nav > .nav-mobile');
menuHamburguer.addEventListener('click', () => {
    box_menuHambuguer.style.display = 'flex'
    setTimeout(() => {
        box_menuHambuguer.classList.add('open-mobile');
    }, 100);
});

//FECHAR MENU HAMBUGUER

const close_Hambuguer = document.querySelector('header nav > .nav-mobile #close-mobile').addEventListener('click', () => {
    box_menuHambuguer.style.display = 'none'
    box_menuHambuguer.classList.remove('open-mobile');
});

const close_HambuguerLInk = document.querySelectorAll('header nav > .nav-mobile ul li a');
close_HambuguerLInk.forEach(a => {
    a.addEventListener('click', () => {
        setTimeout(() => {
            box_menuHambuguer.style.display = 'none'
            box_menuHambuguer.classList.remove('open-mobile');
        }, 200);
    });
});

// FUNÇÃO BOX POLITICA PRIVACIDADE E TERMOS DE USO

if (window.localStorage.getItem('politica/termos') == null) {
    const politica = document.getElementById('box__politica');
    politica.style.display = 'block';
    const btn_politica = document.querySelector('#box__politica > h2 > button');
    btn_politica.addEventListener('click', () => {
        window.localStorage.setItem('politica/termos', 'aceitos')
        politica.style.display = 'none';
        console.log(window.localStorage.getItem('politica/termos') == null);
    });
}

// EXIBINDO PRODUTOS DINAMICAMENTE NA VITRINE DA LOJA
//VARIAVEIS
const param = new URLSearchParams(window.location.search);
const product = param.get("product");
const nameProduct = document.getElementById('name');
const describeProduct = document.getElementById('describe');
const old_price = document.getElementById('old_price');
const price = document.getElementById('price');
const video = document.querySelector('.big-img video');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const models = document.getElementById('models');

//DEFINIÇÃO DOS ATRIBUTOS EM VIDEO
const source = document.createElement('source');
const source2 = document.createElement('source');
source.setAttribute('src' , stock.find(e => e.idWooCommerce == product).video1);
source.setAttribute('type' , 'video/webp');
source2.setAttribute('src' , stock.find(e => e.idWooCommerce == product).video2);
source2.setAttribute('type' , 'video/mp4');
video.appendChild(source);
video.appendChild(source2);
source.volume = 0.2;
source2.volume = 0.2;

//DEFINIÇÃO PRODUTOS
img1.src = stock.find(e => e.idWooCommerce == product).src1;
img2.src = stock.find(e => e.idWooCommerce == product).src2;
img3.src = stock.find(e => e.idWooCommerce == product).src3;
img4.src = stock.find(e => e.idWooCommerce == product).src4;
nameProduct.innerText = stock.find(e => e.idWooCommerce == product).product;
describeProduct.innerText = stock.find(e => e.idWooCommerce == product).describe;
old_price.innerText = 'R$'+ stock.find(e => e.idWooCommerce == product).old_price;
price.innerText = 'R$ '+ stock.find(e => e.idWooCommerce == product).price;

//TODOS OS MODELS
var divModels = [];
stock.find(e => e.idWooCommerce == product).models.forEach((e, index) => {
    divModels.push(document.createElement('div'));
    const imgmodel =  document.createElement('img');
    const p =  document.createElement('p');
    p.innerText = e.model;
    imgmodel.setAttribute('src' , e.url);
    models.appendChild(divModels[index])
    divModels[index].appendChild(imgmodel);
    divModels[index].appendChild(p);
});



//AÇÃO AO CLICAR NO BOTÃO COMPRAR AGORA , LEVAR O USUARIO ATÉ O CHECKOUT

const buy = document.querySelector('.button button');
const logo = document.querySelector('.logo');
const load = document.querySelector('main .content .info .button .box-load');
var model = null;
divModels.forEach(e => e.addEventListener('click' , ()=>{
    model = e.children[1].textContent;
    divModels.forEach(e => e.style.opacity = '.2')
    e.style.opacity = '1'
}));
buy.addEventListener('click', () => {
    if(model != null){
        let id =  stock.find(e => e.idWooCommerce == product).models.find(e => e.model == model).idVariation;
        console.log(id)
        load.style.display = 'flex';
        fbq('track', 'AddToWishlist');
        window.location.href = 
        "https://www.dicasdadonadiva.com.br/home/?add-to-cart="+
        stock.find(e=> e.idWooCommerce == product).idWooCommerce+"&variation_id="+id;
    }else{
        alert('Selecione um modelo')
    }
});

logo.addEventListener('click', () => {
    window.location.href = 'http://www.dicasdadonadiva.com.br/';
});
/*

    AÇÃO DO BOTÃO ENVIAR QUE ABRIRÁ UMA BOX DIZENDO QUE O CLIENTE NÃO COMPRO O PRODUTO NA AREA DE FEEDBACKS

*/
const box_notBuy = document.querySelector('.box-notBuy:last-of-type');
const btn_send = document.querySelector('.feedbacks #your-feedback > button').addEventListener('click', () => {
    box_notBuy.style.display = 'flex';
});
const close_notBuy = document.querySelector('.box-notBuy > .notBuy span').addEventListener('click', () => {
    box_notBuy.style.display = 'none';
});
const btn_buy = document.querySelector('.box-notBuy > .notBuy a').addEventListener('click', () => {
    if(model != null){
        let id =  stock.find(e => e.idWooCommerce == product).models.find(e => e.model == model).idVariation;
        console.log(id)
        load.style.display = 'flex';
        fbq('track', 'AddToWishlist');
        window.location.href = 
        "https://www.dicasdadonadiva.com.br/home/?add-to-cart="+
        stock.find(e=> e.idWooCommerce == product).idWooCommerce+"&variation_id="+id;
    }else{
        alert('Selecione um modelo')
    }
});


//FEEDBACKS

stock.find(e=> e.idWooCommerce == product).coments.forEach((e)=> {
    const clients_feedbacks = document.getElementsByClassName('clients-feedbacks')[0];
    const div = document.createElement('div');
    const divStars = document.createElement('div');
    //criando os elementos com array
    const iStars = [];
    for(n = 0 ; n < parseInt(e.star); n++){
        iStars.push(document.createElement('i'));
        iStars[n].setAttribute('class' , 'fas fa-star')
        divStars.appendChild(iStars[n]);
    }
    for(n = 0 ; n < parseInt(5 - e.star); n++){
        iStars.push(document.createElement('i'));
        iStars[iStars.length - 1].setAttribute('class' , 'far fa-star')
        divStars.appendChild(iStars[iStars.length - 1]);        
    }

    //criando elementos
    const h3Name = document.createElement('h3');
    const pComents = document.createElement('p');
    const imgs = [];
    const divLikes = document.createElement('div');
    const like = document.createElement('i');
    const dislike = document.createElement('i');
    const numberLike = document.createElement('span')
    const numberDislike = document.createElement('span')
    //defindo os atributos dos elementos
    divLikes.setAttribute('class' , 'likes')
    like.setAttribute('class' , 'far fa-thumbs-up');
    dislike.setAttribute('class' , 'far fa-thumbs-down');
    divStars.setAttribute('class' , 'stars');
    //atribuindo os elementos
    clients_feedbacks.appendChild(div);
    div.appendChild(divStars); 
    div.appendChild(h3Name);
    div.appendChild(pComents);
    for(n = 0 ; n < parseInt(e.img.length); n++){
        imgs.push(document.createElement('img'));
        div.appendChild(imgs[n]);
        imgs[n].src = e.img[n];
    }
    div.appendChild(divLikes);
    divLikes.appendChild(like);
    divLikes.appendChild(numberLike);
    divLikes.appendChild(dislike);
    divLikes.appendChild(numberDislike);
    //Atribuindo valores
    h3Name.innerText = e.name;
    pComents.innerText = e.coments
    numberLike.innerText = e.like;
    numberDislike.innerText = e.dislike;
})


