import React from 'react';

import './item-info.styles.scss';

interface ItemInfo {
    name: string,
    image?: { medium: string, original: string },
    summary?: string
}

type ItemInfoProps<T> = { item: T };

const ItemInfoComponent = <T extends ItemInfo>({ item }: ItemInfoProps<T>) => {
    return (
        <div className="item-info">
            <div className="item-name">
                <h2>{item.name}</h2>
            </div>
            <div className="item-content">
                <div className="item-image">
                    <img src={item.image ? item.image.medium : `${process.env.PUBLIC_URL}/noimage.png`} alt=""/>
                </div>
                <div className="item-summary">
                    {item.summary ? item.summary.replace(/(<([^>]+)>)/gi, "") : `We don't have a summary for ${item.name} yet`}
                </div>
            </div>
        </div>
    );
}

export default ItemInfoComponent;