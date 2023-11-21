const Hello = (app) => {
    app.get("/hello", (_, res) => {
        res.send("Hello from the other side!");
    })

    app.get("/", (_, res) => {
        res.send("Welcome to full stack development!");
    })
}

export default Hello;