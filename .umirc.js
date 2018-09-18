// ref: https://umijs.org/config/
const path = require('path');

export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'Eurooo',
      dll: false,
      pwa: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
  lessLoaderOptions:{
    rules: [{
      test: /\.less$/,
      loader: 'less-loader' // compiles Less to CSS
    }]
  },
  alias: {
    Styles: path.resolve(__dirname, 'src/Styles/'),
    Components: path.resolve(__dirname, 'src/Components/'),
    Assets: path.resolve(__dirname, 'src/Assets/'),
  }
}
