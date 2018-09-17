
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'Eurooo_stock',
      dll: false,
      pwa: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
}
