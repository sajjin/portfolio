// vite.config.js
import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy
} from "file:///C:/Users/Sajjin/Desktop/portfolio/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///C:/Users/Sajjin/Desktop/portfolio/node_modules/vite/dist/node/index.js";
import jsconfigPaths from "file:///C:/Users/Sajjin/Desktop/portfolio/node_modules/vite-jsconfig-paths/dist/index.mjs";
import mdx from "file:///C:/Users/Sajjin/Desktop/portfolio/node_modules/@mdx-js/rollup/index.js";
import remarkFrontmatter from "file:///C:/Users/Sajjin/Desktop/portfolio/node_modules/remark-frontmatter/index.js";
import remarkMdxFrontmatter from "file:///C:/Users/Sajjin/Desktop/portfolio/node_modules/remark-mdx-frontmatter/index.js";
import rehypeImgSize from "file:///C:/Users/Sajjin/Desktop/portfolio/node_modules/rehype-img-size/index.js";
import rehypeSlug from "file:///C:/Users/Sajjin/Desktop/portfolio/node_modules/rehype-slug/index.js";
import rehypePrism from "file:///C:/Users/Sajjin/Desktop/portfolio/node_modules/@mapbox/rehype-prism/index.js";
var vite_config_default = defineConfig({
  assetsInclude: ["**/*.glb", "**/*.hdr", "**/*.glsl"],
  build: {
    assetsInlineLimit: 1024
  },
  server: {
    port: 7777
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: "public" }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: "@mdx-js/react"
    }),
    remixCloudflareDevProxy(),
    remix({
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/", "routes/home/route.js", { index: true });
        });
      }
    }),
    jsconfigPaths()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxTYWpqaW5cXFxcRGVza3RvcFxcXFxwb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFNhamppblxcXFxEZXNrdG9wXFxcXHBvcnRmb2xpb1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvU2FqamluL0Rlc2t0b3AvcG9ydGZvbGlvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHtcbiAgdml0ZVBsdWdpbiBhcyByZW1peCxcbiAgY2xvdWRmbGFyZURldlByb3h5Vml0ZVBsdWdpbiBhcyByZW1peENsb3VkZmxhcmVEZXZQcm94eSxcbn0gZnJvbSAnQHJlbWl4LXJ1bi9kZXYnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQganNjb25maWdQYXRocyBmcm9tICd2aXRlLWpzY29uZmlnLXBhdGhzJztcbmltcG9ydCBtZHggZnJvbSAnQG1keC1qcy9yb2xsdXAnO1xuaW1wb3J0IHJlbWFya0Zyb250bWF0dGVyIGZyb20gJ3JlbWFyay1mcm9udG1hdHRlcic7XG5pbXBvcnQgcmVtYXJrTWR4RnJvbnRtYXR0ZXIgZnJvbSAncmVtYXJrLW1keC1mcm9udG1hdHRlcic7XG5pbXBvcnQgcmVoeXBlSW1nU2l6ZSBmcm9tICdyZWh5cGUtaW1nLXNpemUnO1xuaW1wb3J0IHJlaHlwZVNsdWcgZnJvbSAncmVoeXBlLXNsdWcnO1xuaW1wb3J0IHJlaHlwZVByaXNtIGZyb20gJ0BtYXBib3gvcmVoeXBlLXByaXNtJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYXNzZXRzSW5jbHVkZTogWycqKi8qLmdsYicsICcqKi8qLmhkcicsICcqKi8qLmdsc2wnXSxcbiAgYnVpbGQ6IHtcbiAgICBhc3NldHNJbmxpbmVMaW1pdDogMTAyNCxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogNzc3NyxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIG1keCh7XG4gICAgICByZWh5cGVQbHVnaW5zOiBbW3JlaHlwZUltZ1NpemUsIHsgZGlyOiAncHVibGljJyB9XSwgcmVoeXBlU2x1ZywgcmVoeXBlUHJpc21dLFxuICAgICAgcmVtYXJrUGx1Z2luczogW3JlbWFya0Zyb250bWF0dGVyLCByZW1hcmtNZHhGcm9udG1hdHRlcl0sXG4gICAgICBwcm92aWRlckltcG9ydFNvdXJjZTogJ0BtZHgtanMvcmVhY3QnLFxuICAgIH0pLFxuICAgIHJlbWl4Q2xvdWRmbGFyZURldlByb3h5KCksXG4gICAgcmVtaXgoe1xuICAgICAgcm91dGVzKGRlZmluZVJvdXRlcykge1xuICAgICAgICByZXR1cm4gZGVmaW5lUm91dGVzKHJvdXRlID0+IHtcbiAgICAgICAgICByb3V0ZSgnLycsICdyb3V0ZXMvaG9tZS9yb3V0ZS5qcycsIHsgaW5kZXg6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KSxcbiAgICBqc2NvbmZpZ1BhdGhzKCksXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1I7QUFBQSxFQUM3UixjQUFjO0FBQUEsRUFDZCxnQ0FBZ0M7QUFBQSxPQUMzQjtBQUNQLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sU0FBUztBQUNoQixPQUFPLHVCQUF1QjtBQUM5QixPQUFPLDBCQUEwQjtBQUNqQyxPQUFPLG1CQUFtQjtBQUMxQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGlCQUFpQjtBQUV4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixlQUFlLENBQUMsWUFBWSxZQUFZLFdBQVc7QUFBQSxFQUNuRCxPQUFPO0FBQUEsSUFDTCxtQkFBbUI7QUFBQSxFQUNyQjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLGVBQWUsQ0FBQyxDQUFDLGVBQWUsRUFBRSxLQUFLLFNBQVMsQ0FBQyxHQUFHLFlBQVksV0FBVztBQUFBLE1BQzNFLGVBQWUsQ0FBQyxtQkFBbUIsb0JBQW9CO0FBQUEsTUFDdkQsc0JBQXNCO0FBQUEsSUFDeEIsQ0FBQztBQUFBLElBQ0Qsd0JBQXdCO0FBQUEsSUFDeEIsTUFBTTtBQUFBLE1BQ0osT0FBTyxjQUFjO0FBQ25CLGVBQU8sYUFBYSxXQUFTO0FBQzNCLGdCQUFNLEtBQUssd0JBQXdCLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFBQSxRQUNwRCxDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
