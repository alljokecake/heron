import { TitleBar } from "./_components/titlebar";

const MainLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full bg-[#1E1E1E]">
          <TitleBar />
          <div className="min-h-screen flex-grow pt-10">
            {children}
          </div>
        </div>
    );
}

export default MainLayout;
