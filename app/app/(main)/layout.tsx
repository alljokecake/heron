import { TitleBar } from "./_components/titlebar";

const MainLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full bg-[#1E1E1E]">
          <TitleBar />
          <main className="h-full pt-10">
            {children}
          </main>
        </div>
    );
}

export default MainLayout;
