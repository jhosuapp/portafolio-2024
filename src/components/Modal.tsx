import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
//Redux
import { resetErrorMessage } from "@/store/slices/Auth";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Dispatch } from "@reduxjs/toolkit";
//Components
import { Button } from "./Button";
//Audio
import soundPopupOn from '/assets/audio/pop-up-on.mp3';
import soundPopupOff from '/assets/audio/pop-up-off.mp3';


type Props = {
    errorMessage: string | null
}

const Modal = ({ errorMessage }:Props):JSX.Element => {
    const { status } = useAppSelector(state => state.sound);
    const dispatch:Dispatch<any> = useAppDispatch();
    const [showModal, setShowModal] = useState<boolean>(false);
    //Modal sound
    useEffect(()=>{
        status && new Audio(showModal ? soundPopupOn : soundPopupOff).play();
    },[showModal]);
    //Render modal
    useEffect(()=>{
        errorMessage && setShowModal(true);
    },[errorMessage]);
    //Handle close modal
    const handleCloseModal = () => {
        dispatch(resetErrorMessage());
        setShowModal(false);
    }
    //Validate if portal exists
    const portalRoot = document.getElementById('portal-modal');
    if (!portalRoot) return <></>;

    return ReactDOM.createPortal(
        <section className={`modal ${showModal && 'active'}`}>
            <article className="modal__bg"></article>
            <article className="modal__content">
                <p>{ errorMessage }</p>
                <Button
                    Text="Continue"
                    HoverText={`Close`}
                    className="btn btn--primary h-text"
                    onClick={ handleCloseModal }
                ></Button>
            </article>
        </section>,
        portalRoot
    )
}

export { Modal }