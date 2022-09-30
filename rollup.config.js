import typescript from "@rollup/plugin-typescript";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "src/a.ts",
  output: {
    file: "dist/index.js",
    format: "es",
  },
  plugins: [
    typescript({
      noForceEmit: true,
      noEmitOnError: true,
    }),
  ],
  external: ["fastify"],
};
