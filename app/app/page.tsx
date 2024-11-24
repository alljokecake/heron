import MainPage from "./(main)/page";
import MainLayout from "./(main)/layout";

export default function Home() {
  return (
      <div>
        <MainLayout children={<MainPage />} />
      </div>
  );
}
