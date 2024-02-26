

function middleWarOfAppJs(app,cors,express) {
    app.use(cors());
    app.use(express.json());
};
module.exports = middleWarOfAppJs ;