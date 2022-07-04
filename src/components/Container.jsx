import styled, {keyframes} from "styled-components";
import { fadeIn } from "react-animations";

const animation = keyframes`${fadeIn}`;

const Container = ({ children }) => {
  return (
    <Box>
      {children}
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 0 auto;
  padding: 1.5rem;
  animation: 1s ${animation}
`

export default Container