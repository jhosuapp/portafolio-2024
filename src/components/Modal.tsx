import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
//Redux
import { resetErrorMessage } from "@/store/slices/Auth";
import { useAppDispatch } from "@/hooks";
import { Dispatch } from "@reduxjs/toolkit";
//Components
import { Button } from "./Button";

type Props = {
    errorMessage: string | null
}

const Modal = ({ errorMessage }:Props):JSX.Element => {
    const dispatch:Dispatch<any> = useAppDispatch();

    const [showModal, setShowModal] = useState<boolean>(false);
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