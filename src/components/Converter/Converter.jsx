import { useState } from 'react';
import './Converter.css';
import Label from './RgbWidget/RgbWidget';

export default function Converter() {
    const [rgb, setRGB] = useState({
        codeRGB: '',
        color: '',
        show: false
    });
    function hexToRgb(hex) {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }    

    const onChangeHandle = (e) => {
        if(e.target.value.length >= 7)
        {
            if(!e.target.value.startsWith('#') || hexToRgb(e.target.value)===null)
            {
                setRGB(prevRGB => ({...prevRGB, codeRGB: 'Ошибка!', color: 'rgb(220,20,5)', show: true }));
            }
            else 
            {
                let o = hexToRgb(e.target.value);
                let res = `rgb(${o.r},${o.g},${o.b})`;
                setRGB(prevRGB => ({...prevRGB, codeRGB: res, color: res, show: true }));
            }
        }
        else 
        {
            setRGB(prevRGB => ({...prevRGB, codeRGB: '', color: '', show: false }));
        }

    }

    const onSubmitHandle = (e) => {
        e.preventDefault();
    }

    return(
        <div className="Main" style={{backgroundColor: rgb.color}}>
            <div className="Form-Block">
            <form className="Form" onSubmit={onSubmitHandle} >
                <input className="Input" onChange={onChangeHandle}></input>
                <Label show={rgb.show} codeRGB={rgb.codeRGB} />
            </form>
            </div>
        </div>
    )
}