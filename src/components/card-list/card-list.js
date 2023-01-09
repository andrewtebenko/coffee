import CardListItem from '../card-list-item/card-list-item';

const CardList = ({data, onOpenDescription}) => {
    
    const elements = data.map((item) => {
        const {id, ...itemProps} = item;
        if (onOpenDescription) {
            return (
                <CardListItem 
                    key={id}
                    {...itemProps}
                    onOpenDescription={() => onOpenDescription(id)}
                />
            )
        } else {
            return <CardListItem key={id} {...itemProps} />
        }
    })

    return <>{elements}</>
}

export default CardList;