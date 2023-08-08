import React from "react";
import styled from "styled-components";

const ContactsWrapper = styled.div`
  display: flex;
  max-width: 1440px;
  margin: auto;
  
  @media (max-width: 910px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  background-color: #007fa8;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

const ContactForm = styled.div`
  flex: 2;
  background-color: lightgray;
  padding: 2rem;
  gap: 3rem;
  display: flex;

  @media (max-width: 668px) {
    flex-direction: column;
    gap: 0;
  }

  @media (max-width: 450px) {
    padding: 0.25rem;
  }
`;

const InfoTitle = styled.h2`
  font-size: 4rem;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const InfoSubtitle = styled.p`
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const InfoLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
  margin: 1rem 0;
`;

const InfoRequired = styled.p`
  font-size: 1rem;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const FormSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid lightgray;
  border-radius: 4px;
  margin-bottom: 0.5rem;
`;

const TextAreaField = styled.textarea`
  padding: 1rem;
  font-size: 1rem;
  resize: vertical;
  border: 1px solid lightgray;
  border-radius: 4px;
  margin-bottom: 0.5rem;

  @media (max-width: 668px) {
    margin-bottom: 0;
  }
`;

const CheckboxLabel = styled.label`
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  background-color: #007fa8;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;
`;

const Contacts = () => {
  return (
    <ContactsWrapper>
      <ContactInfo>
        <InfoTitle>Contact us</InfoTitle>
        <InfoSubtitle>
          KAMITEKA is a strong team with a common goal — your best offer!
        </InfoSubtitle>
        <InfoLine />
        <InfoRequired>* Required fields</InfoRequired>
      </ContactInfo>
      <ContactForm>
        <FormSection>
          <FormColumn>
            <InputField type="text" placeholder="Enter your country *" />
            <InputField type="text" placeholder="Enter your name *" />
            <InputField type="text" placeholder="Enter your company *" />
          </FormColumn>
          <FormColumn>
            <TextAreaField rows="4" placeholder="Enter your message *" />
          </FormColumn>
        </FormSection>
        <FormSection>
          <FormColumn>
            <InputField type="tel" placeholder="Enter your phone number *" />
            <InputField type="email" placeholder="Enter your e-mail *" />
          </FormColumn>
          <FormColumn>
            <InputField type="text" placeholder="Enter a model *" />
            <CheckboxLabel>
              <input type="checkbox" />I agree to allow KAMITEKA to store and
              process my personal data.
              <SubmitButton>Submit</SubmitButton>
            </CheckboxLabel>
          </FormColumn>
        </FormSection>
      </ContactForm>
    </ContactsWrapper>
  );
};

export default Contacts;