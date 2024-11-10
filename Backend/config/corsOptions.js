
const allowedOrigins = ['http://localhost:5173']

const corsOptions = {
    credentials: true,
    origin: allowedOrigins[0]
}

module.exports = corsOptions;