import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import { useModal } from "./context/modalContext";

const App = ({ children }: { children: React.ReactNode }) => {
    const { rightBar } = useModal();
    return (
        <>
            <div className="flex justify-between">
                <LeftSideBar />
                <div
                    className={
                        rightBar
                            ? "w-[60%] overflow-y-scroll mx-auto"
                            : "w-[80%] absolute  right-0"
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
