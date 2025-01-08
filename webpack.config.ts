import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { EnvVariables } from "./config/build/types/config";

export default (env: EnvVariables) => {
  const isDevelopment = env.mode === "development";
  const port = env.port ?? 3000;

  return buildWebpackConfig({
    mode: isDevelopment ? "development" : "production",
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      build: path.resolve(__dirname, "dist"),
      html: path.resolve(__dirname, "public", "index.html"),
    },
    isDev: isDevelopment,
    port,
  });
};
