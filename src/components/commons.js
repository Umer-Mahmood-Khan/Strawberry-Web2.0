import styled from 'styled-components';
import { Button } from 'baseui/button';
import { Input } from 'baseui/input';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #d1ffdb; /* Light green background */
`;

export const InnerContainer = styled.div`
  width: 400px;
  padding: 2rem;
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
`;

export const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const ErrorText = styled.div`
  color: red;
  margin-bottom: 1rem;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  background-color: ${(props) => props.$color};
  padding: 12px 24px;
  font-size: 16px;
  &:hover {
    background-color: #2e4d2b;
  }
`;

export const StyledInput = styled(Input)`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  &:hover {
    border-color: #80bdff;
  }
  &:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  margin-bottom: 6px;
  display: block;
  text-align: left;
  color: #555;
`;
