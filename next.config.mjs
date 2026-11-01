/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Site estático (pasta out/) para o Cloudflare Pages — saída da Vercel.
  output: 'export',
};

export default nextConfig;
