import astar1 from "../assets/astar/astar1.png" ;
import astar2 from "../assets/astar/astar2.png" ;
import astar3 from "../assets/astar/astar3.png" ;
import astar4 from "../assets/astar/astar4.png" ;
import astar5 from "../assets/astar/astar5.png" ;
import ArticleLayout from "./ArticleLayout.js";


const Astar = () => {
    return (
        <ArticleLayout>
            <div className="article">
                <h2 className="article-header">Algorytm A*</h2>
                <p className="article-introduction">
                    Algorytm A* znajduje najkrótszą ścieżkę między dwoma wybranymi wierzchołkami grafu. Działa bardzo podobnie do algorytmu Dijkstry, z tym że przy wyborze kolejnych odwiedzanych wierzchołków poza dystansem danego wierzchołka do wierzchołka startowego bierze również pod uwagę dystans dzielący wierzchołek od wierzchołka końcowego. Dzięki temu algorytm omija wierzchołki które na pewno nie zbliżą go do celu.                    
                </p>
                <p className="article-step">
                    Załóżmy że wierzchołek startowy to A, a wierzchołek końcowy to E. Na początku podobnie jak w przypadku algorytmu Dijkstry przyznajemy wierzchołkowi startowemu wartość g równą 0, natomiast pozostałym wierzchołkom grafu wartość g równą nieskończoność. Wartość f dla każdego wierzchołka jest równa wartości g + wartości h, będącej wynikiem funkcji heurystycznej dla danego wierzchołka.                    
                </p>
                <img className="article-img" src={astar1} alt="astar step 1"></img>
                <p className="article-step">
                    Wybieramy z kolejki ten wierzchołek, którego wartość f jest najmniejsza i ustawiamy go jako obecnie przetwarzany wierzchołek. W tym wypadku jest to oczywiście wierzchołek startowy A. 
                    Dodajemy obecnie przetwarzany wierzchołek do zbioru wierzchołków odwiedzonych.
                </p>
                <p className="article-step">
                    Następnie dla wszystkich wierzchołków sąsiadujących z obecnie przetwarzanym obliczamy wartość nowego potencjalnego dystansu g: do wartości g obecnie przetwarzanego wierzchołka dodajemy wagę krawędzi łączącej go z danym sąsiadem. Jeżeli suma ta jest mniejsza od obecnej wartości g sąsiada, aktualizujemy wartości g oraz f tego sąsiada oraz ustawiamy obecnie przetwarzany wierzchołek jako jego rodzica. 
                </p>
                <p className="article-step">
                    Wierzchołek A ma dwóch sąsiadów: B i C. Dla obu wartość g wierzchołka A + wartość krawędzi łączącej je z A jest mniejsza niż ich obecna wartość g, która wynosi nieskończoność. W związku z tym aktualizujemy ich wartości g oraz f i ustawiamy A jako ich rodzica.                    
                </p>
                <img className="article-img" src={astar2} alt="astar step 2"></img>
                <p className="article-step">
                    Powtarzamy kroki algorytmu dla kolejnych wierzchołków dopóki nie trafimy na wierzchołek końcowy.                   
                </p>
                <img className="article-img" src={astar3} alt="astar step 3"></img>
                <p className="article-step">
                Warto zwrócić uwagę na to jak działanie algorytmu A* różni się od algorytmu Dijkstry. Po iteracji poniżej  w kolejce znajdują się dwa wierzchołki: D i E. Wartość g wierzchołka D wynosi 12, tak więc jest mniejsza od wartości g wierzchołka E, co oznacza że używając algorytmu Dijkstry odwiedzilibyśmy następnie wierzchołek D. Jednak w związku z uwzględnieniem również wartości funkcji heurystycznej, ostateczna wartość f score będzie mniejsza dla E. Dzięki temu unikniemy niepotrzebnego odwiedzenia wierzchołka D, który nie przybliża nas do celu.

                </p>
                <img className="article-img" src={astar4} alt="astar step 4"></img>
                <p className="article-step">
                W chwili kiedy wierzchołek który właśnie ściągnęliśmy z kolejki jest wierzchołkiem końcowym, kończymy działanie algorytmu. Możemy teraz odtworzyć najkrótszą ścieżkę między A i E dzięki zapisywaniu wartości p. Tak więc najkrótsza ścieżka łącząca wierzchołki A i E w tym grafie to E, B,  C, A, a jej długość wynosi 21.
                </p>

                <img className="article-img" src={astar5} alt="astar step 5"></img>
            </div>
        </ArticleLayout>
    )
}

export default Astar;