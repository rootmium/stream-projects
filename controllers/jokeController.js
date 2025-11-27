
};

};

    try {
        const requestId = req.params.id;
        if (!Number.isInteger(Number.parseInt(requestId))) {
            return res.status(400).json({ error: "Bad request" });
        }

        res.status(200).json(joke);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

    try {
        res.status(200).json(joke);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

    try {
        const text = req.body.text;
        if (!text) {
            return res.status(400).json({ error: "text doesn't exist" });
        }

    } catch (err) {
        return res.status(500).json({ error: err });
    }
};
