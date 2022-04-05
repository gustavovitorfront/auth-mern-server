const mongoose = require('mongoose');

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log('conectado db');
    } catch (error) {
        console.log(error);
        console.log('não deu certo conexão com db')
    }
}