import './App.css';
import Book from './components/Book';
import { useState } from 'react';
import answer from './answers.json';
import LangPick from './components/langPick';
function App() {
  const [bookContent, setBookContent] = useState("");
  const [lang, setLang] = useState('en');
  const onLanguageChange = (value) => {
    setLang(value);

  };

  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * 100);
    // console.log(randomNum);
    console.log(answer[randomNum][lang]);
    setBookContent(answer[randomNum][lang]);

  };

  return (
    <>
      <LangPick currentLang={lang} onLanguageChange={onLanguageChange}/>
      <Book bookContent={bookContent} handleClick={handleClick}/>
    
    </>

  )
};
export default App
