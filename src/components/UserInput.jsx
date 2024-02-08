import PropTypes from 'prop-types';


function UserInput({onChange, userInput}) {
    
    UserInput.propTypes = {
        userInput: PropTypes.shape({
            initialInvestment: PropTypes.number.isRequired,
            annualInvestment: PropTypes.number.isRequired,
            expectedReturn: PropTypes.number.isRequired,
            duration: PropTypes.number.isRequired
        }).isRequired,
        onChange: PropTypes.func.isRequired,
    };

  return (
    <>
        <section id="user-input">

          <div className="input-group">
            <p>
            <label >Initial Investment</label>
            <input type="number" defaultValue ={userInput.initialInvestment}
                   onChange ={(event) => onChange('initialInvestment', event.target.value)} required/>
            </p>
          </div>

          <div className="input-group">
            <p>
            <label >Annual Return</label>
            <input type="number" defaultValue ={userInput.annualInvestment}
                   onChange ={(event) => onChange('annualInvestment', event.target.value)} required/>
            </p>
          </div>

          <div className="input-group">
                <p>
                <label >Expected Return</label>
                <input type="number" defaultValue ={userInput.expectedReturn}
                       onChange ={(event) => onChange('expectedReturn', event.target.value)} required/>
                </p>
          </div>
         
            <div className="input-group">
                <p>
                <label >Duration</label>
                <input type="number" defaultValue ={userInput.duration}
                       onChange ={(event) => onChange('duration', event.target.value)} required/>
                </p>
            </div>
        </section>
    </>
  )
}

export default UserInput