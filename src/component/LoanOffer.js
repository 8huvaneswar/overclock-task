import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const LoanOffer = ({ offerId = 0 }) => {
    let config = {
        headers: {
            "Authorization": "1251a1de9906a858d1fc697792a5f5a7065a5fe984a159b1d3c3bbea160aa39b",
        }
    }
    const [loanOffer, setLoanOffer] = useState([]);

    useEffect(() => {
        if(offerId){
            axios.get(`https://api.sfd.interview.ovckd.dev/v1/user/applications/${offerId}/offers`, config)
            .then(res => {
                setLoanOffer(res.data)
            })
        }
    }, [offerId])

    return (
        <div className='container mb-20'>
            <div className='row g-3 py-4'>
                {loanOffer && loanOffer.map((data, i) => (
                    <div className='col-12 col-sm-6 col-md-4'>
                        <Card key={i} className="p-3">
                            <CardImg top src={data.bank_logo} className="bank-image" alt={data.bank_logo} />
                            <CardBody>
                            <CardTitle className="text-left fw-600">{data.bank}</CardTitle>
                            <CardSubtitle className="text-left">Interest Rate: <span className='fw-600'>{data.interest_rate}</span></CardSubtitle>
                            <CardText className="text-left">Tensure <span className='fw-600'>{data.tenure}</span></CardText>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LoanOffer
