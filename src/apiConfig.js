let apiUrl;
const apiUrls = {
    development: `http://localhost:5001`,
    production: `https://apex-legends-app.fly.dev`
}

if(window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

export default apiUrl;