import AddProductForm from "./AddProductForm";

export default function Modal() {
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
                className="btn"
                onClick={() =>
                    document?.getElementById("my_modal_1").showModal()
                }>
                open modal
            </button>
            <dialog id="my_modal_1" className="modal">
                <div className="">
                    <div className="modal-action">
                        <AddProductForm />
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}
