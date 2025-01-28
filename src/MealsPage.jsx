import { Link } from "react-router";

export default function MealsPage( {data}){

    return(
        <div>
            <div className=" m-3 p-2 card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img src={data.strMealThumb} alt="data.strMeal"/>
                </figure>
                <div className="card-body">
                    <Link to={'/meal/' + data.idMeal}>
                    <button className="btn btn-outline btn-info text-2xl">
                        {data.strMeal}
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}