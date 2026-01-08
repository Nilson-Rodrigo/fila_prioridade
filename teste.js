const { FilaPrioridade, Prioridade } = require("./FilaPrioridade");

const fila = new FilaPrioridade(5);

fila.inserir("Tarefa normal", Prioridade.NORMAL);
fila.inserir("Erro crítico", Prioridade.MUITO_ALTA);
fila.inserir("Relatório", Prioridade.ALTA);
fila.inserir("Aviso simples", Prioridade.BAIXA);

console.log("Próximo:", fila.proximo()); 
console.log("Removido:", fila.remover()); 
console.log("Removido:", fila.remover()); 

console.log("Total:", fila.tamanho());

fila.limpar();
console.log("Fila vazia?", fila.estaVazia());
