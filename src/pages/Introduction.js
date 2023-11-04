import ArticleLayout from "./ArticleLayout";
import intro1 from "../assets/intro/intro1.png" ;
import intro2 from "../assets/intro/intro2.png" ;
import intro3 from "../assets/intro/intro3.png" ;
import intro4 from "../assets/intro/intro4.png" ;


const Introduction = () => {
    return (
        <ArticleLayout>
            <div className="article">
                <h2 className="article-header">Podstawowe pojęcia</h2>
                <p className="article-introduction">
                    W tej sekcji przedstawię podstawowe pojęcia związane z zagadnieniem grafów oraz algorytmów na nich operujących, natomiast w kolejnych przyjrzymy się dokładniej działaniu każdego z algorytmów zastosowanych w wizualizatorze.
                </p>
                <h3 className="article-section">Grafy</h3>
                <p className="article-step">
                    Graf to zbiór wierzchołków oraz zbiór krawędzi je łączących. Za pomocą grafów można modelować wiele relacji występujących w otaczającym nas świecie. Przykładowo w przypadku sieci społecznościowych wierzchołki grafu mogą reprezentować użytkowników, natomiast krawędzie relacje ich łączące. Relacje te mogą być obupólne, jak relacja znajomości na Facebooku,  lub jednostronne, jak relacja obserwowania na Instagramie, gdzie dany użytkownik może obserować innego użytkownika, niekoniecznie będąc przez niego obserwowanym.                     
                </p>
                <p className="article-step">
                    Za pomocą grafu można przedstawiać również bardziej abstrakcyjne problemy, na przykład wierzchołki grafu mogą reprezentować wszystkie możliwe stany łamigłówki logicznej, a krawędzie przejścia między nimi, czyli ruchy.  Stosując algorytmy znajdowania najkrótszej ścieżki na takim grafie możemy znaleźć ścieżkę od stanu początkowego do stanu końcowego łamigłówki(w którym jest ona rozwiązana) używając najmniejszej możliwej ilości ruchów.                    
                </p>
                <h3 className="article-section">Grafy skierowane oraz grafy nieskierowane</h3>
                <p className="article-step">
                    Grafy skierowane to grafy, których krawędzie mają określony kierunek, grafy nieskierowane natomiast go nie posiadają. We wspomnianym wcześniej przykładzie grafów reprezentujących relacje między użytkownikami mediów społecznościowych, relacje obserwowania się użytkowników Instagrama moglibyśmy przedstawić za pomocą grafu skierowanego, natomiast relacje znajomości na Facebooku przy pomocy grafu nieskierowanego.                    
                </p>
                <img className="article-img" src={intro1} alt="directed vs undirected graphs"></img>
                <h3 className="article-section">Grafy ważone oraz grafy nieważone</h3>
                <p className="article-step">
                    Grafy ważone to grafy, w których każda z krawędzi ma przydzieloną określoną wartość, czyli wagę. Znaczenie wagi może być dowolne w zależności od problemu, który próbujemy rozwiązać. Przykładowo dla grafu w którym wierzchołki oznaczałyby miasta, a krawędzie drogie je łączące waga mogłaby oznaczać długość tej drogi w kilometrach lub czas potrzebny do jej przejechania w minutach.                     
                </p>
                <img className="article-img" src={intro2} alt="weighted vs unweighted graphs"></img>
                <h3 className="article-section">Ścieżka</h3>
                <p className="article-step">
                    Ścieżka w grafie to sekwencja kolejnych wierzchołków. Ścieżkę w której żaden z wierzchołków nie powtarza się nazywamy ścieżką prostą.                    
                </p>
                <h3 className="article-section">Najkrótsza ścieżka</h3>
                <p className="article-step">
                    Dla grafu nieważonego najkrótsza ścieżka między wybranymi wierzchołkami oznacza ścieżkę w której ilość pokonanych krawędzi między wierzchołkami jest najmniejsza. W grafie ważonym natomiast najkrótsza ścieżka to taka, dla której suma wag krawędzi jest najmniejsza.
                </p>
                <h3 className="article-section">Cykl</h3>
                <p className="article-step">
                    Cykl jest to ścieżka, która zaczyna się i kończy na tym samym wierzchołku, z tym że żaden z wierzchołków poza wierzchołkiem startowym i wierzchołkiem końcowym nie mogą się powtarzać. Cykl musi składać się z minimum trzech wierzchołków.                    
                </p>
                <h3 className="article-section">Grafy cykliczne oraz grafy acykliczne</h3>
                <p className="article-step">
                    Graf cykliczny to graf zawierający cykl. Na przedstawionym obrazku występuje cykl składający się z wierzchołków A, E, C, A. Cykle w grafie możemy znaleźć używając algorytmu DFS, który został opisany w jednym z artykułów.
                </p>
                <img className="article-img" src={intro3} alt="cyclic vs acyclic graphs"></img>
                <h3 className="article-section">Grafy spójne oraz grafy niespójne</h3>
                <p className="article-step">
                    Graf spójny to graf w którym każdy wierzchołek jest osiągalny z każdego z pozostałych wierzchołków grafu, czyli między każdą możliwą para wierzchołków takiego grafu musi występować jakaś ścieżka je łącząca. W grafie niespójnym natomiast mogą występować „wyspy”, czyli grupy wierzchołków odłączonych od reszty lub pojedyncze odłączone wierzchołki.
                    Do sprawdzenia czy graf jest spójny można użyć opisanych w kolejnych sekcjach algorytmów BFS oraz DFS.                    
                    
                </p>
                <img className="article-img" src={intro4} alt="connected vs unconnected graphs"></img>


            </div>
        </ArticleLayout>
    )
}

export default Introduction;