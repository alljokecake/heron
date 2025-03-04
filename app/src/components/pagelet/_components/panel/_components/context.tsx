import "./context.css";

export const Context = () => {
  return (
    <div className="pb-12 flex items-start h-full">
      {/* Sidebar */}
      <div className="h-full w-[260px] rounded-md text-white p-2">
        <Sidebar />
      </div>

      {/* File Explorer */}
      <div className="h-full bg-[#212121] w-full rounded-md p-4">
        {/* File Items Container - Scrollable */}
        <div className="grid grid-cols-8 gap-2 overflow-y-auto max-h-[600px] p-2">
          <FileItem name="cool_folder" icon="folder.svg" />
          <FileItem name="dee" icon="folder.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="tanem.txt" icon="text2.svg" />
          <FileItem name="dee" icon="folder.svg" />
          <FileItem name="dee" icon="folder.svg" />
          <FileItem name="dee" icon="folder.svg" />
          <FileItem name="dee" icon="folder.svg" />
          <FileItem name="dee" icon="folder.svg" />
          <FileItem name="dee" icon="folder.svg" />
          <FileItem name="dee" icon="folder.svg" />
          <FileItem name="dee" icon="folder.svg" />
          <FileItem name="dee" icon="folder.svg" />
          <FileItem name="dee" icon="folder.svg" />
          <FileItem name="dee" icon="folder.svg" />
          <FileItem name="dee" icon="folder.svg" />
          <FileItem name="dee" icon="folder.svg" />
          <FileItem name="dee" icon="folder.svg" />
          <FileItem name="dee" icon="folder.svg" />
          <FileItem name="dee" icon="folder.svg" />
          <FileItem name="dee" icon="folder.svg" />
          <FileItem name="dee" icon="folder.svg" />
          <FileItem name="dee" icon="folder.svg" />
          <FileItem name="dee" icon="folder.svg" />
          <FileItem name="dee" icon="folder.svg" />
        </div>
      </div>
    </div>
  );
};

// Sidebar Component (Empty for now)
const Sidebar = () => {
  return <div></div>;
};

// File Item Component
const FileItem = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div className="flex flex-col items-center space-y-1 p-2 rounded-md hover:bg-[#333333] transition">
      <img src={icon} alt={name} className="w-16 h-16" />
      <div className="text-white text-sm truncate w-20 text-center">{name}</div>
    </div>
  );
};

export default Context;
