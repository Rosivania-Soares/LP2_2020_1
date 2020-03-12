import ArrecadacaoDao from './ArrecadacaoDao';

const descricao = `
Testa as operações de leitura sobre planilha 
de dados de arrecadação de tributossobre exploração
 mineral nos municípos do estado do Paraná
`;

var dao;

describe(descricao, () => {

    beforeAll(() => dao = new ArrecadacaoDao());

    test('deve carregar as arrecadações de todos os municípios', () => {
        let municipios = dao.carregarArrecadacoesDosMunicipios();
        /**
         * Espera que o valor municípios tenha
         * 182 elementos dentro dele, ou seja,
         * os 182 municípios existentes na
         * planilha de dados
         */
        expect(municipios.length).toBe(182);
    });
});