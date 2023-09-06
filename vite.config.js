import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	cssCodeSplit: true,
	build: {
		lib: {
			entry: resolve(__dirname, 'src/scripts/main.ts'),
			name: 'pds',
		},
	},
	css: {
		preprocessorOptions: {
			scss: {},
		},
	},
});
