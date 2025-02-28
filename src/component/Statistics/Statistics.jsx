import { useLoaderData } from 'react-router-dom';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';



const Statistics = () => {

    const allProducts = useLoaderData()

    return (
        <div className="max-w-7xl mx-auto bg-[#9538E2]  text-white">
            <h2 className="font-bold text-4xl py-5 text-center">Statistics</h2>
            <p className=" text-center w-7/12  mx-auto pb-7">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

            <div className=' bg-gray-100 pb-24 '>
            <h2 className="max-w-6xl mx-auto font-bold text-4xl pt-12 pb-8 text-black">Statistics</h2>
                <div className='max-w-6xl  h-[600px] mx-auto pt-5 pb-16 px-5  bg-white rounded-2xl'>
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        width={500}
                        height={400}
                        data={allProducts}
                        margin={{
                            top: 20,
                            right: 80,
                            bottom: 20,
                            left: 20,
                        }}>
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="product_title" tick={{ fontSize: '12px', fill: '#333' }} />
                        <YAxis  />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="price" barSize={40} fill="#9538E2" />
                        <Line type="monotone" dataKey="Rating" stroke="#ff0000" />
                    </ComposedChart>
                </ResponsiveContainer>
                </div>

                

            </div>


        </div>
    );
};

export default Statistics;