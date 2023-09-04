import Card from "./Card";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";
import { useState } from "react";
function Testimonial(props){
    let reviews=props.reviews
    
    const [counter,setCounter]=useState(0);
    function leftHandler(){
        if (counter-1<0){
            setCounter(reviews.length-1);

        }
        else{
            setCounter(counter-1);
        }
    }
    function rightHandler(){
        if (counter+1>reviews.length-1){
            setCounter(0)
        }
        else{
            setCounter(counter+1)
        }

    }
    function surpriseHandler(){
        setCounter(Math.floor(Math.random() * reviews.length));
    }
    return(
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col jusitify-center items-center mt-10 p-10 transition-all duration-300 rounded-lg hover:shadow-xl hover:cursor-pointer">
            <Card review={reviews[counter]}></Card>
            <div>
                <button onClick={leftHandler} className="text-violet-500 mx-auto mt-5 text-lg cursor-pointer font-extrabold hover:text-violet-700 transition all duration-200">
                    <FiChevronLeft></FiChevronLeft>
                </button>
                <button onClick={rightHandler} className="text-violet-500 mx-auto mt-5 text-lg cursor-pointer font-extrabold hover:text-violet-700 transition all duration-200">
                    <FiChevronRight></FiChevronRight>
                </button>
            </div>

            <div className="text-white w-[150px] bg-violet-400 rounded-lg px-2 py-2 mx-auto mt-5 text-lg hover:bg-violet-700 transition all duration-200">
                <button onClick={surpriseHandler}>Surprise Me</button>
            </div>
        </div>
    );
}

export default Testimonial;