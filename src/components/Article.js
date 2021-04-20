const Article = ({title, author, text}) => {

    const styles = {
        marginTop: 25,
        marginLeft: 12
    }
    return ( 
        <article style={styles}>
            <h3 style= {{textTransform: "uppercase"}}>{title}</h3>
            <span style={{fontSize: 12, display: "block", marginBottom: 8}}>{author}</span>
            <p>{text}</p>
        </article>
     );
}
 
export default Article;