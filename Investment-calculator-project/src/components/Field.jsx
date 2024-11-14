export default function Field({children,onNewInput,identifier,...props}){

    return(
            <p>
                <label>{children}</label>
                <input {...props} onChange={(event)=>onNewInput(identifier,event.target.value)} />
            </p>
    );
}