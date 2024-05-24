module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fedskillstest.ct.digital",
        port: "",
        pathname: "/**"
      }
    ]
  }
}
