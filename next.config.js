const nextConfig = {
	images: {
    domains: ['images.prismic.io', 'next-slicemachine-demo.cdn.prismic.io']
  },
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack', 'url-loader'],
		})
		
		if (!options.isServer) {
			config.resolve.fallback.fs = false
		}

		return config
	},
}

module.exports = nextConfig
