import styled from 'styled-components';
import { Form, Field } from 'formik';
export const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const FormInput = styled(Field)`
  margin-left: 12px;
  padding: 8px;
  font-family: inherit;
`;

export const StyledForm = styled(Form)`
  border: 1px solid black;
  display: inline-block;
  padding: 20px;
  text-align: center;
`;
