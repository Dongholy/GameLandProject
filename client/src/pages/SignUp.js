import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import SignUpInput from './SignUpInput';

const SignPage = styled.div`
  height: 100vh;
  padding: 24px;
  background-color: #e9f4f8;
  display: flex;
  justify-content: center;
`;

const SignInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OauthButtonBox = styled.div`
  width: 316px;
  height: 43px;
  background-color: #fff;
  border: 1px solid #d5d7da;
  border-radius: 5px;
  margin: 30px 0px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #f8f9f9;
  }
`;

const SignInputBox = styled.form`
  padding: 24px;
  width: 316px;
  /* height: 596.203px; */
  background-color: #fff;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.1) 0px 2px 15px -10px;
`;

const Captcha = styled.div``;

const CaptchaBox = styled.div`
  width: 268px;
  height: 156px;
  color: #232629;
  background-color: #f1f2f3;
  margin: 6px 0px;
  padding: 8px 0px 2px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 12px 0px;
`;
const CheckboxInput = styled.input`
  margin-right: 4px;
`;
const CheckBoxText = styled.div`
  font-size: 12px;
  color: #0c0d0e;
`;

const SingUpButton = styled.button`
  width: 268px;
  height: 37.8px;
  background-color: #0a95ff;
  color: #fff;
  border: none;
  border-radius: 3px;
  margin: 2px 4px;
  padding: 10.4px;
  :hover {
    background-color: #3172c6;
  }
`;

const BottomTextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
`;

const MoreSmallText = styled.div`
  font-size: 12px;
  margin-top: 32px;
  color: #6a737c;
  > a {
    color: #0074cc;
  }
`;

const SmallText = styled.div`
  margin-top: 12px;
  font-size: 13px;
  color: #232629;
  > a {
    color: #0074cc;
  }
`;

function SignUp() {
  return (
    <div>
      <SignPage>
        <SignInput>
          <SignInputBox>
            <SignUpInput />
          </SignInputBox>
          <BottomTextBox />
        </SignInput>
      </SignPage>
    </div>
  );
}

export default SignUp;
