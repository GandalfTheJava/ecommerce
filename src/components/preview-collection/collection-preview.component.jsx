import React from 'react';
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">

            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4) //Return index values of less than 4 (First 4 elements)
                        .map(item => ( //Pass the whol item in
                            <CollectionItem key={item.id} item={item} />
                        ))}
            </div>
        </div>
    );
}

export default CollectionPreview;