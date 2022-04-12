/*
    AÇÃO AO CLICAR NA LUPA (SEARCH) DO SITE ABRIR UM INPUT PARA O USUARIO
*/

const input = document.querySelector('header .search input');
const lupa = document.querySelector('header .search i:first-of-type');

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
    FUNÇÃO QUE REDIRECIONARÁ O USUARIO QUANDO CLICAR NO PRODUTO PRINCIPAL
*/

const mainProduct = document.querySelector('.best-dicas .all-dicas > div:nth-of-type(1)');
const Product2 = document.querySelector('.best-dicas .all-dicas > div:nth-of-type(2)');
const Product3 = document.querySelector('.best-dicas .all-dicas > div:nth-of-type(3)');

mainProduct.addEventListener('click', () => window.location.href = './src/product.html?product='+mainProduct.children[4].textContent);
Product2.addEventListener('click', () => window.location.href = './src/product.html?product='+Product2.children[4].textContent);
Product3.addEventListener('click', () => window.location.href = './src/product.html?product='+Product3.children[4].textContent);

/*
    CONTATO AREA
    FUNÇÃO QUE vai CRIAR UM SLIDE DOS FEEDBACKS
*/

const slide = document.querySelector('.contact .all-contact .box-feedbacks .feedbacks ');

slide.addEventListener('wheel', e => {
    if (e.deltaY > 0) {
        e.target.scrollBy(300, 0);
    } else {
        e.target.scrollBy(-300, 0);
    }
})
slide.addEventListener('dblclick', e => {
    e.target.scrollBy(300, 0);
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

if(window.localStorage.getItem('politica/termos') == null){
    const politica = document.getElementById('box__politica');
    politica.style.display = 'block';
    const btn_politica = document.querySelector('#box__politica > h2 > button');
    btn_politica.addEventListener('click' , ()=>{
        window.localStorage.setItem('politica/termos' , 'aceitos')
        politica.style.display = 'none';
        console.log(window.localStorage.getItem('politica/termos') == null);
    });
}

// EXIBINDO PRODUTOS DINAMICAMENTE NA VITRINE DA LOJA
function fillData(product , index) {
    console.log('click')
    product.children[1].innerText = stock.find(e => e.id == index).product;
    product.children[2].src = stock.find(e=> e.id == index).src1
    product.children[3].innerText = stock.find(e => e.id == index).describe;
    product.children[4].innerText = stock.find(e => e.id == index).idWooCommerce;
}


const name_product = document.querySelectorAll('.all-dicas div');

name_product.forEach((e , index) =>  fillData(e , index));