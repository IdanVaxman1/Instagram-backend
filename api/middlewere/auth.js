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
        res.locals.error = error;
        const status = error.status || 500;
        res.status(status);
        res.send(error);
    }

}

export default auth