import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
      plugins: [react()],
      build: {
        outDir: 'dist',
        chunkSizeWarningLimit: 1000, // Increases the warning limit for chunk sizes
        rollupOptions: {
          external: [
            // Mark problematic imports as external to avoid build issues
            'core-js/library/fn/object/get-prototype-of',
            'core-js/library/fn/object/define-property',
            'core-js/library/fn/object/assign',
            'core-js/library/fn/object/create',
            'core-js/library/fn/object/set-prototype-of',
            'core-js/library/fn/symbol',
            'core-js/library/fn/symbol/iterator',
          ],
        },
      },
      server: {
        port: 5173, // Specify a default port
        strictPort: false, // Automatically choose another port if 5173 is in use
        host: true, // Allow access on the network
      },
    });
