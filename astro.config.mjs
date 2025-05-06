// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'BrowserSec',
			description: 'Open source browser security and detection & response solutions',
			// logo: {
			// 	light: './src/assets/logo-light.svg',
			// 	dark: './src/assets/logo-dark.svg',
			// },
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/browsersec' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/FEGZkmjs' },
				{ icon: 'twitter', label: 'Twitter', href: 'https://twitter.com/browsersec_org' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', link: '/' },
						{ label: 'Quick Start', link: '/guides/quick-start' },
					],
				},
				{
					label: 'Products',
					items: [
						{ label: 'KubeBrowse', link: '/products/kubebrowse' },
						{ label: 'Detection Tools', link: '/products/detection-tools' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Browser Detection', link: '/guides/browser-detection' },
						{ label: 'Security Response', link: '/guides/security-response' },
						{ label: 'Example Guide', link: '/guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Community',
					items: [
						{ label: 'Contributing', link: '/community/contributing' },
						{ label: 'Code of Conduct', link: '/community/code-of-conduct' },
					],
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
	site: 'https://browsersec.github.io',
});
