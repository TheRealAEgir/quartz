import { defineConfig } from "tsup"

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "components/index": "src/components/index.tsx",
  },
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["preact", "@jackyzha0/quartz"],
})