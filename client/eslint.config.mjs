import js from '@eslint/js';
import {defineConfig} from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';


export default defineConfig([
	{ignores: ['eslint.config.mjs', 'webpack.config.js', 'babel.config.js', 'postcss.config.js']},
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		plugins: {js, importPlugin},
		extends: ['js/recommended'],
		languageOptions: {

			globals: {
				...globals.browser,
				...globals.node
			}
		},

		settings: {
			react: {
				version: 'detect'
			},
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true
				}
			},
			'import/ignore': ['webpack.config.js', 'babel.config.js', 'postcss.config.js']
		}
	},
	tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	importPlugin.flatConfigs.recommended,


	{
		rules: {
			'import/order': [
				'warn',
				{
					groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
					pathGroups: [
						{
							pattern: 'react',
							group: 'external',
							position: 'before'
						},
						{
							pattern: '@/app/**',
							group: 'internal'
						},
						{
							pattern: '@/pages/**',
							group: 'internal'
						},
						{
							pattern: '@/widgets/**',
							group: 'internal'
						},
						{
							pattern: '@/features/**',
							group: 'internal'
						},
						{
							pattern: '@/entities/**',
							group: 'internal'
						},
						{
							pattern: '@/shared/**',
							group: 'internal'
						}
					],
					pathGroupsExcludedImportTypes: ['react'],
					alphabetize: {
						order: 'asc',
						caseInsensitive: true
					}
				}
			]
		}
	}

]);
