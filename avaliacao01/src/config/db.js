import mongodb from 'mongoose';

const URI_BD = 'mongoose://localhost/supermercado';

export const conectarBD = () => {
    mongoose
        .connect(URI_BD, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Mongoose conectado em ${URI_BD}'))
        .catch(erro => console.log(erro));
}

export const desconectarBD = () => {
    mongoose
        .disconnect()
        .then(() => console.log('Mongoose desconectado em ${URI_BD}'))
        .catch(erro => console.log(erro));
}

