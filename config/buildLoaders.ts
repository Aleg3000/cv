import { RuleSetRule } from "webpack"
import { BuildOptions } from "./types/config"
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
    ]
}

  return [
      tsLoader,
      cssLoader
    ]
}
