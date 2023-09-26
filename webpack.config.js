
const path = require('path');

module.exports = { 
    mode: 'development',
    entry: './src/index.js',
    output: { 
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: { 
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            { 
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader',  
                {
                    loader: "sass-loader",
                    options: { 
                        warnRuleAsWarning: true,
                    }
                }]
            }
        ]
    }
}


