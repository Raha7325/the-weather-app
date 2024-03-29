import { React } from "react";
import '../styles/form.css'

const Form =props => {
    return(
        <div className="container">
            <div>{props.error ? error() : null }</div>
           <form onSubmit={props.loadweather}>
           <div className="row">
                <div className="col-md-3 offset-md-2">
                    <input type="text" className="form-control"name="city" autoComplete="off" placeholder="City"/>
                </div>
                <div className="col-md-3">
                <input type="text" className="form-control"name="country" autoComplete="off" placeholder="Country"/>
                </div>
                <div className="col-sm-12 col-md-3  mt-md-0 text-md-left py-2">
                    <button className="btn btn-primary">Get Weather</button>
                </div>
            </div>
           </form>
        </div>
    )
}
const error = () => {
    return(
        <div className="alert alert-danger" role="alert">
            Please Enter City and Country
        </div>
    )
}
export default Form;