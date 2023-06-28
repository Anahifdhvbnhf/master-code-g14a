//loaders son una de las reglas que le dicen WP como generar paquetes 

module.exports = {
    module:{
        rules: [
            //Aqui se cargan los loaders
            {
                //Significa donde tengo que buscar
                test: /\.html$/,
                
                //De los archivos que encontran, que loader voy a aplicar
                use: [
                    {
                        loader:"thml-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            }
        ]
    }
}