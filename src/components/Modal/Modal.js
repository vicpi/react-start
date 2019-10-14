import React from 'react'

const Modal = () => {
    return <div className="modal fade" id="modal-delete-todo" tabIndex="-1" role="dialog" aria-labelledby="modalDeleteTodo" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    Do you really want to delete this todo item?
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                    <button id="modal-delete-button" type="button" className="btn btn-primary">Yes</button>
                </div>
            </div>
        </div>
    </div>
}

export default Modal