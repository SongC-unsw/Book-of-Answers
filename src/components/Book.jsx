function Book({handleClick}) {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-3">
            <h1 className='font-bold text-4xl'>Click to find out</h1>
            <img
            src="../cover/Book.png"
            alt="Book of Answer"
            className="w-[500px] h-[500px] cursor-pointer transition-transform duration-300 hover:scale-103"
            onClick={handleClick}
            />
        </div>
    )
};

export default Book;