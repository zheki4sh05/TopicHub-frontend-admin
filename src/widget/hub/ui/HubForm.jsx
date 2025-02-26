import { useState } from "react";

function HubForm({item, handleSaveProp}) {
   
    const [ru,setRu] = useState(item.ru)
    const [en,setEn] = useState(item.en)

    const handleRuNameChange=(event)=>{
        setRu(event.target.value)
    }
    const handleEnNameChange=(event)=>{
        setEn(event.target.value)
    }

    const handleSave=()=>{
    
        handleSaveProp({
            id:item.id,
            ru:ru,
            en:en
        })
    }


    return ( 
        <div>
            <div style={{margintTop: "10px"}}>
            <label htmlFor="ru">Русский:</label>
            <input type="text" id="ru" name="ru" className="form-control" onChange={handleRuNameChange} value={ru}/>
        </div>

        <div style={{margintTop: "10px"}}>
            <label htmlFor="en">English:</label>
            <input type="text" id="en" name="en" className="form-control"  onChange={handleEnNameChange} value={en} />
        </div>
        <div>
            <button disabled={en.length==0 || ru.length==0 } className="btn btn-success mt-3" onClick={handleSave} >Сохранить</button>
        </div>
        </div>
     );
}

export default HubForm;