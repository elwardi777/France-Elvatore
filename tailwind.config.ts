
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: { // Ensuring sidebar colors are accessible if needed directly
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Gold palette remains, primary/secondary/accent will use CSS vars based on these
				gold: {
					50: '#fffbeb',  // Lighter, good for backgrounds
          100: '#fef3c7', // Light, good for secondary backgrounds
          200: '#fde68a',
          300: '#fcd34d',
          400: '#f59e0b', // Main accent gold
          500: '#d97706', // Primary gold
          600: '#b45309', // Darker gold, good for text or hover states
          700: '#92400e', // Very dark gold, good for primary text
          800: '#78350f',
          900: '#451a03', // Deepest gold/brown
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
        'count-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
				'slide-up': {
					from: {
						opacity: '0',
						transform: 'translateY(50px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-right': {
					from: {
						opacity: '0',
						transform: 'translateX(-50px)'
					},
					to: {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-left': {
					from: {
						opacity: '0',
						transform: 'translateX(50px)'
					},
					to: {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in': {
					from: {
						opacity: '0'
					},
					to: {
						opacity: '1'
					}
				},
        'subtle-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0px hsl(var(--primary) / 0.3)' },
          '50%': { boxShadow: '0 0 0 10px hsl(var(--primary) / 0)' },
        },
        'text-gold-glow': {
          '0%, 100%': {
            textShadow: '0 0 2px theme(colors.white), 0 0 5px theme(colors.gold.400), 0 0 10px theme(colors.gold.300), 0 0 15px theme(colors.gold.200)',
          },
          '50%': {
            textShadow: '0 0 4px theme(colors.white), 0 0 8px theme(colors.gold.300), 0 0 15px theme(colors.gold.200), 0 0 20px theme(colors.gold.100)',
          },
        },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'count-up': 'count-up 0.5s ease-out forwards',
				'slide-up': 'slide-up 0.8s ease-out',
				'slide-right': 'slide-right 0.8s ease-out',
				'slide-left': 'slide-left 0.8s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
        'subtle-pulse': 'subtle-pulse 2s infinite cubic-bezier(0.4, 0, 0.6, 1)',
        'text-gold-glow': 'text-gold-glow 2.5s ease-in-out infinite alternate',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
