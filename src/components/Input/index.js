import { InputContainer } from './style';

export const Ipunt = ({value}) => {
  return (
    <InputContainer>
       <input disabled value={value} />
    </InputContainer>
  );
}

export default Ipunt;
