import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";


const App = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="flex justify-between">
                    <LeftSideBar />
                    <div>
                    {children}
                    </div>
                    <RightSideBar/>
            </div>
        </>
    );
};

export default App;
