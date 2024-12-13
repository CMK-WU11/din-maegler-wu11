/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				pathname: "/dinmaegler/image/upload/**"
			}
		]
	}
};

export default nextConfig;
