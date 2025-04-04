/*
Dolar Hoy Titulo Horizontal
https://dolar.wilkinsonpc.com.co/widgets
*/
let lkhome4 = document.getElementById('dolar_wpc4');
if (lkhome4) {
    let links = lkhome4.getElementsByTagName('a');
    for (let link of links) {
        if (link.href.includes('https://dolar.wilkinsonpc.com.co/') || link.href.includes('https://dolar.wilkinsonpc.com.co')) {
            if (link.getAttribute('rel') !== 'nofollow') {
                codeOK = true;
                break;
            }
        }
    }
    if (codeOK) {
	lkhome4.style.display = 'none';
        document.write("<div id='widget_usd_cop4'><a href='https://dolar.wilkinsonpc.com.co/' style='text-decoration:none;' target='_new' title='dÃ³lar hoy trm'><b>DÃ³lar Hoy</b></a> <span class='trend' style='color:#ED0905; font-size:0.8rem;'>â–¼</span>$4,130.01 <img src='https://cdn.wilkinsonpc.com.co/img/flag-cop-icon.png' width='17' height='12'></div>");
    } else {
        document.write("<a href='https://dolar.wilkinsonpc.com.co/widgets/' target='_new' style='text-decoration:none;color:maroon;'><i>Actualizar cÃ³digo</i></a>");
    }
    codeOK = null;
}
