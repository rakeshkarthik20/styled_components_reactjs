import './App.css'
import {
  Heading,
  CustomButton,
  OutlineButton,
  ConditionalButton,
} from './styledComponents'

const App = () => (
  <>
    <Heading>Hello World</Heading>

    <CustomButton>Click</CustomButton>

    <OutlineButton colorProperty="#0070c1" backgroundColorProperty="#ffffff">
      Click
    </OutlineButton>

    <ConditionalButton outline={true}>
      Conditional True button{' '}
    </ConditionalButton>

    <ConditionalButton outline={false}>
      Conditional False button{' '}
    </ConditionalButton>
  </>
)

export default App
