import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import { useModal } from "./context/modalContext";

const App = ({ children }: { children: React.ReactNode }) => {
    
    const { rightBar, darkMode } = useModal();

    return (
        <>
            <div
                className={`flex justify-between Mode ${
                    darkMode ? "dark" : "light"
                }`}
            >
                <LeftSideBar />
                <div
                    className={
                       rightBar ? "w-[60%] mx-auto" : "w-[80%] ml-[20%]"
                    }
                >
                    {children}
                </div>
                {rightBar && <RightSideBar />}
            </div>
        </>
    );
};

export default App;
