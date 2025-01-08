import { Configuration } from "webpack";

interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

type BuildMode = Pick<Configuration, "mode">["mode"];

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}

export interface EnvVariables {
  port: number;
  mode: BuildMode;
}
