/** @type {import('next').NextConfig} */
import withNextra from "nextra";
const nextConfig = {};

export default withNextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});
