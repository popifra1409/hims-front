
const PriseEnCharge = () => {
  return (
    <>
      <div className="row m-3 p-2">
        <label className="col-3" for="name">Tiers-payant </label>
        <select className="col-9 w-full" type="text" name="tiersPayant">
          <option value=""></option>
          <option value="payant1">payant1</option>
          <option value="payant2">payant2</option>
        </select>
      </div>
      <div className="row m-3 p-1">
        <div className="col-md-6">
          <div className="row">
            <label className="col-6" for="name">TM%</label>
            <select className="col-6" type="text" name="TM">
              <option value=""></option>
              <option value="TM1">TM1</option>
              <option value="TM2">TM2</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <label className="col-5" for="name">Matricule patient </label>
            <input className="col-7" type="text" name="matriculePatient" />     
          </div>
        </div>
      </div>
      <div className="row ">
        <label className="col-3 " for="name">Contrat Patient </label>
        <input className="col-8 ms-3" type="number" name="contratPatient" />
      </div>
      <div className="row m-4">
        <label className="col-5" for="name">Prise en charge perso</label>
        <input className="col-1 " type="checkbox" name="PriseEnchargePerso" />
      </div>
      <div className="col-md-6">
          <div className="row">
            <label className="col-6" for="name">Société</label>
            <select className="col-5 ms-3" type="text" name="company">
              <option value=""></option>
              <option value="TM1">TM1</option>
              <option value="TM2">TM2</option>
            </select>
          </div>
        </div>
    </>
  )
}

export default PriseEnCharge
