import React from 'react'

const Meme = () => {
    return (
        <div className="meme">
            <form className="meme-form">
                <div>
                    <input type="text" className="top-text" />
                    <input type="text" className="bottom-text" />
                </div>
                <button className="generate-meme-btn">Generate Meme</button>
            </form>
        </div>
    )
}

export default Meme