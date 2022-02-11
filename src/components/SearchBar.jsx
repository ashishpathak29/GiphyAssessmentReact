import {useCallback, useState} from "react";

export default function SearchBar ({onSubmit}) {
    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = useCallback(() => {
        onSubmit(query)
    }, [query, onSubmit])

    return (
        <section>
            <input type="text" onChange={handleChange} placeholder={'please input text'}/>
            <button class="button" onClick={handleSubmit}> Search</button>
        </section>
    )
}