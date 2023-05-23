const fs = require('fs');
const colors = require('colors');
const { argv } = require('process');
const crearArchivo = async (base = 5, listar = false, hasta=10) => {
    try {


        let salida = '';

        for (let n = 1; n <= hasta; n++) {
            salida += `${base} x ${n} = ${base * n}\n`;
        }
        if (listar) {
            console.log('====================='.green);
            console.log(`   Tabla del: ${colors.red(base)}`);
            console.log('====================='.green);
            console.log(salida);
        }

        if(!fs.existsSync('./salida')){
            fs.mkdirSync('./salida');
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }

}
module.exports = {
    crearArchivo
};