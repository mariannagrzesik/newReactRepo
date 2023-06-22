import './Main.scss'
import {Article} from '../Article';
import { Title } from '../Title';
import { StringMappingType } from 'typescript';

type MainProps = {
    title: string;
    article: string;
}

export const Main = ({title, article}: MainProps)=>{
    return (
        <main>
				<Title title={title}/>
                <Article article={article}/>
		</main>
    );
}