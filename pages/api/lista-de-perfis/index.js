const handler = (req, res) => {

   const dummyList = [
        {
            id: "pf1",
            name: "Dr Strange",
            image: 'images/drstrange.jpg',
            midia: "@Stranger",
            description: "Strange was a skilled neurosurgeon before nerve damage impaired his hands. Doctor Strange is described as the mightiest magician in the cosmos and more powerful by far than any of your fellow humanoids",
        }, {
            id: "pf2",
            name: "Scarlet Witch",
            image: 'images/scarlet.jpg',
            midia: "@ScarletW",
            description: "Personality. Wanda is a serious and introverted individual with emotional fragility due to her upbringing. At her core, however, Wanda has a caring personality devoted to protecting innocents, and a willingness to fight for what she feels is right.",
        },
                {
            id: "pf3",
            name: "Spider-Man",
            image: 'images/spiderman.jpg',
            midia: "@Parker",
            description: "Spider-Mans Powers and Abilities Superhuman strength, agility, endurance, ability to stick to and climb walls and other surfaces, uses self-designed web-shooters allowing him to fire and swing from sticky webs, special Spider-Sense warns of incoming danger, genius intellect specializing in chemistry and invention",
        },
    ]

    if (req.method === "GET") {

        res.status(200).json({ message: "success", lista: dummyList })
    }
}

export default handler 