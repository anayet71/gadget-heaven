import { useLoaderData } from "react-router-dom";

const Phones = () => {

    const data = useLoaderData()
    console.log(data)
    return (
        <div>
                <h1 className="text-5xl">Phones</h1>            
        </div>
    );
};

export default Phones;