
const regExp = {
    js: /\.(js|jsx)$/,
    css: /\.css$/i,
    cssModule: /\.module\.css$/i,
    scss: /\.(scss|sass)$/i,
    scssModule: /\.module\.(scss|sass)$/i,
    img: /\.(png|jpe?g|gif)$/i,
    font: /\.(woff|woff2|ttf)$/i,
}

module.exports = {
    module: {
        rules: [
            {
                test: regExp.js,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
}