


function Entry(props){
    return <div>
        {`${props.name} (${props.age} years old)`}
    </div>
}


export default function(props){
    return <div>
        {props.entries.map(e=><Entry name={e.name} age={e.age}/>)}
    </div>
}