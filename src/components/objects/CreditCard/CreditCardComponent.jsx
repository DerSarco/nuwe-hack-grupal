import React from "react";
import fetchAPI from "../../functions/fetchAPI";
import Button from "@material-ui/core/Button";
import CardForm from './addCardForm';
import DisplayCard from './displayCard';
import './styles/CreditCardComponent.css'

class CreditCardComponent extends React.Component {
    state = {
        foundCard: false,
        addCard: false,
        card: null
    };
    
    componentDidMount() {
        this.setState({
            foundCard: false,
            addCard: false,
            card: null
        });
        this.getCreditCard();
    }

    getCreditCard = async () => {
        let result = await fetchAPI.API.getCard();
        console.log(result);
        
        if (!result.errorStatus) {
            this.setState({
                foundCard: true,
                card: result
            })
        }
        
    }

    handleAddClick = () => {
        this.setState({
            addCard: true
        })
    }

    handleRegisterCard = async (body) => {
        let result = await fetchAPI.API.addCreditCard(body);
        console.log(result);
        this.setState({
            foundCard: true,
            addCard: false,
            card: result
        });
    }

    render() {
        return(
            <div>
                <h1 className="align-center">Your Credit Card</h1>
                {!this.state.foundCard && !this.state.addCard && (
                    <div className='flex-center'>
                        <div className='align-center not-found'>
                            <h2>You don't have a credit card associated with your account</h2>
                            <h4>Do you want to add one?</h4>
                            <Button variant="contained" color="primary" onClick={this.handleAddClick} >Add Credit Card</Button>
                        </div>
                    </div>
                )}
                {this.state.addCard && (
                    <CardForm handleRegisterCard={this.handleRegisterCard} />
                )}
                {this.state.foundCard && (
                    <DisplayCard card={this.state.card} />
                )}
            </div>
        )
    }
}

export default CreditCardComponent;