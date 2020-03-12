import fs from 'fs';
import path from 'path';
import excelToJsan from 'convert-excel-to-json';

import Municipio from '../entity/Municipio';

export default class Arrecadacao {

    carregarArrecadacoesDosMunicipios() {
        let municipios = [];

        /**
         * aponta para o arquivo
         * da planilha de dados
         */
        let caminhoArquivo = path.resolve(__dirname, '../../data/dados.xls');

        let dados = excelToJsan({
            source: fs.readFileSync(caminhoArquivo),
            range: 'A4:P185'
        });

        dados.Plan1.forEach(elemento => {
            let nome = elemento.A;
            /**
             * Object.valus devolve todos os valores
             * das propriedades existentes dentro de um
             * objetoF
             */
            let valores = Object.values(elemento);
            let arrecadacoes = valores.slice(1, valores.length);
            let municipio = new Municipio(nome, arrecadacoes);
            municipios.push(Municipio);
        });

        return municipios;
    }
}