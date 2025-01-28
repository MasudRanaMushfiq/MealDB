import { Link } from "react-router";

export default function Category({data}){
    // console.log(data)
    return(
        <div className="flex m-10 p-4 bg-gray-600">
            <div>
                <img src={data.strCategoryThumb} alt="data.strCategory"/>
            </div>
            <div>
                <Link to={'/' + data.strCategory} className="text-blue-500 text-3xl">{data.strCategory}</Link>
                <p className="">{data.strCategoryDescription}</p>
            </div>
        
        </div>
    )
}