import { useState } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

const PhoneSubSegment = () => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = text => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      // Если буфер обмена не поддерживается, можно использовать другой способ.
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 6000);
  };

  const handleOnParagraphClick = event => {
    const spanElement = event.target
      .closest('.contact__phone')
      .querySelector('.contact__phone-number');

    const textToCopy = spanElement.textContent;
    copyToClipboard(textToCopy);
  };
  return (
    <li className="contact__segments-item">
      <p>На всі ваші запитання дадуть відповідь адміністратори</p>
      <p onClick={handleOnParagraphClick} className="contact__phone">
        <span className="contact__phone-icon">
          <BsFillTelephoneFill />
        </span>
        <span className="contact__phone-number">093-080-6375</span>
      </p>
      <p onClick={handleOnParagraphClick} className="contact__phone">
        <span className="contact__phone-icon">
          <BsFillTelephoneFill />
        </span>
        <span className="contact__phone-number">099-036-7386</span>
      </p>
      <p>codespark.course@gmail.com</p>

      <AnimatePresence>
        {isCopied && (
          <motion.span
            className="copied-status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // onClick={setIsCopied(false)}
          >
            Номер скопійовано🎉
          </motion.span>
        )}
      </AnimatePresence>
    </li>
  );
};

export default PhoneSubSegment;
