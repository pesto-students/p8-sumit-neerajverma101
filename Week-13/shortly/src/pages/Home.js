import React from "react"
const BASEURL = 'https://api.shrtco.de/v2/shorten?url='

const Home = () => {
    const handleSubmit = (e) => {
        if (e.target.value) {
            const url = new URL(e.target.value, BASEURL)
            if (url.)
                fetch()
        }

    }
    return (
        <React.Fragment>
            <h1>Home</h1>
            <form method="post" action={ }>
                <section>
                    <input name="url" id="url" placeholder="Shorten a link here..."></input>
                    <button>Shorten it!</button>
                </section>
            </form>
        </React.Fragment>
    )
}

export default Home