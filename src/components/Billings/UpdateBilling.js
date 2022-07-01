import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
import AddUpdateForm from './AddUpdateForm';

const UpdateBilling = ({ pagerState, setPagerState, setFetchAgain, updateValues }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
            email: updateValues?.email,
            fullName: updateValues?.fullName,
            paidAmount: parseInt(updateValues?.paidAmount),
            phone: updateValues?.phone
        }
    });

    const updateData = async (data) => {
        const newBilling = {
            email: data.email,
            fullName: data.fullName,
            paidAmount: parseInt(data.paidAmount),
            phone: data.phone
        }
        const oldPageOfItems = pagerState?.pageOfItems
        oldPageOfItems.unshift(newBilling)
        setPagerState({ ...pagerState, pageOfItems: oldPageOfItems })
        fetch('https://boxing-mountie-80750.herokuapp.com/api/update-billing', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': localStorage.getItem('accessToken')
            },
            body: JSON.stringify(newBilling)
        })
            .then(res => res.json())
            .then(result => {
                setFetchAgain(true)
                toast.success('Product successfully updateed')
                reset()
            })
            .catch(err => {
                oldPageOfItems.shift(newBilling)
                setPagerState({ ...pagerState, pageOfItems: oldPageOfItems })
            })
    }

    return (
        <AddUpdateForm updateData={updateData} register={register} errors={errors} handleSubmit={handleSubmit} reset={reset} />
    );
};

export default UpdateBilling;