# craco-dev-template
基于 craco + react 的应用开发模板
## Tool Chain
- craco -> webpack
- react + ts
- eslint + prettier
## issues
### 包模块规范问题
`@craco/craco` 依赖 `cosmiconfig` 在项目中寻找各项配置，配置 `cosmiconfig-typescript-loader` 支持 `.ts` 配置，但是由于其版本过低，包模块规范为 `require` 不能 `require` 一个 `ES Module`，而新版 `eslint.config.js` 的 `flat-config` 又依赖 `type: "module"`，so 包之间发生了冲突，无法并存，导致 `build` 时检测不到 `eslint` 配置，亦或上述报错问题   

但是后来貌似不知道怎么就解决了