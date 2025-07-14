import React from 'react';
import Title from './Title';
import { assets} from '../assets/assets';
import CarCard from './CarCard';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/Appcontext';

function FeaturedSection() {
    const {cars} =useAppContext()
    const navigate=useNavigate()
    return (
        <div  className='flex flex-col items-center py-24 px-6 md:px-16
        lg:px-24 xl:px-32'>
            <div>
                <Title title='Featured Vehicles' subTitle='Explore our selection of premium vehicles available for your next adventure' />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
                {
                    cars.slice(0,6).map((car)=>(
                        <div key={car._id}>
                            <CarCard car={car}/>
                        </div>

                    ))
                }
            </div>
                < button onClick={()=>{
                    navigate('/cars'); scrollTo(0,0)
                }} className='f1ex items-center  justify-center gap-2 px-6 py-2 border
                     border-borderColor hover:bg-gray-50 rounded-md mt-18 cursor-pointer' >
                Explore all cars<img src={assets.arrow_icon} alt="" />
            </button>
        </div>
    );
}

export default FeaturedSection;