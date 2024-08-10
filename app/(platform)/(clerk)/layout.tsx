const ClerkLayout = (
    {children}:{children:React.ReactNode}
)=>{
    return (
        <div className="h-full w-full flex flex-col items-center justify-center bg-[url('/bg.svg')]">
            {children}
        </div>
      
      

    );
};

export default ClerkLayout;