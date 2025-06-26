import Navbar from "./Navbar"
import Footer from "./Footer"
function App() {
    return (
        <div className="container" style={{ backgroundColor: "lightgreen", height: "700px", width: "100%" }}>
            <div className="main" style={{ backgroundColor: "white", height: "500px", width: "50%", margin: "auto", position: "relative", top: "18%" }}>
                <Navbar />
                <div className="img">
                    <img src="https://static.vecteezy.com/system/resources/previews/029/560/719/large_2x/home-plant-in-pot-isolated-free-photo.jpg" alt="" style={{ height: "300px", width: "47%", position: "relative", top: "45px", marginLeft: "1%" }} />
                </div>
                <div className="content">
                    <h1 style={{ fontSize: "28px", marginLeft: "52%", position: "absolute", bottom: "67%", fontFamily: "serif"}}>CLASSIC PEACE LILY</h1>
                    <p style={{ fontSize: "normal", marginLeft: "52%", position: "absolute", bottom: "63%", fontFamily: "serif"}}>POPULAR HOUSE PLANT</p>
                    <h3 style={{ fontSize: "30px", marginLeft: "52%", position: "absolute", bottom: "50%", }}>$ 18</h3>
                    <p style={{ fontSize: "20px", marginLeft: "52%", position: "absolute", bottom: "33%", fontFamily: "serif"}}>Classis peace lily is a sparthphylium floor plant
                        arrenged in a bamboo plant with <br /> a blue
                        and red and butterfly pick.</p>
                    <button style={{ height: "40px", width: "20%", marginLeft: "52%", position: "absolute", bottom: "22%", }}>ADD TO CART</button>
                    <button style={{ height: "40px", width: "20%", marginLeft: "74%", position: "absolute", bottom: "22%", }}>WISHLIST</button>
                </div>
                <Footer />
            </div>
        </div>
    )

}

export default App