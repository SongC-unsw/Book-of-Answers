import * as React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

const toggleGroupItemClasses =
    "flex size-[35px] items-center justify-center bg-white/50 leading-4 text-mauve11/70 first:rounded-l last:rounded-r hover:bg-violet3 focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none data-[state=on]:bg-violet6 data-[state=on]:text-violet12 data-[state=on]:!shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] data-[state=on]:brightness-110 transition-all duration-200";

// 接收一个 onLanguageChange 属性来向父组件传递语言变化
const LanguagePicker = ({ currentLang = "en", onLanguageChange }) => {
  const handleLangPick = (value) => {
    if (value && onLanguageChange) {
      onLanguageChange(value); // 调用父组件传递的函数，传递选中的语言值
    }
  };
  
  return (
    <ToggleGroup.Root
      className="inline-flex space-x-px rounded bg-mauve6 shadow-[0_2px_10px] shadow-blackA4"
      type="single"
      value={currentLang}
      onValueChange={handleLangPick}
      aria-label="Language selection"
    >
      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value="cn"
        aria-label="CN"
      >
        <span role="img" aria-label="Chinese flag" className="data-[state=on]:scale-110">🇨🇳</span>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value="jp"
        aria-label="JP"
      >
        <span role="img" aria-label="Japanese flag" className="data-[state=on]:scale-110">🇯🇵</span>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value="en"
        aria-label="EN"
      >
        <span role="img" aria-label="US flag" className="data-[state=on]:scale-110">🇺🇸</span>
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};

export default LanguagePicker;
