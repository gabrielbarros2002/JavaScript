function validar(usuario, senha) {
    let valido = false;

    if (usuario === 'pedro' && senha === '123') {
        valido = true;
    }

    return valido;
}

let usuario = 'bonieky';
let senha = '1234';
let validacao = validar(usuario, senha);
if (validacao) {
    console.log('Acesso concedido.');
} else {
    console.log('Acesso negado.')
}
