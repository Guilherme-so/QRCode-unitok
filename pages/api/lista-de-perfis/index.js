const handler = (req, res) => {

    const dummyList = [
        {
            id: " pf1",
            name: "Petter Parker ",
            image: "someiamgeHere",
            midia: "@parker",
            description: "A poor student whose is a superhero in his spare time",
        },
             {
            id: " pf2",
            name: "Dr Strange",
            image: "someiamgeHere",
            midia: "@Strange",
            description: "A poor student whose is a superhero in his spare time",
        },        {
            id: " pf3",
            name: "Iron maiden",
            image: "someiamgeHere",
            midia: "@parker",
            description: "A poor student whose is a superhero in his spare time",
        },
    ]

    if (req.method === "GET") {

        res.status(200).json({ message: "success", lista: dummyList })
    }
}

export default handler 