import Button from '../button/Button.js'
import './bank.css'

function Bank({title, amount, description, buttonTitle, path}) {

    return (
        <section className="account">
            <div className="account-content-wrapper">
            <h3 className="account-title">{title}</h3>
            <p className="account-amount">{amount}</p>
            <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <Button title={ buttonTitle } />
            </div>
      </section>
    )
}

export default Bank;