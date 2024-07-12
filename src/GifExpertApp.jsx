import { useState } from "react"
import AddCategory from "./components/AddCategory"

const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Peace', 'Dragon Ball' ])

    const onAddCategory = () => {
        //console.log('valorant')
        setCategories([ 'valorant', ...categories ])
    }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory setCategories={ setCategories } />
        <ol>
            {
                categories.map( category => {
                    return <li key={ category }>{ category }</li>
                })
            } 
        </ol>
    </>
  )
}

export default GifExpertApp
