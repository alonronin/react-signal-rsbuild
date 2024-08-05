import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginBabel } from '@rsbuild/plugin-babel';

export default defineConfig({
  plugins: [pluginReact(), pluginBabel({
    babelLoaderOptions: {
      plugins: [["module:@preact/signals-react-transform"]]
    }
  })],
});
