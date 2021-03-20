import './RgbWidget.css';

export default function RgbWidget(props) {
    const { show, codeRGB } = props;

    if(!show) return null;
    else {
        return(
        <div className="RGB-code">
        {codeRGB}
        </div>)
    }
}