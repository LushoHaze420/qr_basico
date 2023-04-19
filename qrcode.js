let qrdiv = document.getElementById('qrcode'),
    btnConvertir=document.getElementById('convertir');

const qrcode=new QRCode(qrdiv, {
    width:200,
    height:200,
})        
function crearQR(){
    let texto=document.getElementById('text');
    btnConvertir.addEventListener('click', e => {   //boton generador de qr
        if (!texto.value){ //alerta si es que no se ingresó un texto
            alert('Ingrese texto');
            texto.focus();
            return;
        } else {
            qrcode.makeCode("texto.value"); //cuando se ingresa texto el boton puede generar el codigo qr
        }
    })
} 
crearQR();