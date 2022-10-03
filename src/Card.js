import "./Card.css"
const Card = () => {
    const hallo = () =>{
        console.log("Kaart 1")
    }
    return(
        <article onClick = {hallo}>
            <header>
                <h2>EERSTE KAART</h2>
            </header>
            <section>
                Aliqua mollit sint cillum occaecat nostrud ut commodo do.
            </section>
        </article>
    );
}

export default Card;