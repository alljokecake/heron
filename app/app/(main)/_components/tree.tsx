export const Tree = () => {
    return (
        <>
          <aside
            className="group/sidebar min-h-screen bg-zinc-800 overflow-y-auto
            relative flex w-60 flex-col z-[99999]"
          >
            <div className="mt-4">
              <p>Desktop </p>
            </div>
            <div className="mt-2">
              <p>Documents</p>
            </div>
            <div className="mt-2">
              <p>Recycle Bin</p>
            </div>
            <div 
              className="opacity-0 group-hover/sidebar:opacity-100 transition
              cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"
            />
          </aside>
        </>
    );
}

