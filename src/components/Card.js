function Card(props) {
    function handleClick() {
        props.onClick(props.item);
    }

    return (
        <article className="place">
                    <button type="button" aria-label="Удалить карточку" className="place__delete-button button-decor hover-opacity"></button>
                    <img className="place__pic" src={props.item.link} alt={props.item.name} onClick={handleClick}/>
                    <div className="place__desc">
                        <h2 className="place__name">{props.item.name}</h2>
                        <div className="place__likes">
                            <button type="button" aria-label="Поставить лайк" className="place__like button-decor hover-opacity"></button>
                            <p className="place__number-of-likes">{props.item.likes.length}</p>
                        </div>
                    </div>
                </article>
    )
}

export default Card;