import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import MainSelect from "../../../shared/select/ui/MainSelecr";
import { getLanguagesList, setLanguage } from "../../../process/navbar/model/settingsSlice";
import { useTranslation } from "react-i18next";

function LanguageSelect() {
  const languages = useSelector(getLanguagesList)
  const dispatch = useDispatch();
  const { i18n  } = useTranslation();
  const {t} = useTranslation()
  const [state,setState] = useState(languages[0].id)
  const handleChange = (id) => {
    setState(id)
    const code = languages.find(item=>item.id==id).code
    dispatch(setLanguage(code));
    i18n.changeLanguage(code)
  };

  return (
    <div sx={{maxWidth:"120px"}} style={{maxWidth:"120px"}}>
      <MainSelect
        title={""}
        list={languages}
        defaultValue={state}
        handleChange={handleChange}
      />
    </div>
  );
}

export default LanguageSelect;