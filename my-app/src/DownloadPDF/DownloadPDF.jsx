import {useState} from "react";
import {jsPDF} from "jspdf";

const DownloadPDF = () =>{
    const [books, setBooks] = useState([]);
    const fetchBooks = async() =>{
        try{
            const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=react");
            const data = await response.json();
            setBooks(data.items)
        }
        catch(err){
            console.error("Error the FETCHING BOOKS", err)
        }
    }
    const downloadPDF = () =>{
        const doc = new jsPDF();
        const booksPerPage = 8;

        books.forEach((book, index) => {
            if(index > 0 && index % booksPerPage === 0){
                doc.addPage();
            }
            const title = book.volumeInfo.title || "No Title";
            const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "No Authors";

            const y = 20 + (index % booksPerPage) * 30;
          
            doc.text(`Book- ${index + 1}`, 10 , y);
            doc.text(`Title: ${title}`, 10 , y + 5);
            doc.text(`Authors: ${authors}`, 10 , y + 10);
        })
       doc.save("Book.pdf")
    }


    // useEffect(() => {
    //     fetchBooks();
    // }, [])
    return(
        <>
            <h1> Download API Data as PDF</h1>
            <button onClick={fetchBooks}> Fetch Books </button>
            <button onClick={downloadPDF}>Download PDF</button>
            <ul>
            {
                books.map((book, index) =>(
                    <li key={book.id}>
                        <h3>Book {index + 1}</h3>
                        <p><strong>Title :</strong> {book.volumeInfo.title}</p>
                        <p><strong>Authors :</strong> {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "No Authors"}</p>
                        {/* <p>{book.volumeInfo.description}</p> */}
                    </li>
                ))
            }
            </ul>
        </>
    )
}
export default DownloadPDF