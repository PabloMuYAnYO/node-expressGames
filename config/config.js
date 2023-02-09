console.log(process.env.HOST);
console.log(process.env.USUARIO);
console.log(process.env.PASSWORD);
console.log(process.env.DATABASE);
module.exports = {
    HOST: process.env.HOST,
    USUARIO: process.env.USUARIO,
    PASSWORD: process.env.PASSWORD,
    DATABASE: process.env.DATABASE
}