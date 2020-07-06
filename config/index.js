const path = require('path')

// const ENV_TYPE = process.env.ENV_TYPE || 'dev'

const [TARO_CMD, TARO_ENV] = process.env.npm_lifecycle_event.split(':')

const DIST_PATH = TARO_ENV === 'h5'
  ? (process.env.ENV_TYPE === 'production' ? 'h5_prod' : 'h5_dev' )
  : 'weapp'

const config = {
  projectName: 'ahuer',
  date: '2020-6-20',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: `dist/${DIST_PATH}`,
  alias: {
    '@': path.resolve(__dirname, '../src'),
    '@ACTIONS': path.resolve(__dirname, '..', 'src/redux/actions'),
    '@REDUCERS': path.resolve(__dirname, '..', 'src/redux/reducers'),
    '@SAGAS': path.resolve(__dirname, '..', 'src/redux/sagas'),
    '@STORE': path.resolve(__dirname, '..', 'src/redux/store'),
    '@UTILS': path.resolve(__dirname, '..', 'src/utils'),
    '@ASSETS': path.resolve(__dirname, '..', 'src/assets'),
    '@IMG': path.resolve(__dirname, '..', 'src/assets/images'),
  },
  babel: {
    sourceMap: true,
    presets: [
      ['env', {
        modules: false
      }]
    ],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread',
      ['transform-runtime', {
          helpers: false,
          polyfill: false,
          regenerator: true,
          moduleName: 'babel-runtime'
        }
      ]
    ]
  },
  plugins: [
    '@tarojs/plugin-sass',
    '@tarojs/plugin-terser'
  ],
  defineConstants: {
  },
  mini: {
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
