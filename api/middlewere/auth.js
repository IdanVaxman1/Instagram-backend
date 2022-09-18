import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {




    try {
        const token = req.headers.authorization.split(" ")[1]
        let decodedData

        if (token) {
            decodedData = jwt.verify(token, 'test')
            req.userId = decodedData?.id
        }

        next()

    } catch (error) {
        res.locals.error = err;
        const status = err.status || 500;
        res.status(status);
        res.render('error');
    }

}

export default auth