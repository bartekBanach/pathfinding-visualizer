import dijkstra1 from "../assets/dijkstra/dijkstra1.png" ;
import dijkstra2 from "../assets/dijkstra/dijkstra2.png" ;
import dijkstra3 from "../assets/dijkstra/dijkstra3.png" ;
import dijkstra4 from "../assets/dijkstra/dijkstra4.png" ;
import dijkstra5 from "../assets/dijkstra/dijkstra5.png" ;
import dijkstra6 from "../assets/dijkstra/dijkstra6.png" ;
import ArticleLayout from "./ArticleLayout";

const Dijkstra = () => {
    return (
        <ArticleLayout>
            <div className="article">
                <h2 className="article-header">Algorytm Dijkstry</h2>
                <p className="article-introduction">
                    Celem algorytmu Dijkstry jest znalezienie najkrótszych ścieżek z wybranego wierzchołka startowego, do wszystkich pozostałych wierzchołków grafu. Jeżeli jednak zależy nam tylko na znalezieniu najkrótszej ścieżki między dwoma wybranymi wierzchołkami, możemy zatrzymać algorytm po osiągnięciu po osiągnięciu wierzchołka docelowego. W przeciwieństwie do algorytmu BFS, algorytm Dijkstry przy znajdowaniu najkrótszych ścieżek uwzględnia wagi krawędzi, dlatego też  jest w stanie znaleźć najkrótszą ścieżkę również w grafie ważonym. W przypadku zastosowania algorytmu Dijkstry na grafie w którym wszystkie krawędzie maja takie same wagi, algorytm działa bardzo podobnie do algorytmu BFS.                    
                </p>
                <p className="article-step">
                    Algorytm Dijkstry używa struktury danych kolejki priorytetowej. Różni się ona od zwykłej kolejki tym, że przy operacji ściągania elementu z kolejki,  zamiast zwracać element, który został dodany jako pierwszy, zwraca ona element o najwyższej lub najniższej wartości priorytetu(zależnie od implementacji). W wypadku algorytmu Dijkstry tym priorytetem będzie wartość <i>g</i> wierzchołka, oznaczająca długość najkrótszej znanej ścieżki do danego wierzchołka z wierzchołka startowego.                    
                </p>
                <p className="article-step">
                    W pierwszym kroku algorytmu nadajemy wszystkim wierzchołkom grafu poza wierzchołkiem startowym wartość dystansu <i>g</i> równą nieskończoność, jako że na ten moment nie znamy żadnej ścieżki do tych wierzchołków z wierzchołka startowego. Wierzchołkowi startowemu nadajemy natomiast wartość <i>g</i> równą 0. Ustawiamy również wartość <i>p</i>wszystkich wierzchołków jako <i>null</i>. Wartość <i>p</i> wierzchołka oznacza jego wierzchołek-rodzica i zostanie użyta później do odtworzenia najkrótszej ścieżki.                    
                </p>
                <p className="article-step">
                    Dodajemy wszystkie wierzchołki do kolejki.            
                </p>
                <img className="article-img" src={dijkstra1} alt="dijkstra step 1"></img>
                <p className="article-step">
                    Wybieramy z kolejki wierzchołek z najmniejszą wartością <i>g</i> i ustawiamy go jako obecnie przetwarzany. Przy pierwszej iteracji algorytmu jest to oczywiście wierzchołek startowy A, jako że wartość g wszystkich pozostałych wierzchołków wynosi nieskończoność.
                </p>
                <p className="article-step">
                    Wybrany wierzchołek z najmniejszą wartością <i>g</i> odkładamy do zbioru wierzchołków odwiedzonych. Na ten moment znamy już najkrótszą ścieżkę do tego wierzchołka i nie będzie ona nigdy aktualizowana (tak więc najkrótsza możliwa ścieżka do wierzchołka startowego A wynosi oczywiście 0).                     
                </p>

                <p className="article-step">
                    Aktualizujemy wartości <i>g</i>, dla wszystkich wierzchołków sąsiadujących z przetwarzanym obecnie wierzchołkiem.
                    Wierzchołek A posiada dwa wierzchołki sąsiednie, B i C. Dla każdego z sąsiadów Sprawdzamy czy wartość <i>g</i> obecnie przetwarzanego wierzchołka  + wartość krawędzi łączącej go z sąsiadem jest mniejsza niż wartość <i>g</i> sąsiada. Jeśli tak, aktualizujemy wartość <i>g</i> sąsiada i ustawiamy obecnie przetwarzany wierzchołek jako jego rodzica(wartość <i>p</i>).                    
                            
                </p>
                <p className="article-step">
                    Tak więc dla sąsiada B: 0 + 19 {"<"} ∞ więc aktualizujemy jego <i>g</i> na 19 i ustawiamy wierzchołek A jako jego rodzica. Dla wierzchołka C: 0 + 7 {"<"} ∞ więc również aktualizujemy jego wartość <i>g</i> i ustawiamy A jako rodzica.                    
                    Po wykonaniu tego kroku kończymy przetwarzanie wierzchołka.
                </p>
                <img className="article-img" src={dijkstra2} alt="dijkstra step 2"></img>
                <p className="article-step">
                    Wierzchołek C ma aż czterech sąsiadów. Wierzchołek A pomijamy jako że znajduje się on już w zbiorze wierzchołków odwiedzonych. Dla pozostałych wierzchołków możemy zaktualizować wartość dystansu <i>g</i> .                    
                </p>  
                <p className="article-step">
                    Wierzchołek sąsiedni B posiada obecnie wartość <i>g</i> 19,  jednak wartość <i>g</i>  wierzchołka C plus waga krawędzi łączącej te wierzchołki wynosi 18, co oznacza że znaleźliśmy właśnie krótszą ścieżkę do B i możemy zaktualizować jego wartość <i>g</i>  oraz zmienić jego wierzchołek-rodzica na C. Aktualizujemy również wartość <i>g</i>  dla wierzchołków D i E, dla których wynosiła ona wcześniej nieskończoność.
                </p>   

                <img className="article-img" src={dijkstra3} alt="dijkstra step 3"></img>
                <p className="article-step">
                    W nastepnych krokach przetwarzamy kolejne wierzchołki z kolejki, dopóki nie będzie ona pusta.                    
                </p>
                <img className="article-img" src={dijkstra4} alt="dijkstra step 4"></img>
                <img className="article-img" src={dijkstra5} alt="dijkstra step 5"></img>
                <p className="article-step">
                    W chwili kiedy odwiedziliśmy wszystkie wierzchołki grafu i kolejka jest pusta algorytm kończy swoje działanie.                 
                </p>
                <p className="article-step">
                    W tym momencie znaleźliśmy najkrótszą ścieżkę z wierzchołka startowego A do każdego z pozostałych wierzchołków grafu. Ścieżkę możemy odtworzyć dzięki wartościom <i>p</i>, które zapisywaliśmy za każdym razem gdy znaleźliśmy krótszą ścieżkę do danego wierzchołka.                    
                </p>
                <p className="article-step">
                    Tak więc szukając przykładowo najkrótszej możliwej ścieżki z A do E sprawdzamy rodzica E, którym jest B, następnie rodzica B, czyli C, i tak dalej. W ten sposób uzyskujemy najkrótszą ścieżkę A, C, B, E.                    
                </p>
                <img className="article-img" src={dijkstra6} alt="dijkstra step 6"></img>
            </div>
        </ArticleLayout>
    )
}

export default Dijkstra;