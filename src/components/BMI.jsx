import React, { useState } from 'react'


const BMI = () => {

    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [bmi, setBmi] = useState('')
    const [msg, setMsg] = useState('')

    const changeWeight = (e) => {
        setWeight(e.target.value);
    }

    const changeHeight = (e) => {
        setHeight(e.target.value);
    }

    const calculateBmi = (e) => {
        e.preventDefault();

        if (!weight || !height || weight <= 0 || height <= 0) {
            alert("Enter valid Information");
        }
        else {
            let bmi = (weight / (height * height)) * 703;
            setBmi(bmi.toFixed(1));

            if (bmi < 25) {
                setMsg('underWeight');
            }
            else if (bmi >= 25 && bmi < 30) {
                setMsg('Fit');
            }
            else {
                setMsg('Over Loded :)');
            }
        }
    }

    let reload = () => {
        window.location.reload()
    }

    return (
        <div className='BMI'>
            <div className='container'>


                <form onSubmit={calculateBmi}>
                    <h2>Calculate BMI</h2>
                    <div className='weight'>
                        <label>weight (BMI)- </label>
                        <input type='number' placeholder='your weight' value={weight} onChange={changeWeight}></input>
                    </div>
                    <div className='height'>
                        <label>height (inch)- </label>
                        <input type='number' placeholder='your height' value={height} onChange={changeHeight}></input>
                    </div>
                    <div className='btn'>
                        <button className='submitBtn' type='submit'>Sumbit</button>
                        <button className='reloadBtn' onClick={reload}>Reload</button>
                    </div>
                    <div className="msg">
                        <h3>your bmi is: {bmi}</h3>
                        <p>{msg}</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BMI
