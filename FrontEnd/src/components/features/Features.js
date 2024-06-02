function Features(props) {
    return (
        <div className="feature-item">
                    <img src={props.src} alt={props.alt} className="feature-icon" />
                    <h3 className="feature-item-title">{props.titleH3}</h3>
                    <p>{props.text}</p>
                </div>
    );
}

export default Features;