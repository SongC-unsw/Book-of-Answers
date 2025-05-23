import bookCoverImage from '/cover/Book.png';

function Book({ bookContent, handleClick, currentLang}) {
    const getFontClass = () => {
        switch(currentLang) {
            case 'cn':
                return 'font-chinese';
            case 'jp':
                return 'font-japanese';
            case 'en':
            default:
                return 'font-english';
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen">
            {bookContent ? (
                <div className="flex p-8 items-center justify-center w-[1000px] h-[500px] shadow-2xl embossed-card">
                    <p className={`book-content text-center w-full text-5xl ${getFontClass()}`}>{bookContent}</p>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center gap-3">
                    <h1 className="font-bold text-center text-4xl">Click to find out</h1>
                    <img
                        src={bookCoverImage}
                        alt="Book of Answer"
                        className="w-[500px] h-[500px] cursor-pointer transition-transform duration-300 hover:scale-103"
                        onClick={handleClick}
                    />
                </div>
            )}
        </div>
    );
}

export default Book;