import CardListItem from '../card-list-item/card-list-item';

const CardList = ({data, onOpenProducts}) => {
    
    const elements = data.map((item) => {
        const {id, ...itemProps} = item;
        if (onOpenProducts) {
            return (
                <CardListItem 
                    key={id}
                    {...itemProps}
                    onOpenProducts={() => onOpenProducts(id)}
                />
            )
        } else {
            return <CardListItem key={id} {...itemProps} />
        }
    })

    return <>{elements}</>
}

export default CardList;