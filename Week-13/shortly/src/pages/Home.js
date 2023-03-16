import React, { useState } from "react"
import Layout from "../components/Layout"
const BASEURL = 'https://api.shrtco.de/v2/shorten'
// ?url=
const Home = () => {
    const [inputUrl, setInputUrl] = useState('')
    const [shortUrlList, setShortUrlList] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputUrl) {
            const url = new URL(BASEURL)
            url.searchParams.set('url', inputUrl)
            if (url)
                fetch(url).then(res => res.json()).then(data => {
                    console.log(data)
                    const { ok, result: { original_link, full_short_link } } = data
                    if (ok) {
                        setShortUrlList([...shortUrlList, { link: original_link, shortLink: full_short_link }])
                    }
                }).catch(e => console.log(e))
        }

    }
    return (
        <React.Fragment>
            <Layout>
                <section className="intro">
                    <h1 >More than just shorter Links</h1>
                    <p>
                        Build your brand's recognition and get detailed insights on how your links are performing
                    </p>
                </section>
                <form onSubmit={handleSubmit} >
                    <section>
                        <input name="url" id="url" type="url" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} required placeholder="Shorten a link here..."></input>
                        <button type="submit">Shorten it!</button>
                    </section>
                </form>
                <article className={!shortUrlList.length ? '' : "url-list-container"}>
                    {shortUrlList.map((list, index) => (
                        <section key={"url-" + index} className="url-list-item-container">
                            <section className="url-list-item">{list.link}</section>
                            <section className="url-list-item cyan-text">{list.shortLink}</section>
                            <section><button className="cyan-bg" onClick={() => navigator.clipboard.writeText(list.shortLink)}>Copy</button></section>
                        </section>
                    ))}
                </article>
            </Layout>
        </React.Fragment>
    )
}

export default Home