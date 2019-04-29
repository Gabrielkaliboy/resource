//官网  https://cli.vuejs.org/zh/config/#baseurl
module.exports = {
  //默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。
  // 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/
  //publicPath,默认"/",这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径，也可以用在类似 Cordova hybrid 应用的文件系统中。
  //相对 publicPath 的限制   相对路径的 publicPath 有一些使用上的限制。在以下情况下，应当避免使用相对 publicPath:当使用基于 HTML5 history.pushState 的路由时;当使用 pages 选项构建多页面应用时。
  publicPath: "./",
  lintOnSave: false
};
