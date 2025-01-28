import {Link, Links} from 'react-router-dom';

export default function Navbar(){
    return(
            <div className="bg-gray-600 flex items-center h-14 ">
                <Link className="text-3xl m-3 text-white">Meal</Link>
                <Link className="text-3xl m-3 text-white">Home</Link>
                <Link className="text-3xl m-3 text-white">Link</Link>
                <h1 className="text-3xl m-3 text-gray-700">Disable</h1>
            </div>
    )
}