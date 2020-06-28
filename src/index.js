//requiero el modulo express y lo guardo en la constante expres
const expres = require('express');
//ejecutamos el modulo y lo guardamos en la cte app
const app = expres();
//requiero el modulo path para trabajar mas facil con los directorios y lo guardo en la cte path
const path = require('path');

//vamos a hacer una variable para el puerto 
app.set('port',3000);

/*para las plantillas, no se necesita requerilo porque node tiene una integracion con ejs 
view engine es un motor de plantilla ,es para decirle que motor de plantilla 
vamos a utilizar y vamos a usar el ejs 
*/
app.set('views',path.join(__dirname,'../views'));
app.set('view engine','ejs');

/**Configuramos la ruta de la vista , osea index.ejs
 * 
 */


//ROUTERS
/*Cuando te pida algo en la ruta inicial del servidor con una funcion
respondemos, con sendFile(direccion del archivo) que es para enviar un archivo
path.join(__dirname,'../views/index.html') para unir los diectorios el de raiz y el del archivo que queremos
pero como vamos a usar el motor de plantillas ya no necesitamos esa linea ,entonces para usar 
el motor de plantillas modificamos la extension de index.html y para enviar la vista(index.ejs) a la
pantalla del navegador usamos res.render(archivo a enviar ), al decir render sabemos que se esta 
ocupando la extension ejs
*/
app.get('/',(req,res) => {
   res.render('index');
});


/*servidor escucha,aplicacion escucha en el puerto 3000
y cuando empiezes a ejecutarte muestra un mensaje por consola 
*/
app.listen(app.get('port'), () => {
    console.log('Server on port',app.get('port'));
});