const getAbout = (req, res) => {
    res.status(200).send({ message: "Test Test Test" });
};

module.exports = {
    getAbout
};