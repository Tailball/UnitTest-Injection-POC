import React from 'react';

const Embeddedpage = () => {
    return (
        <section className="page embedded">
            <h1>Embedded page</h1>

            <iframe className="embeddedIframe"
                    width="560" height="315" src="https://www.youtube.com/embed/Xf70ol16qGM" 
                    frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen="false" />
        </section>
    );
}

export default Embeddedpage;