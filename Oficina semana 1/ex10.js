let dados = '{"user":"alice","flag":"GUARDIAN{JS0N_L3AK3D}"}';

const objetoDados = JSON.parse(dados);

console.log("A flag é:", objetoDados.flag);