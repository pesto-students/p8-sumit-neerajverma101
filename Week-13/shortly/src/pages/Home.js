import React, { useState } from "react"
import Layout from "../components/Layout"
import Loader from "../components/Loader"
import ToastNotification from "../components/Toast"

const BASEURL = 'https://api.shrtco.de/v2/shorten'
// ?url=
const toastInitialState={show:false,body:''}

const Home = () => {
    const [inputUrl, setInputUrl] = useState('')
    const [shortUrlList, setShortUrlList] = useState([])
    const [showLoader,setLoader] = useState(false)
const [showToast,setToast] = useState(toastInitialState)


    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputUrl) {
            const url = new URL(BASEURL)
            url.searchParams.set('url', inputUrl)
            if (url)
            setLoader(true)    
            fetch(url).then(res => res.json()).then(data => {
                    console.log(data)
                    const { ok, result: { original_link='', full_short_link='' }={} } = data
                    if (ok) {
                        setShortUrlList([...shortUrlList, { link: original_link, shortLink: full_short_link }])
                    }else{
                        setToast({show:true,
                            body:data.error
                        })
                    }
                    setLoader(false)
                }).catch(e => {
                    console.log(e)
                    setLoader(false)
                    setToast({show:true,
                        body:e.error
                    })
                })
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
                <section className="url-input-container">
                    <form onSubmit={handleSubmit} >
                        <section className="url-input-button">
                            <input name="url" id="url" type="url" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} required placeholder="Shorten a link here..."></input>
                            <button type="submit">Shorten it!</button>
                        </section>
                    </form>
                </section>
                <article className={!shortUrlList.length ? 'flex-1' : "flex-1"}>
                    {shortUrlList.map((list, index) => (
                        <article className="url-list-item-container">
                            <section key={"url-" + index} className="url-list-item-parent">
                                <section className="url-list-item">{list.link}</section>
                                <section className="url-list-item cyan-text">{list.shortLink}</section>
                                <section><button className="cyan-bg" onClick={() => navigator.clipboard.writeText(list.shortLink)}>Copy</button></section>
                            </section>
                        </article>
                    ))}
                </article>
                {showLoader?<Loader></Loader>:null}
                {showToast.show?<ToastNotification show={showToast.show} body={showToast.body} onClose={()=>setToast(toastInitialState)}></ToastNotification>:null}
            </Layout>
        </React.Fragment>
    )
}

export default Home