import { Modal } from 'antd';
import Item from './Item'
import {useCallback, useState} from "react";

export default function ItemsList ({items}) {
    const [isModalShown, setModalShown] = useState(false)
    const [currentImageData, setCurrentImageData] = useState({})

    const handleImageClick = useCallback((imageData) => {
        debugger
        setModalShown(true)
        setCurrentImageData(imageData)
    }, [])
    return (
        <>

        <section className={'ItemsList'}>
            {items.map(item => <Item key={item.id} onClick={handleImageClick} item={item}/>)}
        </section>
            <Modal visible={isModalShown} title={currentImageData.title} onCancel={() => setModalShown(false)}>
                <img className={'Item__Image'} src={currentImageData.images?.original?.webp} alt={currentImageData.title}/>
                <h4>Author: <span>{currentImageData.username}</span></h4>
                <p>Rating: <span>{currentImageData.rating}</span></p>
            </Modal>
        </>
    )
}