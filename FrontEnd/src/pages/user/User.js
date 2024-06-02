// REACT
import { useState, useEffect } from 'react';

// REDUX
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userAction } from '../../redux/actions/user.actions.js';

//REQUETE API
import { userUpdateApi } from '../../api/userUpdate.api.js'

// COMPONENTS
import Bank from '../../components/bank/Bank.js'
import Button from '../../components/button/Button.js'
import Input from '../../components/input/Input.js'

//STYLE
import './user.css'

 function User() {

  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState('');
    
    const isAuthenticated = useSelector(state => state.login.isAuthenticated);
    const userData = useSelector((state) => state.user.userData);
    const token = window.localStorage.getItem('token');

    useEffect(() => {
      if (isAuthenticated) {
        try {
          const response = dispatch(userAction(token));
          response.then((data) => {
            console.log(data);
            if (data.status === 200) {
              const dataFirstName = data.body.firstName;      
              const dataLastName = data.body.lastName;
              const dataUserName = data.body.userName; 
              setFirstName(dataFirstName); 
              setLastName(dataLastName);
              setUserName(dataUserName);
            } 
          })} catch (error) {
          console.error(error);
        }
      }
    }, [isAuthenticated, token, dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();
      const userNameAttributes = { userName }
      try {
        const resUserName = await userUpdateApi(userNameAttributes, token);
        console.log(resUserName);   
        if (resUserName.status === 200) {
          // On met à jour les données utilisateur avec les valeurs des états
          dispatch(userAction(token));
          setIsEditing(false);
        } else {
          console.log("Echec de la mise à jour des données");
        }   
      } catch (error) {
        console.error("erreur lors de la mise à jour des données");
      }       
  };

  const handleCancel = () => {
      setIsEditing(false);
  };

    return ( 
        <main className="mainUser bg-dark">
            <section className="title">
            {isEditing ? (
              <form onSubmit={handleSubmit}>
                <h2>Edit user info</h2>
                  <div className="container-input">
                    <Input 
                      title="User name" 
                      name="userName"
                      id="userName"
                      htmlFor="userName"
                      autocomplete="username"  
                      value={userName || ""} 
                      onChange={(e) => setUserName(e.target.value)}
                    />   
                    <Input 
                      title="First name" 
                      name="firstName"
                      id="firstName"
                      htmlFor="firstName"
                      autocomplete="given-name"  
                      value={firstName}
                      onChange={() => {}}
                    />            
                    <Input  
                      title="Last name" 
                      name="lastName"
                      id="lastName"
                      htmlFor="lastName"
                      autocomplete="family-name" 
                      value={lastName} 
                      onChange={() => {}}
                    />
                  </div>
                  <div className="container-button">
                    <Button title="Save" type="submit" />
                    <input 
                    type="button" 
                    title="Cancel" 
                    className="btnCancel" 
                    value="Cancel" 
                    onClick={handleCancel} 
                    />
                  </div>
              </form>
              ) : (
              <>
                {userData && (
                  <h2>Welcome back<br />{firstName} {lastName} !</h2>
                )}
                <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Name</button>
              </>
            )}
            </section>           
            <Bank 
              title="Argent Bank Checking (x8349)" 
              amount="$2,082.79" 
              description="Available Balance" 
              buttonTitle="View transactions"
              path="/checking"
            />
            <Bank 
              title="Argent Bank Savings (x6712)" 
              amount="$10,928.42" 
              description="Available Balance" 
              buttonTitle="View transactions"
            />
            <Bank 
              title="Argent Credit Card (x8349)" 
              amount="$184.30" 
              description="Current Balance"
              buttonTitle="View transactions"
            />
        </main>
    );
}

export default User;