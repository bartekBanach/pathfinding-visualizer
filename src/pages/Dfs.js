import dfs1 from "../assets/dfs/dfs1.png" ;
import dfs2 from "../assets/dfs/dfs2.png" ;
import dfs3 from "../assets/dfs/dfs3.png" ;
import dfs4 from "../assets/dfs/dfs4.png" ;
import dfs5 from "../assets/dfs/dfs5.png" ;
import dfs6 from "../assets/dfs/dfs6.png" ;
import dfs7 from "../assets/dfs/dfs7.png" ;
import dfs8 from "../assets/dfs/dfs8.png" ;
import dfs9 from "../assets/dfs/dfs9.png" ;



import ArticleLayout from "./ArticleLayout";


const Dfs = () => {
    return (
        <ArticleLayout>
            <div className="article">
                <h2 className="article-header">Algorytm Depth First Search(DFS)</h2>
                <p className="article-introduction">
                    Algorytm DFS służy przeszukiwaniu grafu na głębokość. W odróżnieniu od BFS oraz pozostałych przedstawionych algorytmów nie nadaje się on do znajdowania najkrótszej ścieżki  w grafie. W prawdzie przy pomocy DFS możliwe jest znalezienie ścieżki między dwoma wierzchołkami, jednak nie ma gwarancji że będzie ona najkrótszą możliwą. Mimo to algorytm ten jest niezwykle ważny, używa się go między innymi do znajdowania cykli w grafach czy sortowania topologicznego.                     
                </p>
                <p className="article-step">
                    W algorytmie DFS używamy stosu, czyli struktury danych działającej na zasadzie Last-in, First-out out(w skrócie LIFO), co oznacza że ostatni element umieszczony na stosie, opuści go pierwszy. Powoduje to zmianę sposobu w jaki algorytm ten eksploruje grafy. Podczas gdy BFS eksploruje graf stopniowo, poziom po poziomie(na szerokość), DFS eksploruje daną ścieżkę do momentu wyczerpania dalszej możliwości ruchu, a gdy to nastąpi wraca do poprzedniego wierzchołka i eksploruje kolejną scieżkę. DFS poza implementacją używającą struktury danych stosu posiada również implementację wykorzystującą rekurencję, jednak w tym artykule skupię się na przedstawieniu implementacji z użyciem stosu, zwanej też iteratywną.                    
                </p>
                <p className="article-step">
                    Na początku inicjujemy stos i umieszczamy na nim wierzchołek startowy(w tym wypadku A).                    
                </p>
                <img className="article-img" src={dfs1} alt="dfs step 1"></img>
                <p className="article-step">
                    Ściągamy ze stosu pierwszy wierzchołek z góry i ustawiamy go jako obecnie przetwarzany. Jeśli nie znajduje się on w zbiorze wierzchołków odwiedzonych, dodajemy go do tego zbioru, a następnie dodajemy wszystkich jego sąsiadów na górę stosu. W tym wypadku są to B i C. Na tym kończymy przetwarzanie wierzchołka. 
                </p>
                <img className="article-img" src={dfs2} alt="dfs step 2"></img>
                <p className="article-step">
                    Teraz ściągamy ze stosu wierzchołek B, i jako że nie znajduje się on w zbiorze wierzchołków odwiedzonych, dodajemy WSZYSTKICH jego sąsiadów na górę stosu. Ponieważ dodając kolejne wierzchołki na stos nie sprawdzamy czy znajdują się już one na stosie, ani czy znajdują się w zbiorze wierzchołków odwiedzonych, powoduje to że na stosie mogą pojawić się wierzchołki już odwiedzone oraz powtórzone wierzchołki. Nie ma to jednak znaczenia, ponieważ po ściągnięciu wierzchołka ze stosu najpierw sprawdzamy czy nie został już on odwiedzony.                    
                </p>
                <img className="article-img" src={dfs3} alt="dfs step 3"></img>
                <p className="article-step">
                    Podczas tej iteracji ściągnęliśmy ze stosu odwiedzony wcześniej wierzchołek A, więc od razu kończymy przetwarzanie tego wierzchołka, bez dodawania jego sąsiadów na stos.                    
                </p>
                <img className="article-img" src={dfs4} alt="dfs step 4"></img>
                <p className="article-step">
                    Tym razem ściągnęliśmy wierzchołek E, który nie znajduje się na liście wierzchołków odwiedzonych, tak więc standardowo dodajemy go do wierzchołków odwiedzonych i dodajemy jego sąsiadów na stos.                    
                </p>
                <p className="article-step">
                    Powtarzamy kroki algorytmu dopóki stos nie będzie pusty.                    
                </p>
                <img className="article-img" src={dfs5} alt="dfs step 5"></img>
                <img className="article-img" src={dfs6} alt="dfs step 6"></img>
                <img className="article-img" src={dfs7} alt="dfs step 7"></img>
                <img className="article-img" src={dfs8} alt="dfs step 8"></img>
                <p className="article-step">
                    W tej iteracji odwiedziliśmy ostatni wierzchołek grafu D. Mimo to algorytm przed zakończeniem działania wykona jeszcze kilka iteracji ponieważ stos nie jest pusty.                    
                </p>
                <img className="article-img" src={dfs9} alt="dfs step 9"></img>


            </div>
        </ArticleLayout>




    )
}

export default Dfs;