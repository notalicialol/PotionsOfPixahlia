import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@components": "/src/components",
			"@pages": "/src/pages",
			"@routes": "/src/routes",
			"@stores": "/src/stores",
			"@styles": "/src/styles",
			"@types": "/src/types",
			"@utils": "/src/utils"
		}
	},
	server: {
		port: Number(process.env.VITE_FRONTEND_PORT),
		proxy: {
			"/api": {
				target: `http://localhost:${process.env.VITE_BACKEND_PORT}`,
				changeOrigin: true
			}
		}
	}
});
