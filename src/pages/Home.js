import React, { useState } from 'react'
import Header from './Header';
import LoanCard from '../component/LoanCard';
import LoanOffer from '../component/LoanOffer';
import { ToastContainer } from 'react-toastify';

const Home = (props) => {
    const [offerId, setOfferId] = useState();

    return (
        <div>
            <Header />
            <LoanCard {...props} displayLoanOfferId={setOfferId} />
            <LoanOffer offerId={offerId + 1} />
            <ToastContainer /> 
        </div>
    )
}

export default Home
