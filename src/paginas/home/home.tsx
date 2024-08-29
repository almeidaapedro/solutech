import tecnologia from "../../assets/tecnologia.webp"

function Home(){

    return (
        <>
            <div className="flex justify-between bg-waikawa-gray-900 bg-gradient-to-b">
                <div className="p-8 m-7 w-1/2 text-xl text-white">
                    <div className="text-waikawa-gray-black-50">
                        <h1 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                        <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, qui! Inventore adipisci esse repellat debitis modi! Repellendus suscipit veniam voluptatum magnam! Amet ea fuga assumenda facilis saepe esse cupiditate ipsa.</p>
                    </div>
                    <div>
                        <button className="mt-8 bg-waikawa-gray-black-900 p-2 rounded-lg">Como trabalhamos</button>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src={tecnologia} alt="carrossel" className="w-4/5"/>
                </div>
            </div>
        </>
    )


}

export default Home;