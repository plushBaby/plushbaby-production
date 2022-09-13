import jwt from 'jsonwebtoken';

const loginAuth = async ( req, res, next) => {
    try {
       
        const token = req.headers.authorization.split(" ")[1];
        const isCustomToken = token.length < 500;
        let decodedFormData;

        if(token && isCustomToken) {
            decodedFormData= jwt.verify(token, 'test');
            req.userId = decodedFormData?.id;

        } else {
            decodedFormData = jwt.decode(token);
            req.userId = decodedFormData?.sub;
        }

        next ();

    } catch (error) {
        console.log(error);
    }
}

export default loginAuth;