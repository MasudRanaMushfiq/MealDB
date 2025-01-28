import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router"
import MealsPage from "./MealsPage"

export default function CategoryPage (){
    const {category} = useParams()
    const [meal, setMeal] = useState([])

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(data=>data.json())
        .then(data =>{
            setMeal(data.meals)
        })
        .catch(err => console.log(err))

    })

    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-white m-3 text-2xl">View meal for {category}</h1>
                <Link to={'/'}>
                    <button className="btn btn-warning m-2">Back</button>
                </Link>
            </div>
            <div className=" flex flex-wrap">
                {
                    meal.map(meal => <MealsPage data={meal} key={meal.idMeal}/>)
                }
            </div>
        </div>
    )
}