import fs from 'fs';
import path from 'path';
import excelToJsan from 'convert-excel-to-json';

import Municipio from '../entity/Municipio';
import {ANOS} from '../../constants/Colunas';

export default class Arrecadacao {

    carregarArrecadacoesDosMunicipios() {
        let municipios = [];

        let caminhoArquivo = path.resolve(__dirname, '../../data/dados.xls');

        let dados = this.extrairDadosDaPlanilha('A4:P185');

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

    carregarArrecadacoesPorAno(ano){
        if(ano in ANOS){
            let coluna = ANOS[ano];
            let range = `${coluna}4:${colina}185`;

            let arrecadacoes = this.extrairDadosDaPlanilha(range);
            let nomeMunicipios = this.extrairDadosDaPlanilha('A4:A185');
            console.log(arrecadacoes, nomeMunicipios);
        }
    }

    extrairDadosDaPlanilha(range){
        let caminhoArquivo = path.resolve(__dirname, '../../data/dados.xls');

        let dados = excelToJsan({
            source: fs.readFileSync(caminhoArquivo),
            range
        });
        return dados;

    }
}