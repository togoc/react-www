const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const themeColor = require('./theme')
process.env.GENERATE_SOURCEMAP = "false"; // 去除.map
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { ...themeColor },
    }),
    (config) => {
        config.plugins = [
            ...config.plugins,
            new CompressionWebpackPlugin({
                filename: '[path].gz[query]',
                algorithm: 'gzip',
                test: /\.js$|\.json$|\.css/,
                threshold: 0, // 只有大小大于该值的资源会被处理
                minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
                deleteOriginalAssets: false // 删除原文件
            })
        ]
        return config
    }
);
