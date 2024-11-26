import { MainBar } from "./_components/mainbar";
import { ActionBar } from "./_components/actionbar";
import { Footer } from "./_components/footer";

export const Panel = () => {
    return(
        <div className="min-h-screen pt-1 p-3 flex flex-col w-full space-y-3">
          <ActionBar />
          <MainBar />
          <Footer />
        </div>
    );
}
