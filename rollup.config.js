import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: './lib/Application.js',
  output: {
    file: 'build/bundle.js',
    format: 'iife',
    name: 'saber2pr',
    banner: `var process = {env:{NODE_ENV: 'production'}}`
  },
  watch: {
    include: 'lib/**'
  },
  plugins: [resolve(), commonjs()]
}