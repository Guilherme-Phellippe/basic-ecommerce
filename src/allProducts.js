// EXIBINDO DINAMICANTE OS PRODUTOS D0 STOCK

//best sellers

const bestSellers = document.querySelectorAll('main #best-sellers .sellers > div');

bestSellers.forEach((e , i) => {
    e.children[0].children[0].src = stock.find(e => e.id == i).src1;
    e.children[1].children[0].innerText = 'de '+stock.find(e => e.id == i).old_price ;
    e.children[1].children[1].innerText = ' por '+stock.find(e => e.id == i).price ;
    e.children[3].innerText = stock.find(e => e.id == i).product ;
    e.addEventListener('click' ,()=>{
        window.location.href = 'https://www.dicasdadonadiva.com.br/src/product.html?product='+ stock.find(e => e.id == i).idWooCommerce
    })
})

//all sellers

const allProducts = document.querySelectorAll('main #all-products .all-sellers > div');

allProducts.forEach((e , i) => {
    e.children[0].children[0].src = stock.find(e => e.id == i).src1;
    e.children[1].children[0].innerText = 'de '+stock.find(e => e.id == i).old_price ;
    e.children[1].children[1].innerText = ' por '+stock.find(e => e.id == i).price ;
    e.children[3].innerText = stock.find(e => e.id == i).product ;
    e.addEventListener('click' ,()=>{
        window.location.href = 'https://www.dicasdadonadiva.com.br/src/product.html?product='+ stock.find(e => e.id == i).idWooCommerce
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
