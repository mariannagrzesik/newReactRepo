import { ChangeEvent, Component } from "react";

type FormProps={
    name: string,
    phone: string,
    changeName: (event: ChangeEvent<HTMLInputElement>)=>void,
    changePhone: (event: ChangeEvent<HTMLInputElement>)=>void
}
//formularz zazwyczaj ma swój własny stan, ale dla ćwiczenia przekazujemy go w propsach
export class ContactForm extends Component<FormProps,{}> {


    


render(){
    const {name, phone, changeName, changePhone } = this.props;
    return(
        <div>
            <form>
                <input type="text" placeholder="imię" value={name} onChange={changeName}/>
                <input type="text" placeholder="numer telefonu" value={phone} onChange={changePhone}/>
            </form>
            <span>Imię: {name}</span>
            <span>Numer telefonu: {phone}</span>
        </div> 
    )
        }
}