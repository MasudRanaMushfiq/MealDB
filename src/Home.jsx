import { useState } from "react"
import Category from "./Category"

export default function Home () {
    const [categories, setCategories] = useState([])
    
    function showCategory() {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(data => data.json())
        .then(data => {
            setCategories(data.categories)
        })
        .catch(err => console.log(err))
    }
    function clearCategory() {
        setCategories([])
    }
    return (
        <div>
            <div>
                <button onClick={showCategory} className="bg-blue-700 m-4 p-4 text-white text-2xl rounded-2xl">View Meal Categories</button>
                <button onClick={clearCategory} className="bg-red-600 m-4 p-4 text-white text-2xl rounded-2xl">Clear Categories</button>
                <h1 className="ml-7">Click the button to view meal categories</h1>
            </div>
            <div>
                {
                    categories.map(category => <Category data={category} key={category.idCategory}></Category>)
                }
            </div>
        </div>
    )
}