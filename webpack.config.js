const path = require('path');

module.exports = {
    entry: './src/index.js', // Punto de entrada de tu aplicación
    output:  {
        filename: 'bundle.js', // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Regex para identificar archhivos CSS
                use: ['style-loader', 'css-loader'], // Loaders para procesar archivos
            },
            {
                test: /\.js$/, // Regex para identificar archivos JS
                exclude: /node_modules/, // Excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader', // Loader para transpilar JS moderno a JS compatible con más navegadores
                    options: {
                        presets: ['@babel/preset-env'], // Conjunto de liberías preconfiguradas para convertir el JS  moderno a versiones más antiguas de JS. Preset de Babel
                    }
                }
            }
        ]
    },
    devtool: 'source-map', // Sirve para generar source map para facilitar la depuración 
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), // ESpecificamos la carpeta desde la cual obtenemos los archivos que mostramos al usuario
        compress: true, // Habilitamos compresión gzip para reducir el tamaño de los archivos y así mejorar el tiempo de descarga
        port: 9000, // Puerto del servidor de desarrollo
    }
}