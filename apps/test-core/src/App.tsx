import React from 'react'
import { html } from '@codemirror/lang-html'
import { javascript } from '@codemirror/lang-javascript'
import { json } from '@codemirror/lang-json'
import { styled } from '@stitches/react'
import CodeMirror from '@uiw/react-codemirror'

import { createSpecFromHTML } from '@reallygoodwork/ui-core'

const Wrapper = styled('div', {
  display: 'flex',
  width: '100%',
})

const Editor = styled('div', {
  width: '50%',
  '&:first-child': {
    borderRight: '1px solid #f0f0f0',
  },
})

const Title = styled('h2', {
  fontSize: '20px',
  margin: '0 0 10px',
})

const ConvertButton = styled('button', {
  padding: '10px 20px',
  fontSize: '16px',
  background: '#7c66dc',
  color: '#fff',
  fontWeight: 600,
  border: 'none',
  cursor: 'pointer',
  borderRadius: '9999px',
})

const ButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
})

const ConvertSelect = styled('select', {
  display: 'block',
  width: '100%',
  borderRadius: '6px',
  borderWidth: 0,
  paddingTop: '6px',
  paddingBottom: '6px',
  paddingLeft: '12px',
  paddingRight: '12px',
  boxShadow: '0 0 0 0px #fff,   0 0 0 calc(2px + 0px) rgb(59,130,246,0.5), 0 0 #0000',
})

function App() {
  const [convertType, setConvertType] = React.useState('html')
  const [valueIn, setValueIn] = React.useState('<div>Hello</div>')
  const [valueOut, setValueOut] = React.useState(
    '{\n' +
      '  "name": "Div",\n' +
      '  "elementType": "div",\n' +
      '  "styles": {},\n' +
      '  "hasText": true,\n' +
      '  "textValue": "Hello"\n' +
      '}',
  )

  const onChangeIn = React.useCallback((val, viewUpdate) => {
    setValueIn(val)
  }, [])

  const onChangeOut = React.useCallback((val, viewUpdate) => {
    setValueOut(val)
  }, [])

  const onConvert = React.useCallback(() => {
    const specValue = createSpecFromHTML(valueIn)
    setValueOut(JSON.stringify(specValue, null, 2))
  }, [valueIn])

  return (
    <>
      <Wrapper>
        <Editor>
          <Title>Input</Title>
          <CodeMirror theme={'dark'} value={valueIn} height="400px" extensions={[html()]} onChange={onChangeIn} />
        </Editor>
        <Editor>
          <Title>Output</Title>
          <CodeMirror theme={'dark'} value={valueOut} height="400px" extensions={[json()]} onChange={onChangeOut} />
        </Editor>
      </Wrapper>
      <ButtonContainer>
        <ConvertSelect>
          <option value="html">HTML</option>
          <option value="jsx">JSX</option>
        </ConvertSelect>
        <ConvertButton onClick={onConvert}>Convert</ConvertButton>
      </ButtonContainer>
    </>
  )
}

export default App
