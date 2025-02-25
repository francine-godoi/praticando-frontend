let contSubscribe = document.getElementsByClassName('container-subscribe')
let contSucess = document.getElementsByClassName('container-sucess')


function submitForm(event){
    event.preventDefault();
    contSubscribe[0].style.display= 'none'
    contSucess[0].style.display='block'
}

function dismissMessage(){
    contSubscribe[0].style.display= 'flex'
    contSucess[0].style.display='none'
}

// TODO: validar email e adicionar mensagem de erro
// TODO: alinhar marcadores da lista
// TODO: versão mobile
// TODO: versão ativa