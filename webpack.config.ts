import path from 'path';
import { Configuration } from 'webpack'
import { buildWebpackConfig } from './config/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/types/config';

export default (env: BuildEnv) => {

  const mode = env.mode || 'development'
  const port = env.port || 3000

  const isDev = mode === 'development'

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

  const config: Configuration = buildWebpackConfig({
    paths,
    mode,
    isDev,
    port
  })

  return config
}