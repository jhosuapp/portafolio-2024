import { Delayed, AnimateLine, Button } from "@/components";
// import { HomeHero, HomeVision } from './components';

const HomeScreen = () => {
    return (
        <Delayed>
            <AnimateLine top="40vh" />
            {/* <HomeHero />
            <HomeVision /> */}
            <AnimateLine top="150vh" className="animate-line--secondary" />
            <div className="map">
                <iframe src="https://www.google.com/maps/d/embed?mid=1E67ATNKc3SEpSug_XFmjrV8_KEsgjgk&ehbc=2E312F" width="100%" height="500px"></iframe>
                <div className="map__cover"></div>
                <div className="map-modal">
                    <Button 
                        Text="Ver en la app"
                        HoverText={`Ver ahora`}
                        className="btn btn--primary h-text"
                        delayAnimation={ 0.45 }
                        onClick={ ()=> window.location.href = "https://www.google.com/maps/d/embed?mid=1E67ATNKc3SEpSug_XFmjrV8_KEsgjgk&ehbc=2E312F" }
                    />
                </div>
            </div>
        </Delayed>
    )
}

export { HomeScreen }