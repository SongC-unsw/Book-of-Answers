import './App.css';
import Book from './components/Book';
import { useState, useEffect } from 'react';
import answer from './answers.json';
import LangPick from './components/langPick';
import Footer from './components/Footer';
function App() {
  const [bookContent, setBookContent] = useState("");
  const [lang, setLang] = useState('en');
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(null);

  const onLanguageChange = (value) => {
    setLang(value);
  };

  // 当语言或答案索引变化时更新显示内容
  useEffect(() => {
    if (currentAnswerIndex !== null) {
      setBookContent(answer[currentAnswerIndex][lang]);
    }
  }, [lang, currentAnswerIndex]);

  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * 100);
    setCurrentAnswerIndex(randomNum);
    setBookContent(answer[randomNum][lang]);
  };

  return (
    <>
      <div className='relative w-full'>
        <div className='absolute top-4 right-4 z-10'>
          <LangPick currentLang={lang} onLanguageChange={onLanguageChange} />
        </div>
        <div>
          <Book bookContent={bookContent} handleClick={handleClick} currentLang={lang} />
        </div>
        <Footer />
      </div>
    </>
  )
};
export default App
