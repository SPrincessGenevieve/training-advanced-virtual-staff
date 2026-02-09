// next.config.ts
import withBundleAnalyzer from "@next/bundle-analyzer";

const isAnalyzing = process.env.ANALYZE === "true";

export default withBundleAnalyzer({
  enabled: isAnalyzing,
})({
  // your existing config
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
});
