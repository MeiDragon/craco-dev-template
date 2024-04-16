
import { CracoConfig } from '@craco/types'
const path = require('path')

const pathResolve = (pathUrl: string) => path.join(__dirname, pathUrl)
const config: CracoConfig = {
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@components': pathResolve('src/components'),
      '@constants': pathResolve('src/constants'),
      '@containers': pathResolve('src/containers'),
      '@hooks': pathResolve('src/hooks'),
      '@mocks': pathResolve('src/mocks'),
      '@routes': pathResolve('src/routes'),
      '@services': pathResolve('src/services'),
      '@styles': pathResolve('src/styles'),
      '@types': pathResolve('src/types'),
      '@utils': pathResolve('src/utils'),
      '@contexts': pathResolve('src/contexts'),
    },
    plugins: {
      add: [],
      remove: [],
    },
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig
    },
  },
  style: {
    modules: {
      // localIdentName: '[name]',
    },
    css: {
      loaderOptions: (options, {env, paths}) => {
        return options
      }
    },
    sass: {
      loaderOptions: (options, {env, paths}) => {
        return options
      }
    },
    postcss: {
      mode: 'file'
    },
  },
  eslint: {
    mode: 'file'
  },
  devServer: {
    port: 3001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
}
export default config