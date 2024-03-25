/** @type {import('next').NextConfig} */
import {countries } from "../src/components/FetchData.js"

const nextConfig = {
    env:{
        countryList : countries, 
    }
};

export default nextConfig;
