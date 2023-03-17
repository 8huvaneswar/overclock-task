import React, { useState, useEffect } from 'react'
import useAxios from '../useAxios';
import {
    Button
} from 'reactstrap';

const LoanCard = ({ displayLoanOfferId }) => {
    const { response, loading, error } = useAxios({
        method: 'get',
        url: '/user/applications',
    });

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        if (response !== null) {
            setUserData(response);
        }
    }, [response]);

    return (
        <div>
            {userData && userData.map((item, i) => (
                <div className='container bg-secondary py-5 mt-5'>
                    <h1 className="display-3 text-white">{item.university}</h1>
                    <p className="f-24 text-white fw-800">Loan Amount: {item.loan_amount}</p>
                    <hr className="my-2" />
                    <p className='text-white'>Offer Url: {item.offers_url}</p>
                    <p className="lead">
                    <Button color="primary" onClick={
                        () => {
                            displayLoanOfferId(i)
                        }
                    }>Click Here to View Loan Offer</Button>
                    </p>
                </div>
            ))}
        </div>
    )
}

export default LoanCard
