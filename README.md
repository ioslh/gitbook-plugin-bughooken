
### 主题 npm 库的结构：
- _i18n/
- _layouts/website/
- assets/
- less/
- README.md
- index.js
- package.json

样式表在 `less`文件夹里，在发布（`npm publish`）的时候，会自动调用`npm prepublish`命令（见`package.json`文件里的定义）把 less 文件编译到 `assets` 文件夹里。因此开发的时候关注`less`文件夹即可。

HTML 静态文件在`_layouts/website/`文件夹里的 `page.html`；Gitbook 本来是用来生成电子书的，并且支持好几种输出格式，比如 PDF，或者网站；我们是要输出网站，模板就放在`_layouts/website`文件夹里。
主要关注 `page.html`，(nunjuck 模板语言书写)，其他的 HTML 都由`page.html`引入；

JS 代码：在`index.js`中定义的内容会在插件安装的时候注入到网站生成的 HTML 里。在我们的插件里定义了 `assets` 文件夹下的 js 文件 `bugtags.js`，如果还有其他的逻辑，可以在这个脚本里写。

`_i18n` 文件夹目前用不上，主要是用来多语言国际化。
