import { emailTemplate } from "../../src/js-foundation/01-template"

describe('Tests in 01-template', () => {

  test('emailTemplate should contain a greeting',  () => {  
    expect( emailTemplate ).toContain('Hi, {{name}}')
  })

  test('emailTemplate should contain {{name}} and {{orderId}}', () => {
    expect( emailTemplate ).toMatch(/{{name}}/)
    expect( emailTemplate ).toMatch(/{{orderId}}/)
  })

})