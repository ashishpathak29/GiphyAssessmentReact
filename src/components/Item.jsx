
import {useCallback} from "react";

export default  function Item ({item, onClick}) {
    const {title, images: {downsized_medium}, username} = item

    const handleClick = useCallback((e) => onClick(item), [item])
    return (
        <article className={'Item'} onClick={handleClick}>
            <img className={'Item__Image'} src={downsized_medium.url}  alt={title}/>

        </article>
    )
}