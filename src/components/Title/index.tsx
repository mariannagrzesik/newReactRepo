import './Title.scss'

type TitleProps={
    title: string;
}

export const Title = ({title}: TitleProps)=>{
    return (
        <h1 className="main-h1">Main title</h1>
    );
}