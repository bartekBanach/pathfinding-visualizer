import "./Modal.css";
import { useRef, useEffect, useState } from "react";

const Modal = ({showModal, setShowModal}) => {

    const modal = useRef();


    useEffect(() => {
        if (showModal) {
         modal.current.showModal();
        }
    }, [showModal])

    const closeModal = (e) => {    
        modal.current.close();
        setShowModal(false);
    }

    const openModal = () => {
        modal.current.showModal();
    }

    return (
        <dialog className="modal lost-modal" ref={modal}>
            <p className="modal-main-header">Instrukcja</p>
            <p className="modal-introduction">
                        Witaj!
            Aplikacja służy wizualizowaniu algorytmów znajdujących ściezkę.
            Z głównego menu możesz wybrać który algorytm chcesz zwizualizować i uruchomić jego wizualizację. Na czas odgrywania wizualizacji interfejs zostaje zablokowany.                       
            </p>
            <p className="modal-header">Menu boczne:</p>
            <p className="modal-text">
                Z pomocą bocznego menu możesz modyfikować planszę. Po wybraniu opcji i kliknięciu w  wybrany kwadrat planszy zmienisz typ pola, zależnie od wybranej opcji. 
            </p>
            <p className="modal-text">
                <b className="modal-b">Ściany</b>, to pola które nie mogą zostać odwiedzone przez algorytm i stanowią przeszkody. Wybierając tę opcje możesz klikać w plansze i przeciągać zamieniając wiele pól na raz w ściany.                
            </p>
            <p className="modal-text">
                <b className="modal-b">Pola startowe i końcowe</b> to pola między którymi algorytm wyszukuje ścieżkę.                
            </p>
            <p className="modal-text">
                <b className="modal-b">Wagi</b> są brane pod uwage tylko przez algorytm A* oraz algorytm Dijkstry. Sprawiają one, że przejście przez pole ma wyższy koszt, więc algorytm będzie starał się je omijać. Im wyższa waga, tym ciemniejszy kolor pola.

            </p>
            <p className="modal-header">Pozostałe opcje:</p>
            <p className="modal-text">
                <b className="modal-b">Funkcja losowego labiryntu</b> generuje na planszy losowy labirynt z pól-ścian.                
            </p>
            <p className="modal-text">
                <b className="modal-b">Funckja losowych wag przydziela</b> przydziela losową wagę dla każdego pola planszy.                
            </p>
            <p className="modal-text">
                <b className="modal-b">Funckja wyczyść</b> czyści plansze ze wszystkich zmodyfikowanych pól.                
            </p>

            <button className='modal-btn' onClick={closeModal}>Zamknij</button>
        </dialog>    
    )


};

export default Modal;