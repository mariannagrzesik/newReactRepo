import {ChangeEvent, Component} from "react";

export type ProfileType = {
    _id?: string,
    username: string;
    tag: string;
    location: string;
    phone: string;
    avatar?: string;
    stats: string[];
    isCollapsed?: boolean;
};

export class Profile extends Component<{}, ProfileType>{
    constructor(props: ProfileType){
        super(props);
        //tu moge zdestrukturyzowac
            const {
                username,
                tag,
                location,
                phone,
                avatar,
                stats,
                isCollapsed
            }=props;

        this.state={
            username,
            tag,
            location,
            phone,
            avatar,
            stats,
            isCollapsed
        };
        this.handleOpen=this.handleOpen.bind(this);
    };

    handleOpen(){
        this.setState({
            isCollapsed: true,
        })
    };
    handleClose=()=>{
        this.setState({
            isCollapsed: false,
        })
    }

    toggleCollapse = () =>{
        this.setState(prev=>({
            isCollapsed: !prev.isCollapsed,
        }))
    }
    
    render(){
        const {username, tag, location, phone, avatar, stats, isCollapsed} = this.state;
        return(
            <div>
            
            <h2>{username}</h2>
            <button onClick={this.toggleCollapse}>{isCollapsed?'Zwiń':'Rozwin'}</button>
            <button onClick={this.handleClose}>Rozwin</button>
            {isCollapsed && (<div><p>{tag}</p>
            <p>{location}</p>
            <p>{phone}</p>
            {avatar ?<img src={avatar} alt="profile" />:<p>No Avatar</p> }
            {
                !!stats.length && (
                    <ul>
                        {stats.map((item, index)=>(
                        <li key={index}>{item}</li>
                        ))}
                    </ul>
            )
            }
            </div>)}
            
            </div>
        )
    }
}



// - Stwórz liste profili
// - lista profili (obiektów typu ProfileType) bedzie przechowywana w zmiennej profiles w pliku App.tsx
// - Profile type powinien zostac rozszerzony o wlasciwosc "_id: string"
// - wlasciwosc "_id" bedzie przekazywana do atrybutu key w metodzie map
// - Zakonczone zadanie - wyswietlana lista profili


// ## Do zadania 1 cz. 2
// • jezeli user nie posiada avatara, powinien wyswietlac domyslny
// komponent (avatar ? <img> : <span>No avatar</span>)
// • dopiero po rozwinieciu informacji o profilu znajomego pokazują
// nam sie wszystkie informacje (domyslnie pokazujemy tylko
// nazwe (isCollapsed: false)



// ### ZADANIE 1 19.06
// Profil w sieci społecznościowej
//   • Należy utworzyć komponent <Profile>, przy pomocy którego
//   można wyświetlać informację o użytkowniku sieci
//   społecznościowej. Informacje o użytkowniku znajdują się w stanie komponentu.
// Opis komponentu Profile
// - username — nazwa użytkownika
// - tag — tag w sieci społecznościowej @
// - location — miasto i państwo
// - phone - numer telefonu
// - avatar — odnośnik do awataru
// - stats — tablica(typ string[]) z informacjami o aktywności

