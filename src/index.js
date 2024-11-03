const app = require('./express/app'); // Importación correcta de app
const { sequelize } = require('./sequelize');
const PORT = 8080;

async function assertDatabaseConnectionOk() {
    console.log(`Checking database connection...`);
    try {
        await sequelize.authenticate();
        console.log('Database connection OK!');
    } catch (error) {
        console.log('Unable to connect to the database:');
        console.log(error.message);
        process.exit(1);
    }
}

async function init() {
    await assertDatabaseConnectionOk();

    // Sincroniza los modelos (crea tablas si no existen)
    await sequelize.sync();

    console.log(`Starting Sequelize + Express example on port ${PORT}...`);

    app.listen(PORT, () => {
        console.log(`Express server started on port ${PORT}. Try some routes, such as '/usuarios'.`);
    });

    // Función opcional para hacer consultas de prueba
    const queryData = async () => {
        const { Usuario, Habito, Progreso } = sequelize.models;

        // Ejemplo de consulta para obtener todos los usuarios
        const usuarios = await Usuario.findAll();
        console.log(usuarios); // Imprime los usuarios

        // Puedes agregar más ejemplos de consultas aquí
    };

    // queryData(); // Descomenta si deseas hacer pruebas de consulta
}

init();
