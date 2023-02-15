import InputForm from "./InputNewsForm"
import "./InputNews.css"

export default function(props){
 return <div className="inputNews">
    <InputForm updateContent={props.updateContent}/>
 </div>
}