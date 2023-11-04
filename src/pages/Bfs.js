import bfs1 from "../assets/bfs/bfs1.png" ;
import bfs2 from "../assets/bfs/bfs2.png" ;
import bfs3 from "../assets/bfs/bfs3.png" ;
import bfs4 from "../assets/bfs/bfs4.png" ;
import bfs5 from "../assets/bfs/bfs5.png" ;
import bfs6 from "../assets/bfs/bfs6.png" ;
import bfs7 from "../assets/bfs/bfs7.png" ;
import ArticleLayout from "./ArticleLayout";


const Bfs = () => {
    return (
        <ArticleLayout>
            <div className="article">
                <h2 className="article-header">Algorytm Breadth First Search(BFS)</h2>
                <p className="article-introduction">
                    Algorytm BFS jest to algorytm przeszukujący graf na szerokość. Z jego pomocą możliwe jest również znalezienie najkrótszej ścieżki w grafie nieważonym. BFS opiera swoje działanie na strukturze danych kolejki działającej na zasadzie FIFO(First-In, First-Out), co oznacza że pierwszy element, który dodamy do takiej kolejki, również opuści ją jako pierwszy.                    
                </p>
                <img className="article-img" src={bfs1} alt="bfs step 1"></img>
                <p className="article-step">
                    Na początku dodajemy wierzchołek startowy A do kolejki. Każdy z pozostałych wierzchołków jest jeszcze na ten moment nieodkryty, czyli nie ma ich w kolejce. Nadajemy również wierzchołkom wartość p oznaczająca wierzchołek-rodzica, czyli wierzchołek przez który dany wierzchołek został odkryty. Wartość ta będzie nam później potrzebna przy ustalaniu najkrótszej ścieżki do danego wierzchołka.                
                </p>
                <img className="article-img" src={bfs2} alt="bfs step 2"></img>
                <p className="article-step">
                    Wybieramy pierwszy wierzchołek znajdujący się w kolejce i ściągamy go z kolejki, w tym wypadku jest to oczywiście wierzchołek startowy A. 
                </p>
                <p className="article-step">
                    Następnie dodajemy do kolejki wszystkie wierzchołki sąsiadujące z wierzchołkiem, który właśnie usunęliśmy z kolejki, pod warunkiem że nie znajdują się one już w kolejce lub na liście wierzchołków przetworzonych.  Dla każdego z tych zakolejkowanych wierzchołków ustawiamy obecnie przetwarzany wierzchołek A jako wierzchołek-rodzica. Jako że dany wierzchołek możemy dodać do kolejki tylko raz wartość p nie ulegnie już zmianom.                
                </p>
                <p className="article-step">
                    Po wykonaniu tych kroków dodajemy obecnie przetwarzany wierzchołek A do listy przetworzonych wierzchołków.                
                </p>
                <img className="article-img" src={bfs3} alt="bfs step 3"></img>
                <p className="article-step">
                    Kolejny raz wybieramy pierwszy wierzchołek z listy, tym razem jest to wierzchołek B. Dodajemy jego niezakolejkowanych i nieprzetworzonych sąsiadów do kolejki. W tym wypadku jedyny wierzchołek sąsiadujący z B, który spełnia te warunki to E. Dodajemy więc E do kolejki, ustawiamy B jako jego rodzica, a następnie dodajemy B do listy wierzchołków przetworzonych.                
                </p>
                <p className="article-step">
                    W kolejnych krokach powtarzamy te czynności dopóki kolejka nie będzie pusta.                
                </p>
                <img className="article-img" src={bfs4} alt="bfs step 4"></img>
                <img className="article-img" src={bfs5} alt="bfs step 5"></img>
                <img className="article-img" src={bfs6} alt="bfs step 6"></img>
                <img className="article-img" src={bfs7} alt="bfs step 7"></img>
                <p className="article-step">
                    W momencie kiedy kolejka jest pusta kończymy działanie algorytmu. Dzięki zapisywaniu wartości p przy dodawaniu kolejnych wierzchołków do kolejki jesteśmy teraz w stanie odtworzyć najkrótszą ścieżkę z wierzchołku startowego do każdego z pozostałych wierzchołków grafu.                 
                </p>
                <p className="article-step">
                    Przykładowo aby uzyskać najkrótszą ścieżkę z A do E, sprawdzamy rodzica E, którym jest B, a następnie rodzica B, którym jest A. w ten sposób uzyskujemy ścieżkę A - B - E.                
                </p>
            </div>
        </ArticleLayout>
    )
}

export default Bfs;