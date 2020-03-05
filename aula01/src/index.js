//const ClienteController = require('./controller/ClienteController');
import ClienteController from './controller/ClienteController';

let nome = 'João da Silva';
let telefone = '(67)9999-9999';
let endereco = 'Rua 6 de dezembro, 77';
let cpf = '11111111111';

 // Instanciar um controlador
let clienteCtrl = new ClienteController();

//Cria um novo objeto de Clinte
let cliente = clienteCtrl.criarCliente(nome, endereco, cpf, telefone);

//Exibe um novo objeto de Cliente no console
console.log(cliente);
