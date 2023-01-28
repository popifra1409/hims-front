
const AddressEtContact = () => {
    return (
        <>
            <div className="row m-3 p-2">
                <label className="col-2" for="name">Name </label>
                <input className="col-10 w-full" type="text" name="name" />
            </div>
            <div className="row m-3 p-2">
                <label className="col-2" for="name">Prenom</label>
                <input className="col-10" type="text" name="surname" />
            </div>
            <div className="row m-3 p-2">
                <div className="col-md-6">
                    <div className="row">
                        <label className="col-4" for="name">Né(e) le</label>
                        <input className="col-6 " type="date" name="name" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <label className="col-2" for="name">A </label>
                        <input className="col-10" type="text" name="name" />
                    </div>
                </div>

            </div>
            <div className="row m-3 p-2">
                <label className="col-2" for="sex">Sexe</label>
                <div className="col-10 d-flex ">
                    <div className="col-6">
                        <div className="row">
                            <input className="col-2" type="radio" name="gender" />
                            <label className="col-2" for="male">Masculin</label>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <input className="col-2" type="radio" name="gender" />
                            <label className="col-2" for="female">Feminin</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddressEtContact
