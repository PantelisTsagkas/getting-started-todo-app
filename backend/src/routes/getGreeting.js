const GREETING = [
    "Whalecome!!",
    "All hands on Deck",
    "Ahoy matey!",
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};
