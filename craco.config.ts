
import { CracoConfig } from '@craco/types'
import path from 'path'

const pathResolve = (pathUrl: string) => path.join(__dirname, pathUrl)
const config: CracoConfig = {
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@stores': pathResolve('src/stores'),
      '@components': pathResolve('src/components'),
      '@hooks': pathResolve('src/hooks'),
      '@mocks': pathResolve('src/mocks'),
      '@styles': pathResolve('src/styles'),
      '@types': pathResolve('src/types'),
      '@utils': pathResolve('src/utils'),
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
  },
  typescript: {
    enableTypeChecking: true
  },
  plugins: [

  ]
}
export default config