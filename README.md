# Bienvenid@ a node-expressGames

> Este proyecto tiene como fin aprender y mejorar en la creación de aplicaciones web con node y express.

* **Ejercicio 1**: Crear aplicación web para añadir juegos a una interfaz, se añadirá un titulo, un autor, una imagen y una descripción de cada juego. Cada juego será un objeto con susodichos campos de entrada. 
  Cada uno deberá de encontrase en una sección o artículo, el titulo arriba la imagen debajo, por último su descripción y además se agregará debajo un botón para eliminar (filter game( )=> id !=  en [{game},{game},{game}] -> [eliminados] ... DELETE FROM - WHERE ID = id), luego la imagen se agregará mediante una URL. Habrán ya 3 juegos agregados automáticamente y para añadir más se utilizará un navegador que te lleve a una interfaz tipo formulario con los campos ya mencionados. En caso de faltar algún campo + mensaje en el html ESTADO (400).
   * JSON.parse() ➡️ de STRING a OBJETO
   * JSON.stringfy() ➡️ de OBJETO a STRING
   * Implementar en los botones la función eliminar, ha poder ser con express-sweetalert



## Setup proyecto

```
npm install
```

### Compila y recarga en caliente para el desarrollo

```
npm run devstart
```

### Compila y minifica para producción

```
npm run start
```
