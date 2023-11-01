import "../styles/components/modal.scss"

type Props = {
  children: React.ReactNode
}

const Modal = ({children}: Props) => {

    const closeModal = ( e : React.MouseEvent): void => {
      const modal = document.querySelector('#modal')
      modal!.classList.add("hide");
    }

    return <div id="modal" className="hide">
        <div id="fade"  onClick={closeModal}></div>
        <div id="modal-text" >
            <h2>Texto modal</h2>
             {children}
        </div>

    </div>
}

export default Modal