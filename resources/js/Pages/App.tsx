import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import { ModalProvider } from "./context/modalContext";


const App = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
        <ModalProvider>
                <div className="flex justify-between">
                    <LeftSideBar />
                    <div className="w-[60%] overflow-y-scroll mx-auto">{children}</div>
                    <RightSideBar />
                </div>
                </ModalProvider>
        </>
    );
};

export default App;
