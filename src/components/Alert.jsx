import { useState } from "react";

function AlertDismissibleExample(props) {
    const [alertState, setAlertState] = useState('')
    if (props.alert && props.alert.className === 'show') {
        // document.getElementById('alertHere').classList.add('show')
        setAlertState('show')
    }

    return (
            props.alert && <div className={`alert alert-warning alert-dismissible fade ${alertState}`} id="alertHere" role="alert">
                <strong>{props.alert.type}!</strong> {props.alert.msg}.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => {
                    // const alertElement = document.querySelector('.alert');
                    // alertElement.classList.remove('show');
                    setAlertState('hide')
                }}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
    )
}

export default AlertDismissibleExample;