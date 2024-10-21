import React, { useContext } from 'react';
import { LanguageContext } from '../../api/LanguageProvider';

const LanguageToggleButton = () => {
   const { toggleLanguage } = useContext(LanguageContext);

   return (
       <button onClick={toggleLanguage}>
           Cambiar Idioma
       </button>
   );
};

export default LanguageToggleButton;
