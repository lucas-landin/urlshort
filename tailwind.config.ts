import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     fontSize:{
      'xll':['80px','1.25']
     },
     backgroundImage:{
      'input-mob':"url('./assets/bg-shorten-mobile01.svg')",
      'imput-desk':"url('./assets/bg-shorten-desktop01.svg')"
     }
    },
  },
  plugins: [],
}
export default config
