import './Article.scss'

type ArticleProps={
    article: string;
  }
  
export const Article = ({article}: ArticleProps)=>{
    return (
        <article className="main-art">{article}</article>
    );
}