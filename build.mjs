import { context } from 'esbuild';

const WATCH = process.argv.includes('--watch');

const createContext = async () => await context({
  entryPoints: ["src/geckosvg.ts"],
  outdir: "./build",
  plugins: [
  ],
  minify: true,
  keepNames: true,
  bundle: true,
  format: 'esm',
  platform: 'browser',
  logLevel: 'info'
});

const ctx = await createContext();
await ctx.rebuild();

if (WATCH) ctx.watch();
else ctx.dispose();