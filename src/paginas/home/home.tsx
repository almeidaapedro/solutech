import tecnologia from "../../assets/tecnologia.webp"

function Home(){

    return (
        <>
            <div className="flex justify-between">
                <div className="p-8 m-7">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, qui! Inventore adipisci esse repellat debitis modi! Repellendus suscipit veniam voluptatum magnam! Amet ea fuga assumenda facilis saepe esse cupiditate ipsa.</p>
                    <button className="border-x-8 mt-4">Como trabalhamos</button>
                </div>
                <div>
                    <img src={tecnologia} alt="" />
                </div>
            </div>
        </>
    )


}

export default Home;