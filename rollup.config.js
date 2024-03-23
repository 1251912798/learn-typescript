import { nodeResolve } from "@rollup/plugin-node-resolve";
import path, { dirname } from "path";
import serve from "rollup-plugin-serve";
import ts from "rollup-plugin-typescript2";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

export default {
  input: path.resolve(__dirname, "src/index.ts"),
  output: {
    file: path.resolve(__dirname, "dist/bundle.js"),
    format: "iife", // 打包成自执行函数
    sourcemap: true, // 代码调试
  },
  plugins: [
    nodeResolve({
      extensions: [".js", ".ts"],
    }),
    ts({
      tsconfig: path.resolve(__dirname, "tsconfig.json"),
    }),
    serve({
      open: true,
      openPage: "/public/index.html",
      port: 3000,
    }),
  ],
};
