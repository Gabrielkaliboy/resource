//官网  https://cli.vuejs.org/zh/config/#baseurl
module.exports = {
  //默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。
  // 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/
  //publicPath,默认"/",这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径，也可以用在类似 Cordova hybrid 应用的文件系统中。
  //相对 publicPath 的限制   相对路径的 publicPath 有一些使用上的限制。在以下情况下，应当避免使用相对 publicPath:当使用基于 HTML5 history.pushState 的路由时;当使用 pages 选项构建多页面应用时。
  publicPath: "./",

  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
  outputDir: "dist",
  // type :boolean| error defalut :"true"
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  // true: eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败,在开发和生产环境都会起作用
  // 想要在生产构建时禁用 eslint-loader  ==>  lintOnSave: process.env.NODE_ENV !== 'production'
  // false：无反应
  // error：这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。
  // 通过设置让浏览器 overlay 同时显示警告和错误 在 devServe 配置项中  ==>  overlay: {warnings: true,errors: true}
  lintOnSave: false,
  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。
  // 如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
  filenameHashing: false, // 是否 hash 值
  // 生产环境是否生成 sourceMap 文件
  // SourceMap 一个存储源代码与编译代码对应位置映射的信息文件，详情百度
  // 生产环境是否生成 sourceMap 文件，详细查看阮一峰老师这篇http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html
  productionSourceMap: false,
  // 配置 webpack-dev-server 行为。所有 webpack-dev-server 的选项都支持 https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8089
  }
};
