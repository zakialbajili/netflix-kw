/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env.VITE_REACT_APP_BASEURL':JSON.stringify(process.env.VITE_REACT_APP_BASEURL),
    'process.env.VITE_REACT_APP_BASEIMGURL':JSON.stringify(process.env.VITE_REACT_APP_BASEIMGURL),
    'process.env.VITE_REACT_APP_APIKEY':JSON.stringify(process.env.VITE_REACT_APP_APIKEY)
  }
})
