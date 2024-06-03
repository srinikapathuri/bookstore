import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

function Login() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  const sendOtp = async () => {
    await Auth.signIn(email);
    setStep(2);
  };

  const verifyOtp = async () => {
    await Auth.confirmSignIn(email, otp);
    // Redirect to home or admin based on user role
  };

  return (
    <div>
      {step === 1 ? (
        <div>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <button onClick={sendOtp}>Send OTP</button>
        </div>
      ) : (
        <div>
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="OTP" />
          <button onClick={verifyOtp}>Verify OTP</button>
        </div>
      )}
    </div>
  );
}

export default Login;
