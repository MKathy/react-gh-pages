import Article from "../components/Article";
const articles = [
    {id:1, title: "Czym jest teoria strun?", author: "Anna Kowalska", text: "111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorem sapiente soluta."},
    {id:2, title: "Czym jest paradoks Fermiego?", author: "Jonna Nowak", text: "222 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorem sapiente soluta."},
    {id:3, title: "Ciemna materia i energia?", author: "Alicja Zegar", text: "333 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorem sapiente soluta."},
]

const HomerPage = () => {

    const articlesList = articles.map(article =>(
        <Article key={articles.id} {...article}></Article>
    ))
    return (  
        <>
            {articlesList}
        </> 
    );
}
 
export default HomerPage;