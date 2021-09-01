import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min';

const AddTechModal = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname,setLastName] = useState('');

    const onSubmit = () => {
        if(firstname === '' || lastname === ''){
            M.toast({html:'Please enter a firstname and lastname'});
        }else{
            console.log(firstname,lastname);
        }
        setFirstName('');
        setLastName('');
    }

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstname" value={firstname} onChange={e => setFirstName(e.target.value)}/>
                        <label htmlFor="firstname" className="active">First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="lastname" value={lastname} onChange={e => setLastName(e.target.value)}/>
                        <label htmlFor="lastname" className="active">Last Name</label>
                    </div>
                </div>



            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">Enter</a>
            </div>
        </div>
    );
};

export default AddTechModal;