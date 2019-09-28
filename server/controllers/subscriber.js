const Subscriber = require("../db/models/Subscriber");
const mongoose = require("mongoose");
const sendMail = require("../helpers/mailSender");

exports.subscriber = (req, res, next) => {
    const { email } = req.body;
    const subscriber = new Subscriber({
        email,
    });

    subscriber
        .save()
        .then(async data => {

            // const letterSubject = 'Welcom to eWorld Shop!';
            // const letterHtml = `
            // <h1>Youn join our site.</h1>
            // <p>HJGjhghg hjg jgg g gg ghghj gjg ghj gjh ghj ghj gjh gjh</p>
            // `;
            // const mailResult = await sendMail(
            //     email,
            //     letterSubject,
            //     letterHtml
            // );
            res.send({ message: 'Now, you are subscribed!', ...data._doc })
        })
        .catch(error =>
            res
                .status(400)
                .json({
                    message: `Error happened on server: ${error}`
                })
        );
}