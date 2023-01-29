
const AddressEtContact = () => {
    return (
        <>
            <div className="row m-3 p-2">
                <label className="col-3" for="name">Adresse </label>
                <input className="col-9 w-full" type="text" name="address" />
            </div>
            <div className="row m-3 p-2">
                <label className="col-3" for="name">Personne à prevenir</label>
                <input className="col-9" type="text" name="personAprevenir" />
            </div>
            <div className="row m-3 p-2">
                <label className="col-3" for="name">Tél personne à prevenir</label>
                <input className="col-9" type="text" name="personAprevenir" />
            </div>
            <div className="row m-3 p-2">
                <label className="col-3" for="name">Quartier</label>
                <input className="col-9" type="tel" name="personAprevenir" />
            </div>
            <div className="row m-3 p-2">
                <div className="col-md-6">
                    <div className="row">
                        <label className="col-4" for="name">Ville</label>
                        <select className="col-8" type="text" name="ville">
                            <option value="douala">douala</option>
                            <option value="limbe">limbe</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <label className="col-4" for="name">Region </label>
                        <select className="col-8" type="text" name="region">
                            <option value="littoral">littoral</option>
                            <option value="west">west</option>
                        </select>
                    </div>
                </div>

            </div>
            <div className="row mx-3 px-2">
                <label className="col-3" for="name">Email</label>
                <input className="col-9" type="email" name="email" />
            </div>
        </>
    )
}

export default AddressEtContact
