import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function ItemDetails () {
    const {mealid} = useParams()
    const [details, setDetails] = useState()

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        .then(data => data.json())
        .then(data => {
        setDetails(data.meals[0])})
        .catch(err => console.log(err))
    }, [])

    if(!details) {
        return null
    }

    return (
        <div>
            <div className="flex justify-end m-4 p-4">
                <Link to={'/' + details.strCategory}>
                    <button className="btn btn-active btn-primary text-2xl">Back</button>
                </Link>
            </div>
            <div>
                <h1 className="text-5xl text-white font-bold ml-[150px]"> {details.strMeal} </h1>
                <br></br> 
                <hr className="ml-[150px] mr-[150px]" />
                <br />
            </div>
            <div className="ml-[150px] mr-[150px] flex">
                <div className="h-96 w-96 m-2 rounded-2xl">
                    <img src={details.strMealThumb} alt={details.strMeal} />
                </div>
                <div className="w-[700px] bg-red-700  rounded-2xl m-2">
                    <div className=" m-2   flex justify-between">
                        <h1 className="text-black text-2xl">Instruction:</h1>
                        <Link className="text-red text-2xl m-2" to={'https://www.youtube.com'} >
                            YouTube
                        </Link>
                    </div>
                    <div>
                        <p className="text-1xl text-blue">{details.strInstructions}</p>
                    </div>
                </div>
                <div className="bg-orange-700 m-2 w-[500px] rounded-2xl">
                    <div>
                        <h1 className="text-2xl text-white m-2">Ingredients:</h1>
                    </div>
                    <div>
                        {Array.from({ length: 20 }, (_, i) => {
                            const ingredientKey = `strIngredient${i + 1}`;
                            const measureKey = `strMeasure${i + 1}`;
                            if (details[ingredientKey]) {
                                return (
                                    <p key={i} className="m-2 text-1xl text-white">
                                    ------ {details[ingredientKey]} - {details[measureKey]}
                                    </p>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}