const withFonts = require('next-fonts');
module.exports = withFonts({
    webpack(config, options) {
        return config;
    },
});

// module.exports = {
//     reactStrictMode: true,
//     module: {
//         rules: [
//             {
//                 test: /\.(png|jp(e*)g|svg|gif)$/,
//                 use: [
//                     {
//                         loader: 'file-loader',
//                         options: {
//                             name: 'images/[hash]-[name].[ext]',
//                         },
//                     },
//                 ],
//             },
//             {
//                 test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
//                 use: {
//                     loader: 'file-loader',
//                     options: {
//                         name: '[path][name].[ext]',
//                     },
//                 },
//             },
//         ],
//     },
// };
