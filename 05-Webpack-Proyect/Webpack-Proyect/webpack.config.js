//loaders son una de las reglas que le dicen WP como generar paquetes 

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                //2do loader
                test: /.(scss|css)$/,

                use: [
                    //El orden de los Loader si importan
                    "style-loader",
                    "css-loader",
                    "sass-loader" //(SCSS)
                ]
            }
        ]
    },
    
    plugins: [
        //Aqui se cargan los plugins de webpack
        new HtmlWebpackPlugin({
            //Indicamos cual va ser la base de mi proyecto (HTML) 
            template :"./index.html",

            //Opcional WP piensa que se trabaja desde la carpeta
            //dist y no es necesario el nombre

            // filename : './index.html'
        }),
        new MiniCssExtractPlugin({
            //WP se va a encargar de generar un nombre para c/ archivo CSS
            filename: "[name].css",
            //Fragmenta el CSS para que dependiendo de la vista solo cargue ese CSS
            chunkFilename: "[id].css"
        })
    ]
}