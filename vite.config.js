import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    host: true,
  },
  // If user visits /selvar/ or /, both will work seamlessly
  plugins: [
    {
      name: 'selvar-rewrite',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.startsWith('/selvar/assets/')) {
            req.url = req.url.replace('/selvar/assets/', '/assets/');
          } else if (req.url === '/selvar' || req.url === '/selvar/') {
            req.url = '/index.html';
          }
          next();
        });
      },
    },
  ],
});

